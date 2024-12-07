import { css } from "@emotion/css";
import { Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import Button from "../../components/custom/buttons";
import {
  MessageSuccess,
  MessageWarning,
} from "../../components/custom/messages/ant_message";
import { SERVER_ADDRESS } from "../../hooks/client";
import { registerFormStyles as styles } from "../../styles/layouts/register_form/styles";

interface DataSubmit {
  fullName: any;
  userName: any;
  passWord: any;
  age: any;
  email: any;
  phoneNumber: string;
}

const Register = () => {
  const [dataUserRegister, setDataUserRegister] = useState<DataSubmit>({
    age: null,
    email: null,
    fullName: null,
    passWord: null,
    userName: null,
    phoneNumber: "",
  });

  const onLoginNow = () => {
    window.close();
  };

  const onSubmit = () => {
    const data = dataUserRegister;
    if (
      data?.passWord === null ||
      data?.passWord?.length <= 3 ||
      data?.userName === null ||
      data?.userName?.length <= 3 ||
      data?.fullName === null ||
      data?.fullName?.length <= 3
    ) {
      MessageWarning("Password and username are required");
      return;
    }
    axios
      .post(
        `${SERVER_ADDRESS}api/user/register?age=${data?.age}&email=${data?.email}&fullName=${data?.fullName}&passWord=${data?.passWord}&userName=${data?.userName}&phoneNumber=${data?.phoneNumber}`
      )
      .then((response) => {
        return MessageSuccess("Register success!");
      })
      .catch((error) => {
        console.log("error", error);
        return message.error(error?.response?.data?.message);
      });
  };

  const onInput = (value: any, typeInput: any) => {
    console.log("onInput:", value, "id:", typeInput);
    setDataUserRegister({ ...dataUserRegister, [typeInput]: value });
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
        className={css`
          position: fixed;
          opacity: 1;
          background-color: rgba(5, 31, 60, 0.6);
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        `}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={styles.boxInput}>
          <div style={{ color: "white", fontSize: 28 }}> Register</div>
          <Input
            placeholder="Full name"
            onChange={(e) => onInput(e.target.value, "fullName")}
          />
          <Input
            placeholder="User name "
            onChange={(e) => onInput(e.target.value, "userName")}
          />
          <Input.Password
            placeholder="Password"
            onChange={(e) => onInput(e.target.value, "passWord")}
          />
          <Input
            placeholder="phone number"
            onChange={(e) => onInput(e.target.value, "phoneNumber")}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="primary" onClick={onSubmit}>
              Submit
            </Button>
            <Button onClick={onLoginNow}>Back to login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
