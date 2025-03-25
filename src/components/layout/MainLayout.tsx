import { Button, Layout } from "antd";
const { Header, Content } = Layout;
import logoImg from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = () =>{
     dispatch(logout())
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header
          style={{ padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          {" "}
          <img
            style={{ height: "60px", borderRadius: "10%" }}
            src={logoImg}
            alt=""
          />
          <Button onClick={()=> handleLogOut()} type="primary">Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
