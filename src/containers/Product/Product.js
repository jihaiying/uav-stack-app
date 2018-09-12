import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Product extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "product"
            })}
          </title>
        </Helmet>
        <FormattedMessage id="productPage" />
      </div>
    );
  }
}

Product.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Product);
