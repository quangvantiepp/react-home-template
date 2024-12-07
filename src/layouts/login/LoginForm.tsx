import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageError,
  MessageWarning,
} from "../../components/custom/messages/ant_message";
import MainContext from "../../context/MainContext";
import { client, CLIENT_ADDRESS } from "../../hooks/client";
import { handleLocalStorage } from "../../localStorage";
import "./LoginForm.scss";
import { css } from "@emotion/css";

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
      `${CLIENT_ADDRESS}/register`,
      "_blank",
      "location=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <div
      className={css`
        background-image: url(https://vpassets.infinityfree.net/welcome2017/background.jpg);
        background-position: center center;
        background-size: cover;
        height: auto;
        left: 0;
        min-height: 100%;
        min-width: 100%;
        position: absolute;
        top: 0;
        width: auto;
      `}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className={css`
            position: fixed;
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.6);
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          `}
        />
        <div
          style={{
            position: "fixed",
            top: 140,
            zIndex: 3,
            fontWeight: "bolder",
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
                  <a
                    className="register-box"
                    href=""
                    onClick={() => onRegister()}
                  >
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
