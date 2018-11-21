import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as languageActionCreator from "../../../global/globalActions";
import { LANGUAGES } from "../../../config/enum";
import { Button } from "antd";

class LanguageSwitchBtn extends Component {
  render() {
    const { lang, actions } = this.props;
    return (
      <Button type="primary" onClick={actions.switchLanguage}>
        {lang === LANGUAGES.en ? "中文" : "English"}
      </Button>
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
        switchLanguage: languageActionCreator.switchLanguage
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitchBtn);
