import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { Layout } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as warningStrategyActions from "./api";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../../components/Loading";
const StrategyListComponent = Loadable({
  loader: () => import("./StrategyList"),
  loading: Loading
});
const AddStrategyComponent = Loadable({
  loader: () => import("./AddStrategy/"),
  loading: Loading
});
const NoMatchComponent = Loadable({
  loader: () => import("../../../components/NoMatch"),
  loading: Loading
});
class WarningStrategy extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <Layout style={{ background: "white" }}>
        <Helmet
          title={formatMessage({
            id: "warningStrategy.pageTitle"
          })}
        />
        <Switch>
          <Route
            path="/appHub/godEye/warningStrategy/list"
            component={StrategyListComponent}
          />
          <Route
            path="/appHub/godEye/warningStrategy/add"
            component={AddStrategyComponent}
          />
          <Route component={NoMatchComponent} />
        </Switch>
      </Layout>
    );
  }
}

WarningStrategy.propTypes = {
  intl: intlShape.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getStrategy: warningStrategyActions.getStrategy
      },
      dispatch
    )
  };
}
export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WarningStrategy)
);
