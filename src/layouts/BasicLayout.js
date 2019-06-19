import React from 'react';
import { Route, Switch } from 'react-router';

import { Layout, Menu } from 'antd';

import GlobalSider from '../components/GlobalSider';
import GlobalHeader from '../components/GlobalHeader';

import styles from './BasicLayout.less';

import routerConfig from '../common/router';

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <GlobalSider/>
          <Layout>
            <Header style={{ backgroundColor: '#fff'}}>
              <GlobalHeader/>
            </Header>
            <Content style={{ padding: '24', minHeight: '520px'}}>
              <Switch>
                {
                  routerConfig.map((routes, i) => (
                    <Route path={routes.path} component={routes.component}/>
                  ))
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
