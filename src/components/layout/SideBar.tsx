import { Layout, Menu } from "antd";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
  SUPERADMIN : "superAdmin"
};
const SideBar = () => {
  const user = useAppSelector(selectCurrentUser)

  let sideBarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sideBarItems = sideBarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.SUPERADMIN:
      sideBarItems = sideBarItemsGenerator(adminPaths, "superAdmin");
      break;
    case userRole.FACULTY:
      sideBarItems = sideBarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sideBarItems = sideBarItemsGenerator(studentPaths, "student");
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
        }}
      ></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default SideBar;
