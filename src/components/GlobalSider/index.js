import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { getMenuData } from '../../common/menu';

import styles from './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;


export default class GlobalSider extends React.PureComponent {

renderSubMenu = (item, index) => {
  return (
    <SubMenu
      title={
        <span>
          <Icon type={item.icon} />
          <span>{item.name}</span>
        </span>
      }
      key={index}>
      {
        item.children.map((value, i) => {
          return (
            <Menu.Item key={i}>
              <Link to={value.path}>
                <Icon type={value.icon}/>
                <span>{value.name}</span>
              </Link>
            </Menu.Item>
          )
        })
      }
    </SubMenu>
  )
}
render() {
  return (
    <Sider trigger={null} collapsible>
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['0']}
      >
        {
          getMenuData().map((item, index) => {
            if(item.children) {
              return this.renderSubMenu(item, index)
            }
            return (
              <Menu.Item>
                <Link to={item.path}>
                  <Icon type={item.icon}/>
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}
}
