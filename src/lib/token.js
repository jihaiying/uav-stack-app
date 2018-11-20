/**
 * get token from localStorage
 * Created by jihaiying on 2018/09/27.
 */
export function getToken() {
  let apphubtoken = "";
  try {
    apphubtoken = window.localStorage.getItem("apphubtoken") || "";
  } catch (e) {}
  return apphubtoken;
}

export function getUserInfo() {
  let user = {};
  try {
    user = JSON.parse(window.localStorage.getItem("user"));
  } catch (e) {}
  return user;
}
