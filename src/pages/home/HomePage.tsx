import { Button, Result } from "antd";
import { useEffect, useState } from "react";
import wormHole from "../../assets/images/wormhole.png";
import styles from "./HomePage.module.css";
import EmbedYoutube from "../../videos/clipYoutube/EmbedYoutube";
import axios from "axios";

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);
  axios
    .get("http://localhost:8080/users/3")
    .then((response) => {
      console.log("res:", response?.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
  return (
    <div>
      <h3> Home page </h3>
      <div style={{ width: "30%", height: "30%" }}>
        <img src={wormHole} alt="not loading" className={styles.picture} />
      </div>

      <EmbedYoutube />
    </div>
  );
};

export default HomePage;
