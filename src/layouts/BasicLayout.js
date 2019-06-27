import React, {Suspense, Fragment, lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router';

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
              <Suspense fallback={<Fragment />}>
                <Switch>

                  {
                    routerConfig.map((routes, i) => (
                      <Route key={routes.path} path={routes.path} component={routes.component}/>
                    ))
                  }
                  <Redirect to="/dashboard/analysis" />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
