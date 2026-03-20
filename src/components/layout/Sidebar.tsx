import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

import type { MenuProps } from "antd";

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  if (!user) return null;

  let sidebarItems: MenuProps["items"] = [];

  const role = user.role === 'superAdmin' ? 'admin' : user.role;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;

    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      sidebarItems = [];
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu theme="dark" mode="inline" items={sidebarItems} />
    </Sider>
  );
};
export default Sidebar;
