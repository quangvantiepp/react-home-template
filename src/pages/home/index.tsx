import { Result } from "antd";
import { useEffect, useState } from "react";
import wormHole from "../../assets/images/wormhole.png";
import EmbedYoutube from "../../videos/clipYoutube/EmbedYoutube";
import axios from "axios";
import { homeStyles as styles } from "../../styles/pages/home/styles";
import { Content } from "antd/es/layout/layout";
import Card from "../../components/custom/cards";
import Button from "../../components/custom/buttons";
import { UseHttp } from "../../hooks/use-http";
import { client } from "../../hooks/client";
import { homeServices } from "../../services/home";

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const testGetUserId = "http://localhost:8080/api/random";

  const { sendRequest, isLoading } = UseHttp();

  const handleTest = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
    };

    sendRequest(homeServices.getTestData, applyData, null);
  };

  const checkValidToken = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
    };
    sendRequest(homeServices.verifyToken, applyData, null);
  };

  const refreshToken = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
    };
    sendRequest(homeServices.refreshToken, applyData, null);
  };

  const apiAdmin = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
    };
    sendRequest(homeServices.getApiAdminPage, applyData, null);
  };

  const apiUser = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
    };
    sendRequest(homeServices.getApiUserPage, applyData, null);
  };

  return (
    <div>
      <Button onClick={handleTest} type="primary">
        Button
      </Button>
      <Button onClick={checkValidToken} type="primary">
        Verify token
      </Button>
      <Button onClick={refreshToken} type="primary">
        refresh token
      </Button>
      <Button onClick={apiAdmin} type="primary">
        gat api admin page
      </Button>
      <Button onClick={apiUser} type="primary">
        gat api user page
      </Button>
      <div>
        <Card title={"my card"} className="">
          <EmbedYoutube />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
