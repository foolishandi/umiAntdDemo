import './utils/https';

// @ts-ignore
// import { history } from 'umi'
// import './utils/axiosCustom'
// let exRoutes;

// //动态添加路由
// export function patchRoutes({ routes }) {
//   // console.log(routes)
//   routes.unshift({
//     path: '/foo',
//     exact: true,
//     // @ts-ignore
//     component: require('@/pages/Error').default,
//   });

// //   合并服务器返回路径
//   exRoutes.map(item=>{
//     routes.unshift({
//         path:item.path,
//         component:require(`@/pages${item.component}`).default
//     })
//   })
// }

//覆写render，在patchRoutes之前执行
export function render(oldRender) {
  // 模拟返回路径
  //   exRoutes = [{ path: '/server', component: '/user2' }];
  //  渲染之前，登录鉴权
  //   let isLoading=true
  //   if(!isLoading ){
  //     history.push('/login')
  //   }
  oldRender();
  // fetch('/api/routes').then(res=>res.json()).then(res=>{
  //     exRoutes=res.routes
  //     oldRender()
  // })
}

//覆写render，在patchRoutes之后执行
export function onRouteChange({ location, routes, action, matchedRoutes }) {
  // 访问统计
  // console.log(location.pathname,"被访问了！")
  console.log(matchedRoutes);
  // 设置标题
  if (matchedRoutes.length) {
    document.title =
      '测试 - ' +
      (matchedRoutes[matchedRoutes.length - 1].match.path.slice(1) || '');
  }
}
