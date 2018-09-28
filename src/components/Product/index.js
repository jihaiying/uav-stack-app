import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import Header from "../shared/Header";

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
        <Header />
        <FormattedMessage id="productPage" />
      </div>
    );
  }
}

Product.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Product);
