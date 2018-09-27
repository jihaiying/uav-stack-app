/**
 * get token from localStorage
 * Created by jihaiying on 2018/09/27.
 */
export function getToken() {
  let token = "";
  try {
    token = JSON.parse(window.localStorage.getItem("user")).token || "";
  } catch (e) {}
  return token;
}

export function getUserInfo() {
  let user = {};
  try {
    user = JSON.parse(window.localStorage.getItem("user"));
  } catch (e) {}
  return user;
}
