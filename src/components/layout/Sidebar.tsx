import { Layout, Menu } from "antd";
import React from "react";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";


const {Sider} = Layout

const role = {
ADMIN : 'admin'
}



const Sidebar = () => {

const role = 'admin '


let sidebarItems ;



switch()



    return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div
          style={{
            font: "medium",
            color: "white",
            textAlign: "center",
            fontSize: "8px",
            height: "40px",
            display: "flex",
            marginLeft: "15px",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <h1>University Management</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(adminPaths,'role')}
        />
      </Sider>
  );
};

export default Sidebar;
