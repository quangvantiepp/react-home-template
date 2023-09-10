import { Button, Result } from "antd";
import React from "react";
import hotgirl from "../../assets/hotGirl.jpg";
import styles from "./HomePage.module.css";
import EmbedYoutube from "../../videos/clipYoutube/EmbedYoutube";
const HomePage: React.FC = () => {
  return (
    <div>
      <h3> Home page </h3>
      <img src={hotgirl} alt="not loading" className={styles.picture} />
      <EmbedYoutube />
    </div>
  );
};

export default HomePage;
