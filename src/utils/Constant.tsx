import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
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
  getItem(<Link to="/login">Log out</Link>, "1", <PieChartOutlined />),
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
