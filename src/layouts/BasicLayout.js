import React from 'react';

import { Layout } from 'antd';

import GlobalSider from '../components/GlobalSider';

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <GlobalSider/>
          <Header>头部</Header>
          <Content>欢迎打开任欢的ant-pro</Content>
        </Layout>
      </div>
    )
  }
}
