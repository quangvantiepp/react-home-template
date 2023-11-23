import { Card as AntCard, CardProps } from "antd";
import React from "react";
import { cardClass as styles } from "../../../styles/components/custom/cards/styles";

const Card: React.FC<CardProps> = (props) => {
  return <AntCard {...props} className={styles.antCardClass}></AntCard>;
};

export default Card;
