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
import { client } from "../../hooks/client";
import { css } from "@emotion/css";
import image_galaxy from "../../image/galaxy-image.jpg";
import { handleLocalStorage } from "../../localStorage";

interface AuthDataType {
  accessToken: string | null;
  tokenType: "Bearer";
  userDto: {
    id: number;
    fullName: string;
    userName: string;
    roleSet: [] | null;
  };
}

const LoginForm: React.FC = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);

  const onFinish = (values: any) => {
    if (values?.username && values?.password) {
      client
        .post("/api/login", values)
        .then((response: any) => {
          let data: AuthDataType = response?.data;
          if (data) {
            handleLocalStorage.setAuthInfo(data);
          }
          context.setIsLogin(true);
          navigate("/main");
        })
        .catch((error) => {
          MessageError("UserName or password is incorrect!");
          handleLocalStorage.setAuthInfo(null);
        });
    } else {
      MessageWarning("enter input please");
    }
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

  return (
    <div>
      <img
        src="galaxy-image.jpg"
        style={{
          position: "absolute",
          top: 0,
          width: "98.9vw",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 140,
          }}
        >
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
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
                <span style={{ color: "white" }}> Or </span>
                <span>
                  <a href="" onClick={() => onRegister()}>
                    register now!
                  </a>
                </span>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
