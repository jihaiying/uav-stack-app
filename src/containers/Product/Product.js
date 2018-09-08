import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Product extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>产品页</title>
        </Helmet>
        产品页
      </div>
    );
  }
}

export default Product;
