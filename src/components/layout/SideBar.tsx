import { Layout, Menu } from 'antd';
import { sideBarItemsGenerator } from '../../utils/sideBarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
const { Sider } = Layout;

const SideBar = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarItemsGenerator(adminPaths, 'admin')} />
      </Sider>
    );
};

export default SideBar;