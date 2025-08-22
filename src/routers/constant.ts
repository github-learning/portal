/**
 * 路由组件的一些配置
 */

//无需菜单栏的路由
export const withoutSiderRouter = [];

//无需菜单和头部的路由
export const withoutSiderAndHeaderRouter = ['/portal/magr'];

//无需头部的路由
export const withoutHeaderRouter = [];

//可选头部tab
export const headerTabs = [
  { label: '工作台', path: '/portal/home' },
  { label: '项目', path: '/portal/project-analysis' },
  { label: '企业', path: '/portal/uims-manage' },
];
