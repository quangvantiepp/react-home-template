import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginForm from "./layouts/login/LoginForm";
import LayoutMain from "./layouts/LayoutPages/LayoutMain";
import { useContext } from "react";
import MainContext from "./context/MainContext";
import Register from "./layouts/register_form";

const App = () => {
  const context = useContext(MainContext);
  return (
    <div className="App">
      <Routes>
        {!context.isLogin ? (
          <>
            <Route path="/register" element={<Register />}></Route>
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
