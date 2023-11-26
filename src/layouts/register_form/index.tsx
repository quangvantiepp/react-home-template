import React, { useState } from "react";
import Button from "../../components/custom/buttons";
import Input from "../../components/custom/inputs";
import {
  MessageSuccess,
  MessageWarning,
} from "../../components/custom/messages/ant_message";
import { registerFormStyles as styles } from "../../styles/layouts/register_form/styles";
import axios from "axios";

interface DataSubmit {
  fullName: any;
  userName: any;
  passWord: any;
  age: any;
  email: any;
}

const Register = () => {
  const [dataUserRegister, setDataUserRegister] = useState<DataSubmit>({
    age: null,
    email: null,
    fullName: null,
    passWord: null,
    userName: null,
  });

  const onLoginNow = () => {
    window.close();
  };

  const onSubmit = () => {
    const data = dataUserRegister;
    const http = "http://localhost:8080/users/user_register";
    if (
      data?.email === null ||
      data?.email?.length <= 0 ||
      data?.passWord === null ||
      data?.passWord?.length <= 0 ||
      data?.userName === null ||
      data?.userName?.length <= 0 ||
      data?.fullName === null ||
      data?.fullName?.length <= 0 ||
      data?.age === null ||
      data?.age?.length <= 0
    ) {
      MessageWarning("Typing input please");
      return;
    }
    axios
      .post(
        `${http}?age=${data?.age}&email=${data?.email}&fullName=${data?.fullName}&passWord=${data?.passWord}&userName=${data?.userName}`
      )
      .then((response) => {
        console.log("res:", response);
        return MessageSuccess("Register success!");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const onInput = (value: any, typeInput: any) => {
    console.log("onInput:", value, "id:", typeInput);
    setDataUserRegister({ ...dataUserRegister, [typeInput]: value });
  };

  return (
    <div className={styles.container}>
      <div> Register</div>
      <div className={styles.boxInput}>
        <Input
          placeholder="Full name"
          onChange={(e) => onInput(e.target.value, "fullName")}
        />
        <Input
          placeholder="User name "
          onChange={(e) => onInput(e.target.value, "userName")}
        />
        <Input
          type="number"
          placeholder="Pass word"
          onChange={(e) => onInput(e.target.value, "passWord")}
        />
        <Input
          placeholder="Age"
          onChange={(e) => onInput(e.target.value, "age")}
        />
        <Input
          placeholder="Email"
          onChange={(e) => onInput(e.target.value, "email")}
        />
      </div>
      <div>
        <Button onClick={onSubmit}> Submit</Button>
        <Button onClick={onLoginNow}>Back to login</Button>
      </div>
    </div>
  );
};

export default Register;
