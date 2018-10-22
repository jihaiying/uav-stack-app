import { CALL_API } from "../../middleware/api";

export const GET_STRATEGY = Symbol("GET_STRATEGY");
export function getStrategy(params, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method: "get",
      body: params,
      path: `/strategies`,
      successType: GET_STRATEGY,
      afterSuccess,
      afterError
    }
  };
}
