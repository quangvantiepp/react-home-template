import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/layout/login/LoginForm";
import LayoutMain from "./components/layout/LayoutPages/LayoutMain";

function App() {
  const [checkLogin, setCheckLogin] = useState<boolean>(false);

  useEffect(() => {
    // render again
  }, [checkLogin]);

  return (
    <div className="App">
      <Routes>
        <Route
          path={"/login"}
          element={<LoginForm setLogin={setCheckLogin} />}
        ></Route>
        <Route
          path="/main/*"
          element={<LayoutMain setLogin={setCheckLogin} />}
        ></Route>
        <Route path="/*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
