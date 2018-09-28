import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../shared/Header";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>404</title>
        </Helmet>
        <Header />
        404
      </div>
    );
  }
}

export default NoMatch;
