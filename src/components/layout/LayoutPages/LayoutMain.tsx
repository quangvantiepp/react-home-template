import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import HomePage from "../../../pages/home/HomePage";
import Error404 from "../../../pages/notFound/Error404";
import TableExpand from "../../../pages/test/TableExpand";
import FileTest from "../../export/file/FileTest";
import { Routers, items } from "../../../rootRouter";

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const LayoutMain: React.FC = (props) => {
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
        <Menu theme="dark" mode="inline" items={items}></Menu>
      </Sider>

      <Layout>
        <div>
          <div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            ></Menu>
          </div>
          <div>
            <Button> Button</Button>
          </div>
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
                maxHeight: "80vh",
                minHeight: "80vh",
                background: colorBgContainer,
                overflowY: "auto",
              }}
            >
              {/* <Routes>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="home" element={<HomePage />}></Route>
                <Route path="error404" element={<Error404 />}></Route>
                <Route path="table" element={<TableExpand />}></Route>
                <Route path="fileExport" element={<FileTest />}></Route>
              </Routes> */}
              <Routers />
            </div>
          </Content>
        </div>

        <Footer style={{ textAlign: "center" }}>
          Future social ©2023 Created by quang.tiep
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
