import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./style.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Map from "./Map";
import SidePanel from "./components/SidePanel";

const { Header, Footer, Content } = Layout;

export default function App() {
  const [collapsed, toggleCollapse] = useState(false);

  const toggle = () => {
    toggleCollapse(!collapsed);
  };
  return (
    <div className="App">
      <Layout>
        <SidePanel />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            <Map />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            MapUp ©2020 Copyrights
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
