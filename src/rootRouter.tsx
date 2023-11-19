import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/layout/login/LoginForm";
import HomePage from "./pages/home/HomePage";
import Error404 from "./pages/notFound/Error404";
import TableExpand from "./pages/test/TableExpand";
import FileTest from "./components/export/file/FileTest";
import { useContext } from "react";
import MainContext from "./context/MainContext";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem(
    <Link
      to="/login"
      onClick={() => {
        const context = useContext(MainContext);
        return context.setIsLogin(false);
      }}
    >
      Log out
    </Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem(<Link to="home"> Home</Link>, "2", <DesktopOutlined />),
  getItem("List", "3", <UserOutlined />, [
    getItem(<Link to="table"> Table</Link>, "6"),
    getItem(<Link to="fileExport"> file</Link>, "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem(<Link to="error404"> Page6</Link>, "9", <FileOutlined />),
];

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="home" element={<HomePage />}></Route>
      <Route path="error404" element={<Error404 />}></Route>
      <Route path="table" element={<TableExpand />}></Route>
      <Route path="fileExport" element={<FileTest />}></Route>
    </Routes>
  );
};
