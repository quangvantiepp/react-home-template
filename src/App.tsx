import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/layout/login/LoginForm";
import LayoutMain from "./components/layout/LayoutPages/LayoutMain";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<LoginForm />}></Route>
        <Route path="/main/*" element={<LayoutMain />}></Route>
        <Route path="/*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
