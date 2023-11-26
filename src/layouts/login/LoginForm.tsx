import React, { useContext, useEffect } from "react";
import "./LoginForm.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import axios from "axios";
import {
  MessageError,
  MessageSuccess,
  MessageWarning,
} from "../../components/custom/messages/ant_message";

const LoginForm: React.FC = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);

  const onFinish = (values: any) => {
    const http = "http://localhost:8080/users/getInfoUserLogin";
    console.log("onSubmid");
    if (!!values?.username && !!values?.password) {
      axios
        .get(
          `${http}?passWord=${values?.password}&userName=${values?.username}`
        )
        .then((reponse) => {
          console.log("res user:", reponse);
          if (reponse?.data?.id !== null && reponse?.data?.id !== undefined) {
            context.setIsLogin(true);
            navigate("/main");
            return MessageSuccess("is user");
          } else {
            MessageError("username or pass word is incorect");
          }
        })
        .catch((error) => {
          MessageError("not user");
        });
    } else {
      MessageWarning("enter input please");
    }
    // if (values?.username === "tiep" && values?.password === "8888") {
    //   context.setIsLogin(true);
    //   navigate("/main");
    // } else {
    //   message.error("username or password incorrect ");
    // }
  };
  const onRegister = () => {
    // navigate("/register");
    window.open(
      // document.URL +
      "http://localhost:3000/register",
      "_blank",
      "location=yes,scrollbars=yes,status=yes"
    );
  };
  console.log("re-render");
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <a href="" onClick={() => onRegister()}>
            register now!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
