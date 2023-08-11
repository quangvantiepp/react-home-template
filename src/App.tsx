import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/layout/login/LoginForm";
import LayoutMain from "./components/layout/LayoutPages/LayoutMain";
import HomePage from "./pages/home/HomePage";

function App() {
  const [checkLogin, setCheckLogin] = useState<boolean>(false);

  useEffect(() => {
    // render again
  }, [checkLogin]);

  return (
    <div className="App">
      {/* <nav>
        <Link to="/"> Home</Link>

        <Link to="/layout"> page1</Link>

        <Link to="/home"> page2</Link>
      </nav>
      */}
      {checkLogin === false ? (
        <Routes>
          <Route
            path="/"
            element={<LoginForm setLogin={setCheckLogin} />}
          ></Route>
          <Route
            path="/main"
            element={<LayoutMain setLogin={setCheckLogin} />}
          ></Route>
        </Routes>
      ) : (
        <LayoutMain setLogin={setCheckLogin} />
      )}
    </div>
  );
}

export default App;
