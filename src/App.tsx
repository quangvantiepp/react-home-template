import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/layout/login/LoginForm";
import LayoutMain from "./components/layout/LayoutPages/LayoutMain";
import { useContext } from "react";
import MainContext from "./context/MainContext";

const App = () => {
  const context = useContext(MainContext);

  return (
    <div className="App">
      <Routes>
        {context.isLogin === false ? (
          <>
            <Route path={"/login"} element={<LoginForm />}></Route>
            <Route path="/*" element={<Navigate to="/login" />}></Route>
          </>
        ) : (
          <>
            <Route path="/main/*" element={<LayoutMain />}></Route>
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
