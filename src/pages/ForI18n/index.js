import React, { Component } from "react";
import App from "../App/";
import { IntlProvider } from "react-intl";
import zh_CN from "../../i18n/zh_CN";
import en_US from "../../i18n/en_US";
import { LANGUAGES } from "../../config/enum";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { runFitPage } from "../../lib/fitPage";
import { bindActionCreators } from "redux";
import * as globalActions from "../../actions/global";
import { LocaleProvider } from "antd";
import zh from "antd/lib/locale-provider/zh_CN";

class ForI18n extends Component {
  componentDidMount() {
    const { actions } = this.props;
    runFitPage((width, height) => actions.updateDimension({ width, height }));
  }
  render() {
    const { lang } = this.props;
    const message = lang === LANGUAGES.en ? en_US : zh_CN;
    return (
      <IntlProvider locale="en" messages={message}>
        <LocaleProvider locale={zh}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateDimension: globalActions.updateDimension
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForI18n);
