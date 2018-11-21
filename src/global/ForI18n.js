import React, { Component } from "react";
import App from "./App";
import { IntlProvider } from "react-intl";
import zh_CN from "../i18n/zh_CN";
import en_US from "../i18n/en_US";
import { LANGUAGES } from "../config/enum";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { runFitPage } from "../lib/fitPage";
import { bindActionCreators } from "redux";
import * as globalActionCreator from "./globalActions";
import { LocaleProvider } from "antd";
import zh from "antd/lib/locale-provider/zh_CN";
import Storage from "../lib/storage";

class ForI18n extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    runFitPage((width, height) => actions.updateDimension({ width, height }));
    window.addEventListener("message", function(event) {
      if (event.data.type && event.data.type === "uav.apphub.user.token") {
        const userInfo = {
          apphubtoken: event.data.msg,
          user: {}
        };
        actions.setUserInfo(userInfo);
      }
    });
    setTimeout(
      function() {
        this.setState({
          load: true
        });
      }.bind(this),
      500
    );
    const apphubtoken = Storage.get("uav.apphub.user.token");
    if (apphubtoken) {
      const userInfo = {
        apphubtoken: apphubtoken,
        user: Storage.get("user")
      };
      actions.setUserInfo(userInfo);
    }
  }

  render() {
    const { lang } = this.props;
    const { load } = this.state;
    const message = lang === LANGUAGES.en ? en_US : zh_CN;
    return (
      <IntlProvider locale="en" messages={message}>
        <LocaleProvider locale={zh}>
          <BrowserRouter>{load && <App />}</BrowserRouter>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.globalData.get("lang")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateDimension: globalActionCreator.updateDimension,
        setUserInfo: globalActionCreator.setUserInfo
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForI18n);
