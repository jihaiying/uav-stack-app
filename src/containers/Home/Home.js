import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>首页</title>
        </Helmet>
        首页
      </div>
    );
  }
}

export default Home;
