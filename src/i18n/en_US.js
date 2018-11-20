import Log from "../pages/GodEye/Log/i18n/en_US.js";
import WarningStrategy from "../pages/GodEye/WarningStrategy/i18n/en_US.js";
import Login from "../pages/Login/i18n/en_US.js";
import AppHub from "../pages/AppHub/i18n/en_US.js";

const LogStr = JSON.stringify(Log);
const WarningStrategyStr = JSON.stringify(WarningStrategy);
const LoginStr = JSON.stringify(Login);
const AppHubStr = JSON.stringify(AppHub);

const en_US = JSON.parse(
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

export default en_US;
