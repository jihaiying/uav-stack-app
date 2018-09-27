import { CALL_API } from "../../middleware/api";

export const GET_NEWS = Symbol("GET_NEWS");
export function getNews(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method: "post",
      body: params,
      path: `/api/we_article/get_all_audited_we_article_list`,
      successType: GET_NEWS,
      afterSuccess,
      afterError
    }
  };
}
