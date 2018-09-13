import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Download extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "download"
            })}
          </title>
        </Helmet>
        <FormattedMessage id="downloadPage" />
      </div>
    );
  }
}

Download.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Download);
