import React, { Component } from "react";
import App from "../App/";
import { IntlProvider } from "react-intl";
import zh_CN from "../../i18n/zh_CN";
import en_US from "../../i18n/en_US";
import { LANGUAGES } from "../../config/enum";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

class ForI18n extends Component {
  render() {
    const { lang } = this.props;
    const message = lang === LANGUAGES.en ? en_US : zh_CN;
    return (
      <IntlProvider locale="en" messages={message}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang")
  };
}

export default connect(mapStateToProps)(ForI18n);
