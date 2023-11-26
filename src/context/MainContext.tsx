import React, { createContext, useState } from "react";
interface DataContext {
  isLogin: boolean;
  setIsLogin: Function;
  isRegister: boolean;
  setIsRegister: Function;
}
const MainContext = createContext<DataContext>({
  isLogin: false,
  isRegister: false,
  setIsLogin: () => {},
  setIsRegister: () => {},
});

export const MainContextProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  console.log("isLogin:", isLogin);
  return (
    <MainContext.Provider
      value={{ isLogin, isRegister, setIsLogin, setIsRegister }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
