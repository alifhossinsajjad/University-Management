import { Layout, Menu, type MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {  createElement } from "react";
import Item from "antd/es/list/Item";
import { Outlet } from "react-router";

const { Header, Content, Footer, Sider } = Layout;

const item : MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    
  },
  {
    key: "2",
    label: "profile",
  },
  {
    key: "3",
    label: "user management",
    children: [
      {
        key: "23",
        label: "create admin",
      },
      {
        key: "34",
        label: "create student",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{font: "medium", color:'white', textAlign:'center', fontSize:"8px", height:"40px", display:"flex", marginLeft :'15px', marginTop :'10px',alignItems:"center"}}>
            <h1>University Management</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={item}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
            <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
