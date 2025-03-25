import { MainPage, ProfilePage, LoginPage, ErrorPage } from "../page";
import User from "../store/user";
import { mode } from "./mode";

export const route = () => {
  let routeMode = mode();
  let user = new User();
  let username = user.get().username;
  if (routeMode === "hash") {
    console.log("hash");
    switch (window.location.hash) {
      case "#/":
        return MainPage();
      case "#/profile":
        return ProfilePage();
      case "#/login":
        if (username) {
          return MainPage();
        }
        return LoginPage();
      default:
        return ErrorPage();
    }
  }
  if (routeMode === "history") {
    console.log("test hisroty?");
    switch (location.pathname) {
      case "/":
        return MainPage();
      case "/profile":
        return ProfilePage();
      case "/login":
        if (username) {
          // location.pathname = "/";
          // return MainPage();
        }
        return LoginPage();
      default:
        return ErrorPage();
    }
  }
};
