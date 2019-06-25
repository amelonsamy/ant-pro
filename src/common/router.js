import React, { lazy } from 'react';

// 路由配置 ReactLoadable实现按需加载
const routerConfig = [
  {
    path: '/dashboard/analysis',
    component: lazy(() => import('../routes/Dashboard/Analysis')),
  },
  {
    path: '/dashboard/monitor',
    component: lazy(() => import('../routes/Dashboard/Monitor')),
  },
  {
    path: '/dashboard/workplace',
    component: lazy(() => import('../routes/Dashboard/Workplace')),
  },
];

export default routerConfig;