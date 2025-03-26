import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem(<Link to="/option1">Option 1</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/option2">Option 2</Link>, "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to="/user/tom">Tom</Link>, "3"),
    getItem(<Link to="/user/bill">Bill</Link>, "4"),
    getItem(<Link to="/user/alex">Alex</Link>, "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem(<Link to="/team/1">Team 1</Link>, "6"),
    getItem(<Link to="/team/2">Team 2</Link>, "8"),
  ]),
  getItem(<Link to="/files">Files</Link>, "9", <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const sidebarWidth = collapsed ? 80 : 200; // Adjust based on AntD default

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
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
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Fixed Header */}
        <Header
          style={{
            position: "fixed",
            // width: `calc(100% - ${sidebarWidth}px)`,
            width: "100%",
            zIndex: 1000,
            background: colorBgContainer,
            padding: "0 16px",
          }}
        >
          <div style={{ color: "black" }}>Header</div>
        </Header>

        {/* Fixed Content */}
        <Content
          style={{
            position: "fixed",
            top: 64, // Same height as Header
            left: sidebarWidth,
            width: `calc(100% - ${sidebarWidth}px)`,
            height: "calc(100vh - 64px)",
            overflow: "auto",
            background: "#f0f2f5",
            padding: "16px",
          }}
        >
          <div className="max-w-7xl mx-auto h-screen overflow-y-scroll p-4">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicie. Illum nostrum
              modi consequuntur, dolores inventore explicabo aliquam id alias
              exercitationem saepe dolor magni molestias in aspernatur adipisci
              soluta molestiae ea sunt. Deserunt sed incidunt similique
              perferendis iure ipsa saepe sapiente illo at odit voluptatum
              numquam quia aliquid ad eius distinctio corrupti ducimus fuga eum
              expedita modi, totam, quam itaque nihil. Illo, ut, obcaecati hic
              alias ad maiores delectus, accusantium laudantium porro nemo
              quisquam cumque? Quisquam perferendis, ex necessitatibus commodi
              qui excepturi! Et distinctio eius nam quis ipsa, placeat nostrum
              incidunt provident asperiores tempore hic, consequatur debitis
              labore aperiam commodi unde assumenda eum voluptas dolore
              molestias, natus repellat sunt! Minus quasi, cupiditate
              repellendus dolores recusandae eius in omnis tempore autem
              doloremque vel libero, ullam corrupti rerum reiciendis, quo iure
              et facilis repudiandae magnam tenetur provident pariatur. Iusto
              quasi aspernatur architecto blanditiis saepe eius voluptatum minus
              et provident illum soluta distinctio laudantium cum rerum dolorum
              autem perferendis velit quaerat, sequi neque quam nulla dolorem
              fugit? Itaque consequatur debitis nihil eius nostrum pariatur
              ipsam iusto aliquid nobis dolorum modi minus expedita laboriosam
              iure repellendus sit tenetur atque perspiciatis, illum eos! Odio
              sed dignissimos et, beatae tenetur ratione, numquam, rerum culpa
              quod pariatur saepe! Suscipit recusandae a saepe nostrum,
              perferendis aliquid unde aperiam perspiciatis, id officia, harum
              incidunt dolorem tenetur dignissimos quas minima. Fuga incidunt
              omnis sit officia, cupiditate est minus ab vitae alias molestias
              reiciendis corrupti fugit, commodi id voluptatum assumenda,
              asperiores quod nostrum? Nulla, quisquam eos voluptatum placeat
              porro doloribus tempora animi voluptatibus veritatis labore
              repudiandae suscipit dicta illum aspernatur culpa minus,
              exercitationem illo alias eius dignissimos nam a. Illum sint
              deserunt reiciendis adipisci laborum! Molestias dolores
              perferendis consequatur a iure officia pariatur neque at. Impedit
              nemo in debitis sapiente cum laudantium magni reprehenderit
              cupiditate quo, pariatur molestiae nihil dolorem reiciendis totam.
              Voluptate commodi veritatis quis illo labore officia animi
              cupiditate mollitia corrupti impedit. Doloribus placeat corporis
              vero voluptatum odit ducimus illo ad, et pariatur provident at rem
              ipsam? Natus laborum, itaque, perferendis vitae sapiente
              aspernatur quidem corrupti provident in laboriosam expedita quia
              consequatur voluptatum qui, unde modi molestias ex quam?
              Voluptates, hic magni culpa quo, recusandae nostrum neque ad cum
              doloremque necessitatibus tenetur accusantium ullam saepe. Impedit
              corrupti ullam quod soluta praesentium natus itaque provident
              veniam assumenda nisi?
            </h1>
          </div>
        </Content>

        {/* Fixed Footer */}
        <Footer
          style={{
            position: "fixed",
            bottom: 0,
            // width: `calc(100% - ${sidebarWidth}px)`,
            textAlign: "center",
            background: colorBgContainer,
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
