import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as globalActionCreator from "../../global/globalActions";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { actions } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const userInfo = {
          apphubtoken: "111111111111111111111",
          user: {
            name: "纪海英",
            sex: "女",
            email: "haiyingji@creditease.cn"
          }
        };
        actions.setUserInfo(userInfo);
      }
    });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ paddingTop: "200px" }}>
        <Helmet title={formatMessage({ id: "login.pageTitle" })} />
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="" style={{ float: "right" }}>
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  intl: intlShape.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        setUserInfo: globalActionCreator.setUserInfo
      },
      dispatch
    )
  };
}

export default connect(
  null,
  mapDispatchToProps
)(injectIntl(Form.create()(withRouter(Login))));
