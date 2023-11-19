import React, { createContext, useState } from "react";
interface DataContext {
  isLogin: boolean;
  setIsLogin: Function;
}
const MainContext = createContext<DataContext>({
  isLogin: false,
  setIsLogin: () => {},
});

export const MainContextProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  console.log("isLogin:", isLogin);
  return (
    <MainContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
