import { ICardConfig } from './types';
import { apiConfig } from 'remote/shared';

// 获取用户信息
const getUserInfo = () => {
  try {
    return JSON.parse(sessionStorage.getItem('USER_INFO') || '{}');
  } catch {
    return {};
  }
};

export const cardConfigs: Record<string, ICardConfig> = {
  approval: {
    title: '审批待办',
    type: 'approval',
    apiEndpoint: `${apiConfig.activiti}/v1/oa/task/running`,
    apiParams: {
      method: 'post',
      data: {
        module: 0,
        pageNum: 1,
        pageSize: 5,
        companyId: getUserInfo().defaultCompId,
      },
    },
    moreLink: {
      url: '/uims/backlog',
    },
    maxItems: 5,
  },

  business: {
    title: '业务待办',
    type: 'business',
    // TODO 需要对接接口
    // apiEndpoint: `${apiConfig.activiti}/v1/oa/task/running`,
    // apiParams: {
    //   method: 'post',
    //   data: {
    //     module: 1,
    //     pageNum: 1,
    //     pageSize: 5,
    //     companyId: getUserInfo().defaultCompId,
    //   },
    // },
    moreLink: {
      url: '/uims/business-backlog',
    },
    maxItems: 5,
  },
  warning: {
    title: '预警中心',
    type: 'warning',
    apiEndpoint: `/api/warningPlatform/v1/log/search`,
    apiParams: {
      method: 'post',
      data: {
        pageNum: 1,
        pageSize: 4,
      },
      headers: {
        'system-id': '1',
      },
    },
    moreLink: {
      url: '/warning/risk/log-search',
      target: 'warning-risk',
    },
    maxItems: 5,
  },

  message: {
    title: '消息中心',
    type: 'message',
    apiEndpoint: `/api/message/v1/mc/msg/records/table`,
    apiParams: {
      method: 'post',
      data: {
        pageNum: 1,
        pageSize: 4,
        msgTypeId: '',
        text: '',
        isRead: '',
        userId: getUserInfo().id,
      },
    },
    moreLink: {
      url: '/message/messageList',
    },
    maxItems: 4,
  },
};
