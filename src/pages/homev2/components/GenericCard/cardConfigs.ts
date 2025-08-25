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
    // apiEndpoint: `${apiConfig.activiti}/v1/oa/task/running`,
    // apiParams: {
    //   method: 'post',
    //   data: {
    //     module: 0,
    //     pageNum: 1,
    //     pageSize: 5,
    //     companyId: getUserInfo().defaultCompId,
    //   },
    // },
    moreLink: {
      url: '/uims/backlog',
    },
    maxItems: 5,
    emptyText: '暂无审批待办',
  },

  business: {
    title: '业务待办',
    type: 'business',
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
    emptyText: '暂无业务待办',
  },

  warning: {
    title: '预警中心',
    type: 'warning',
    // apiEndpoint: `${apiConfig.activiti}/v1/oa/task/warning`,
    // apiParams: {
    //   method: 'post',
    //   data: {
    //     pageNum: 1,
    //     pageSize: 5,
    //     companyId: getUserInfo().defaultCompId,
    //   },
    // },
    moreLink: {
      url: '/warning/risk/log-search',
      target: 'warning-risk',
    },

    // typeId 为预警消息类型的id
    // window.open(`/warning/risk/log-search`, 'warning-risk');
    maxItems: 5,
    emptyText: '暂无预警信息',
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
    emptyText: '暂无消息',
  },
};
