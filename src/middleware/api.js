import superAgent from "superagent";
import Promise from "bluebird";
import _ from "lodash";
import config from "../config";
import { getToken } from "../lib/token";
import { defer } from "../lib/defer";

export const CALL_API = Symbol("CALL_API");
export const CHAIN_API = Symbol("CHAIN_API");

export default ({ dispatch, getState }) => next => action => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [() => action]
    });
  }

  if (!action[CHAIN_API]) {
    return next(action);
  }

  let promiseCreators = action[CHAIN_API].map(apiActionCreator => {
    return createRequestPromise(apiActionCreator, next, getState, dispatch);
  });

  let overall = promiseCreators.reduce((promise, creator) => {
    return promise.then(body => {
      return creator(body);
    });
  }, Promise.resolve());

  let deferred = defer();

  overall
    .finally(() => {
      deferred.resolve();
    })
    .catch(() => {});

  return deferred.promise;
};

function actionWith(action, toMerge) {
  let ret = Object.assign({}, action, toMerge);
  delete ret[CALL_API];
  return ret;
}

function createRequestPromise(apiActionCreator, next, getState, dispatch) {
  return prevBody => {
    let apiAction = apiActionCreator(prevBody);
    let deferred = defer();
    let params = extractParams(apiAction[CALL_API]);

    let url = params.url;
    const token = getToken();
    superAgent[params.method](url)
      .send({ ...params.body, token })
      .query(params.query)
      .end((err, res) => {
        if (res.type === "text/plain") {
          if (res.text.indexOf(":") === -1) {
            res.body = res.text;
          } else {
            res.body = JSON.parse(res.text);
          }
        }
        let resBody = res.body;
        if (resBody === "[]") {
          resBody = [];
        }
        if (err) {
          if (params.errorType) {
            dispatch(
              actionWith(apiAction, {
                type: params.errorType,
                error: err
              })
            );
          }

          if (_.isFunction(params.afterError)) {
            params.afterError({ getState, response: resBody });
          }
          deferred.reject();
        } else {
          dispatch(
            actionWith(apiAction, {
              type: params.successType,
              response: resBody,
              params: {
                body: params.body
              }
            })
          );

          if (_.isFunction(params.afterSuccess)) {
            params.afterSuccess({ getState, response: resBody });
          }
          deferred.resolve(resBody);
        }
      });

    return deferred.promise;
  };
}

function extractParams(callApi) {
  let {
    method,
    path,
    query,
    body,
    successType,
    errorType,
    afterSuccess,
    afterError
  } = callApi;

  let url = `${config.API_BASE_URL}${path}`;

  return {
    method,
    url,
    query,
    body,
    successType,
    errorType,
    afterSuccess,
    afterError
  };
}
