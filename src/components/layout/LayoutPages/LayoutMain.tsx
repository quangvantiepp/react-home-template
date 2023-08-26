import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import HomePage from "../../../pages/home/HomePage";
import Error404 from "../../../pages/notFound/Error404";
import TableExpand from "../../../pages/test/TableExpand";

const { Header, Content, Footer, Sider } = Layout;

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

const items: MenuItem[] = [
  getItem(<Link to="/login">Log out</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="home"> Home</Link>, "2", <DesktopOutlined />),
  getItem("List", "3", <UserOutlined />, [
    getItem(<Link to="table"> Table</Link>, "6"),
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem(<Link to="error404"> Page6</Link>, "9", <FileOutlined />),
];
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const LayoutMain: React.FC<{ setLogin: any }> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          // defaultSelectedKeys={["2"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <div>
          <Header
            style={{
              //   position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              background: colorBgContainer,
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          </Header>
        </div>
        <div>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                maxHeight: 800,
                minHeight: 800,
                background: colorBgContainer,
                overflowY: "auto",
              }}
            >
              Bill is a cat.
              <Routes>
                <Route
                  path="/login"
                  element={
                    <LoginForm setLogin={props.setLogin} checkLogin={false} />
                  }
                ></Route>
                <Route path="home" element={<HomePage />}></Route>
                <Route path="error404" element={<Error404 />}></Route>
                <Route path="table" element={<TableExpand />}></Route>
              </Routes>
            </div>
          </Content>
        </div>

        <Footer style={{ textAlign: "center" }}>
          Future social ©2023 Created by tiep.quang
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
