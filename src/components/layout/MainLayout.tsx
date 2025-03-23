import { Layout } from "antd";
const { Header, Content } = Layout;
import logoImg from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header
          style={{ padding: 0, display: "flex", justifyContent: "center" }}
        >
          {" "}
          <img
            style={{ height: "60px", borderRadius: "10%" }}
            src={logoImg}
            alt=""
          />
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
