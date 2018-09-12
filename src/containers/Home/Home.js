import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Home extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "home"
            })}
          </title>
        </Helmet>
        <FormattedMessage id="homePage" />
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
