import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import Banner from "./partial/Banner";

class Home extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={formatMessage({
            id: "home"
          })}
        />
        <Banner />
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
