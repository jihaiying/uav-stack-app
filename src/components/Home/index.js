import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
// import Banner from "./partial/Banner";
// import Header from "../shared/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as homeActions from "../../actions/api/home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    const { actions } = this.props;
    const params = {
      page_size: 3
    };
    actions.getNews(params, ({ response }) => {
      console.log(response);
      this.setState({
        data: response
      });
    });
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={formatMessage({
            id: "home"
          })}
        />
        {/*<Header />*/}
        {/*<Banner />*/}
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getNews: homeActions.getNews
      },
      dispatch
    )
  };
}

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
