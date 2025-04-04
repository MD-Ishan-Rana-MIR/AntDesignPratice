import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem("Button", "sub1", <PieChartOutlined />,[
    getItem(<Link to="/button">Button </Link>, "1" , <PieChartOutlined /> )
  ]),
  getItem("Typography", "sub2", <PieChartOutlined />,[
    getItem(<Link to="/typography">Typography </Link>, "2" , <PieChartOutlined /> )
  ],),
 
  
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const location = useLocation();

  // Get selected key based on URL
  const selectedKey = items
    .flatMap((item) => (item.children ? item.children : item))
    .find((i) => i.label.props.to === location.pathname)?.key || "1";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{
          height: "100vh",
          position: "fixed",
          overflow: "auto",
          left: 0,
          top: "65px",
          zIndex: 1000,
        }}
      >
        <Menu
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]} // Set selected key dynamically
          style={{
            background: "white",
          }}
          theme="light"
        />
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            background: token.colorBgContainer,
            padding: "0 16px",
          }}
        >
          <div style={{ color: "black" }}>Header</div>
        </Header>

        <Content
          style={{
            position: "fixed",
            top: 64,
            left: collapsed ? 80 : 200,
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            height: "calc(100vh - 64px)",
            overflow: "auto",
            background: "#f0f2f5",
            padding: "16px",
          }}
        >
          <div className="text-justify h-screen overflow-y-scroll p-4">
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            textAlign: "center",
            background: token.colorBgContainer,
            width: "100%",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
