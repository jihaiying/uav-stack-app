import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import Banner from "./partial/Banner";
import Header from "../shared/Header";
import UpdateTab from "./partial/UpdateTab";
import ProductPanel from "./partial/ProductPanel";
import OutlineTab from "./partial/OutlineTab";
import SupportPanel from "./partial/SupportPanel";
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
        <Header />
        <Banner />
        <UpdateTab />
        <ProductPanel />
        <OutlineTab />
        <SupportPanel />
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
