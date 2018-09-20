import React, { Component } from "react";
import css from "./assets/UpdateTab.css";
import { FormattedHTMLMessage } from "react-intl";

class UpdateTab extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.tab}>
            <FormattedHTMLMessage id="updateTab_update" />
          </div>
          <div className={css.tab}>
            <FormattedHTMLMessage id="updateTab_fix" />
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateTab;
