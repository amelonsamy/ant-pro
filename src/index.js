import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '@/index.less';

import BasicLayout from './layouts/BasicLayout';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <BasicLayout />
  </Router>,
  document.getElementById('root')
);
