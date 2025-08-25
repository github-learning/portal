declare global {
  interface Window {
    NoCaptcha: any;
    __POWERED_BY_QIANKUN__: any;
  }
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare const __DEV__: boolean;
declare const particlesJS: any;
