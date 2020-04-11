import React, { useState, useEffect } from 'react';
// import Menu, { Slider, Layout } from 'antd';
import { Menu, Layout } from 'antd';
import { Link } from '@reach/router';
import styles from './index.less';
// import './index.less';
// const { Sider } = Layout;
const { SubMenu } = Menu;
const { Sider } = Layout;

function SideMenu(props) {
  const { logo } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breadpoint="lg"
      onCollapse={() => (collapsed ? setCollapsed(false):setCollapsed(true))}
      width={256}
    >
      <div className={styles.logo} key="appLogo">
        {/* <div className="logo" key="appLogo"> */}
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>X-Plat Antd Front</h1>
        </Link>
      </div>
      <Menu
        key="sliderMenu"
        theme="dark"
        mode="inline"
        // selectKeys={selectKeys}
        style={{ padding: '16px 0', width: '100%' }}
      >
        <SubMenu title="子功能">
          <Menu.Item>
            <Link to="/a">子功能1</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/b">子功能2</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SideMenu;
