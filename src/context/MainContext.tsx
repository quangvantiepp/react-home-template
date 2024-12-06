import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface DataUser {
  age: any;
  email: any;
  fullName: any;
  id: any;
  passWord: any;
  userName: any;
}

interface DataContext {
  isLogin: boolean;
  setIsLogin: Function;
  isRegister: boolean;
  setIsRegister: Function;
  userInfo: DataUser | null;
  setUserInfo: Function;
}

const MainContext = createContext<DataContext>({
  isLogin: false,
  isRegister: false,
  userInfo: null,
  setIsLogin: () => {},
  setIsRegister: () => {},
  setUserInfo: () => {},
});

export const MainContextProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<DataUser>({
    age: null,
    email: null,
    fullName: null,
    id: null,
    passWord: null,
    userName: null,
  });

  console.log("isLogin:", isLogin);
  return (
    <MainContext.Provider
      value={{
        isLogin,
        isRegister,
        userInfo,
        setIsLogin,
        setIsRegister,
        setUserInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
