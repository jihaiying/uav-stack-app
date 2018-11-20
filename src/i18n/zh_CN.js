import Log from "../pages/GodEye/Log/i18n/zh_CN.js";
import WarningStrategy from "../pages/GodEye/WarningStrategy/i18n/zh_CN.js";
import Login from "../pages/Login/i18n/zh_CN.js";
import AppHub from "../pages/AppHub/i18n/zh_CN.js";

const LogStr = JSON.stringify(Log);
const WarningStrategyStr = JSON.stringify(WarningStrategy);
const LoginStr = JSON.stringify(Login);
const AppHubStr = JSON.stringify(AppHub);

const zh_CN = JSON.parse(
  "{" +
    LogStr.substring(1, LogStr.length - 1) +
    "," +
    WarningStrategyStr.substring(1, WarningStrategyStr.length - 1) +
    "," +
    LoginStr.substring(1, LoginStr.length - 1) +
    "," +
    AppHubStr.substring(1, AppHubStr.length - 1) +
    "}"
);

export default zh_CN;
