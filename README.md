## portal 项目

### 启动

1. 装包 执行 yarn
2. 启动服务
  - 开发环境 yarn start:dev
  - 测试环境 yarn start:test

### 联邦环境配置

1.  在 .env 修改域名地址
  - REMOTE_PATH_DEV 开发环境
  - REMOTE_PATH_TEST 测试环境

### 项目结构

- [cicd](./cicd)：CI/CD 相关的配置文件
- [src](./src)：代码目录
  - [assets](./src/assets)：静态资源目录
  - [components](./src/components)：组件目录
  - [constants](./src/constants)：常量目录
  - [core](./src/core)：第三方包中转目录
  - [fuction-code](./src/fuction-code)：权限配置目录
  - [hooks](./src/hooks)：自定义 hook 目录
  - [pages](./src/pages)：页面目录
    - [xxx]：页面文件夹
      - [components]：页面组件目录
      - [hooks]：页面 hooks 目录
      - [utils]：页面 utils 目录
      - [constants]：页面 constants 目录
      - [types]：页面 types 目录
      - [index.tsx]：页面入口文件
      - [index.module.less]：页面局部样式文件
  - [remotesTypes](./src/remotesTypes)：远程模块类型声明目录
  - [routes](./src/routes)：路由配置目录
  - [services](./src/services)：接口目录
  - [types](./src/types)：全局类型声明目录
  - [utils](./src/utils)：全局工具函数目录
  - [App.tsx](./src/App.tsx)：根组件
  - [bootstrap.tsx](./src/bootstrap.tsx)：微前端启动文件
  - [index.tsx](./src/index.tsx)：入口文件
  - [index.less](./src/index.less)：全局样式文件
- [.env](./.env)：环境变量配置
- [.npmrc](./.npmrc)：npm 配置
- [craco.config.js](./craco.config.js)：craco 配置
- [modulefederation.config.js](./modulefederation.config.js)：modulefederation
  配置

