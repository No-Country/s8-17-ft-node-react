import Cookies from "js-cookie";
import { USER_TOKEN } from "./constants";

export function checkSession() {
  const userToken = Cookies.get(USER_TOKEN);

  if (userToken) {
    return userToken;
  } else {
    return "";
  }
}
