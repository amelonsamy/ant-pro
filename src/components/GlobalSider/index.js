import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import menuData from '../../common/menu';

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
              <Icon type={value.icon}/>
              <span>{value.name}</span>
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
      <Menu theme="dark" mode="inline">
        {
          menuData.map((item, index) => {
            if(item.children) {
              return this.renderSubMenu(item, index)
            }
            return (
              <Menu.Item>
                <Icon type={item.icon}/>
                <span>{item.name}</span>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}
}
