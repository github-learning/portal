import { routes } from '@/routers';
import './index.less';
import { BasicLayoutChildren, App as RemoteApp } from 'remote/shared';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'moment/locale/zh-cn';

const mode =
  process.env.NODE_ENV === 'production' ? '' : process.env.REACT_APP_ENV;

// Wrapper component that provides Router context to shared components
const SharedAppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ConfigProvider locale={locale}>{children}</ConfigProvider>
    </BrowserRouter>
  );
};

const BaseApp = () => {
  return (
    <RemoteApp
      system="portal"
      isMenuUrlAddSystemName={false}
      mode={mode}
      routes={routes}
      authLoginType="KXGC"
      websocketParams={{}}
      documentTitlePrefix="新一代项目管理服务平台"
    >
      <BasicLayoutChildren layout="head" canChangeCompany>
        <Suspense fallback={null}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </BasicLayoutChildren>
    </RemoteApp>
  );
};

const App = () => (
  <SharedAppWrapper>
    <BaseApp />
  </SharedAppWrapper>
);

export default App;
