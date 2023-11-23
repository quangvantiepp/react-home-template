import { Result } from "antd";
import { useEffect, useState } from "react";
import wormHole from "../../assets/images/wormhole.png";
import EmbedYoutube from "../../videos/clipYoutube/EmbedYoutube";
import axios from "axios";
import { homeStyles as styles } from "../../styles/pages/home/styles";
import { Content } from "antd/es/layout/layout";
import Card from "../../components/custom/cards";
import Button from "../../components/custom/buttons";

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
      <Button>button</Button>
      <div>
        <Card title={"my card"} className="">
          <Content color="green">hello world</Content>
        </Card>
      </div>

      <EmbedYoutube />
    </div>
  );
};

export default HomePage;
