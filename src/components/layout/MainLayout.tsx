import { Layout, Menu, MenuProps } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import logoImg from '../../assets/images/logo.png'
const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Dashboard'
    },
    {
        key: '2',
        label: 'Profile',
    },
    {
        key: '3',
        label: 'User Management',
        children: [
            {
                key: '4',
                label: 'Create Students'
            },
            {
                key: '5',
                label: 'Create Fecaulty'
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img style={{height: '50px', borderRadius: '10%'}} src={logoImg} alt="" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
              content
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