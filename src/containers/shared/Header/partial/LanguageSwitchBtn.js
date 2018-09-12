import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as languageActionCreator from "../../../../actions/language";
import { LANGUAGES } from "../../../../config/enum";

class LanguageSwitchBtn extends Component {
  render() {
    const { lang, actions } = this.props;
    return (
      <button onClick={actions.switchLanguage}>
        {lang === LANGUAGES.en ? "中文" : "English"}
      </button>
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
