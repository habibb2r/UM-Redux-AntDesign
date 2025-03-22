import { Layout, Menu, MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import logoImg from '../../assets/images/logo.png'
import { NavLink, Outlet } from 'react-router-dom';
const items: MenuProps['items'] = [
    {
        key: 'Dashboard',
        label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
    },
    {
        key: 'User Management',
        label: 'User Management',
        children: [
            {
                key: 'Create Student',
                label: <NavLink to="/admin/create-student">Create Student</NavLink>
            },
            {
                key: 'Create Faculty',
                label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
            },
            {
                key: 'Create Admin',
                label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
            }
        ]
    }
]

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, display: 'flex', justifyContent: 'center' }}> <img style={{height: '60px', borderRadius: '10%'}} src={logoImg} alt="" /></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
             <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;