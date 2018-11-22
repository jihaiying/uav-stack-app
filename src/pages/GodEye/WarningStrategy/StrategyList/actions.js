import { ADD_NUM } from "./actionTypes";

export function addNum({ num }) {
  return {
    type: ADD_NUM,
    num
  };
}
