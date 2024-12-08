import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./App.css";
import LoginForm from "./layouts/login/LoginForm";
import LayoutMain from "./layouts/LayoutPages/LayoutMain";
import { useContext, useEffect } from "react";
import MainContext from "./context/MainContext";
import Register from "./layouts/register_form";
import Content from "./pages/content";
import { UseHttp } from "./hooks/use-http";
import { homeServices } from "./services/home";
import { UseHttpBody } from "./hooks/use-http-body";
import { handleLocalStorage } from "./localStorage";
import { Spin } from "antd";
import { LogoutPage } from "./layouts/logout";

const App = () => {
  const context = useContext(MainContext);
  const navigate = useNavigate();

  const { sendRequest, isLoading } = UseHttpBody();
  const checkValidToken = () => {
    const applyData = (res: any) => {
      console.log("res data:", res);
      if (res?.status && Math.floor(res.status / 100) !== 2) {
        context.setIsLogin(false);
        handleLocalStorage.setAuthInfo(null);
      } else if (res?.data) {
        context.setIsLogin(true);
        navigate("/main");
      }
    };
    sendRequest(homeServices.verifyToken, applyData, null);
  };

  // check valid token
  useEffect(() => {
    checkValidToken();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/main/*" element={<LayoutMain />}></Route>
        <Route path={"/login"} element={<LoginForm />}></Route>
        <Route path="/logout" element={<LogoutPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<Navigate to="" />}></Route>
        <Route path="" element={<Content />}></Route>
      </Routes>
    </div>
  );
};

export default App;
