import { Button as AntButton, ButtonProps } from "antd";
import React from "react";
import { buttonClass as styles } from "../../../styles/components/custom/buttons/styles";

const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props} className={styles.container}></AntButton>;
};

export default Button;
