import { Input as AntInput, InputProps } from "antd";
import React from "react";
import { inputStyles as styles } from "../../../styles/components/custom/inputs/styles";

const Input: React.FC<InputProps> = (props) => {
  return (
    <AntInput
      {...props}
      className={`${styles.container}, ${props.className}`}
    />
  );
};

export default Input;
