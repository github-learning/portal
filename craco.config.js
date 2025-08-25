const getCracoConfig = require('@core/craco-config');

module.exports = getCracoConfig({
  authLoginType: 'KXGC',
  babelPlugins: [],
  // publicPath: '/',
  basename: '/',
  isReplaceMoment: false,
  // DEV_API_KXGC: 'http://49.7.222.208:30810',
  // TEST_API_KXGC: 'http://49.7.222.208:30810',

  target: 'http://10.233.6.72',
  // target: 'http://dev-pm.crccit.com:31006',
  DEV_API_KXGC: 'http://dev-pm.crccit.com:31006',
  TEST_API_KXGC: 'http://dev-pm.crccit.com:31006',
  cacheDir: '/tj-portal',
});
