import staticRoutes from '@/utils/staticRoutes';
import { getScmConfig } from './messageRoute/gyl/scm';
import financeOss from './messageRoute/kxgcc/financeOss';
import { getPayConfig } from './messageRoute/kxgcc/pay';
import { getQualityConfig } from './messageRoute/kxgcc/quality';
import { getSafetyConfig } from './messageRoute/kxgcc/safety';

// 路由定义
export function getRouteInfo(e = { id: '', code: '' }) {
  // 进度路由
  const scheduleConfig = {
    schedule1010: {
      path: `/plan/add/Detail?id=${e.id}`,
    },
    schedule1020: {
      path: `/plan/edit/Detail?id=${e.id}`,
    },
    schedule1030: {
      path: `/plan/submit/Detail?id=${e.id}`,
    },
    schedule1040: {
      path: `/rule/log`,
    },
  };
  /**
   * key: v1/system/list/1 返回的code
   */
  const config = {
    'quality-manage': {
      pathPrefix: staticRoutes.quality, // 路由前缀
      ...getQualityConfig(e.id),
    },
    'safety-manage': {
      pathPrefix: staticRoutes.safety,
      ...getSafetyConfig(e.id),
    },
    'xjjchain-schedule': {
      pathPrefix: staticRoutes.schedule,
      ...scheduleConfig,
    },
    // 工程款
    'xjjchain-pay': {
      // oaMode: true, // oa详情模式（去掉左侧菜单，面包屑层级）
      pathPrefix: staticRoutes.pay,
      ...getPayConfig(e.id),
    },
    //金融oss
    'finance-oss': {
      ...financeOss(e.id),
    },
    // 供应链
    scm: {
      // oaMode: true, // oa详情模式（去掉左侧菜单，面包屑层级）
      pathPrefix: staticRoutes.scm,
      ...getScmConfig(e),
    },
  };
  // 检索跳转路由信息
  const result = searchRouteInfo(config, e.code);
  return result;
}

function searchRouteInfo(data: any, code: any) {
  const keys = Object.keys(data);
  const result = {
    pathPrefix: '',
    systemName: '',
    path: '',
    otherConfig: undefined,
  };
  if (!code) {
    return result;
  }
  keys.some((key) => {
    const item = data[key];
    if (item[code]) {
      let curPath = item[code].path;
      if (typeof curPath === 'function') {
        curPath = item[code].path();
      }
      let otherConfig: any = undefined;
      const curSystemId = item[code].systemId ?? item.systemId;
      if (curSystemId) {
        otherConfig = Object.assign(otherConfig ?? {}, { systemId: curSystemId });
      }
      if (item.oaMode) {
        otherConfig = Object.assign(otherConfig ?? {}, { oaMode: item.oaMode });
      }
      result.pathPrefix = item.pathPrefix;
      result.path = curPath;
      result.systemName = key;
      result.otherConfig = otherConfig;
      return true;
    }
    return false;
  });
  return result;
}
