export default [
  // { path: '/', redirect: '/admin' },
  {
    path: '/login',
    component: '@/pages/Login',
  },
  {
    // path: '/admin',
    path: '/',
    component: '@/pages/layouts/LayoutTopSide/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      {
        name: '查询表格',
        path: '/admin/listtablelist',
        component: './ListTableList',
      },
      {
        name: '个人中心',
        path: '/admin/accountcenter',
        component: './AccountCenter',
      },
      {
        // path: '/admin',
        path: '/',
        component: '@/pages/Home',
      },
      {
        path: '/admin/userlist',
        component: '@/pages/UserList',
        title: '页面1',
      },
      {
        component: '@/pages/Error',
      },
    ],
  },
  {
    component: '@/pages/Error',
  },
];
