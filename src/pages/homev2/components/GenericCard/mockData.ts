import { ICardItem } from './types';

// Mock 数据 - 审批待办
export const mockApprovalData: ICardItem[] = [
  {
    id: 1,
    type: 'approval',
    title: '采购申请审批',
    description: '张三提交的办公用品采购申请',
    time: '2024-01-15 10:30:00',
    businessCode: 'CG20240115001',
    processName: '采购申请流程',
    urgent: true,
    actionType: 'check',
    actionText: '检查整改',
    submitter: '张三',
    department: '行政部',
    warningLevel: 'high',
  },
  {
    id: 2,
    type: 'approval',
    title: '请假申请审批',
    description: '李四申请年假5天',
    time: '2024-01-15 09:15:00',
    businessCode: 'QJ20240115001',
    processName: '请假申请流程',
    urgent: false,
    actionType: 'check',
    actionText: '任务进度',
    submitter: '李四',
    department: '技术部',
    warningLevel: 'medium',
  },
  {
    id: 3,
    type: 'approval',
    title: '报销单审批',
    description: '王五的差旅费用报销',
    time: '2024-01-14 16:45:00',
    businessCode: 'BX20240114001',
    processName: '费用报销流程',
    urgent: false,
    actionType: 'check',
    actionText: '采购订单',
    submitter: '王五',
    department: '销售部',
    warningLevel: 'low',
  },
  {
    id: 5,
    type: 'approval',
    title: '报销单审批',
    description: '王五的差旅费用报销',
    time: '2024-01-14 16:45:00',
    businessCode: 'BX20240114001',
    processName: '费用报销流程',
    urgent: false,
    actionType: 'check',
    actionText: '采购订单',
    submitter: '王五',
    department: '销售部',
    warningLevel: 'low',
  },
  {
    id: 6,
    type: 'approval',
    title: '报销单审批',
    description: '王五的差旅费用报销',
    time: '2024-01-14 16:45:00',
    businessCode: 'BX20240114001',
    processName: '费用报销流程',
    urgent: false,
    actionType: 'check',
    actionText: '采购订单',
    submitter: '王五',
    department: '销售部',
    warningLevel: 'low',
  },
  {
    id: 7,
    type: 'approval',
    title: 'test',
    description: '王五的差旅费用报销',
    time: '2024-01-14 16:45:00',
    businessCode: 'BX20240114001',
    processName: '费用报销流程',
    urgent: false,
    actionType: 'check',
    actionText: '采购订单',
    submitter: '王五',
    department: '销售部',
    warningLevel: 'low',
  },
];

// Mock 数据 - 业务待办
export const mockBusinessData: ICardItem[] = [
  {
    id: 1,
    type: 'business',
    title: '客户合同签署',
    description: '与ABC公司的年度服务合同待签署',
    time: '2024-01-15 14:20:00',
    businessCode: 'HT20240115001',
    processName: '合同签署流程',
    urgent: true,
    actionType: 'progress',
    actionText: '任务管理',
    submitter: '赵六',
    department: '法务部',
    warningLevel: 'high',
  },
  {
    id: 2,
    type: 'business',
    title: '项目进度汇报',
    description: '电商平台开发项目月度汇报',
    time: '2024-01-15 11:00:00',
    businessCode: 'XM20240115001',
    processName: '项目汇报流程',
    urgent: false,
    actionType: 'progress',
    actionText: '处理',
    submitter: '钱七',
    department: '技术部',
    warningLevel: 'low',
  },
  {
    id: 3,
    type: 'business',
    title: '供应商评估',
    description: '新供应商资质评估报告',
    time: '2024-01-14 15:30:00',
    businessCode: 'GYS20240114001',
    processName: '供应商评估流程',
    urgent: false,
    actionType: 'progress',
    actionText: '处理',
    submitter: '孙八',
    department: '采购部',
    warningLevel: 'medium',
  },
];

// Mock 数据 - 预警中心
export const mockWarningData: ICardItem[] = [
  {
    id: 1,
    type: 'warning',
    title: '系统性能预警',
    description: '服务器CPU使用率超过90%',
    time: '2024-01-15 15:45:00',
    businessCode: 'XT20240115001',
    processName: '系统监控',
    warningLevel: 'high',
    actionType: 'check',
    actionText: '查看',
    submitter: '系统监控',
    department: '运维部',
  },
  {
    id: 2,
    type: 'warning',
    title: '库存不足预警',
    description: '办公用品库存低于安全线',
    time: '2024-01-15 13:20:00',
    businessCode: 'KC20240115001',
    processName: '库存管理',
    warningLevel: 'medium',
    actionType: 'check',
    actionText: '查看',
    submitter: '库存系统',
    department: '仓储部',
  },
  {
    id: 3,
    type: 'warning',
    title: '合同到期预警',
    description: '员工劳动合同即将到期',
    time: '2024-01-15 10:00:00',
    businessCode: 'HTDQ20240115001',
    processName: '人事管理',
    warningLevel: 'low',
    actionType: 'check',
    actionText: '查看',
    submitter: '人事系统',
    department: '人事部',
  },
];

// Mock 数据 - 消息中心
export const mockMessageData: ICardItem[] = [
  {
    id: 1,
    type: 'message',
    title: '系统维护通知',
    description: '系统将于今晚22:00-24:00进行维护升级',
    time: '2024-01-15 16:00:00',
    businessCode: 'TZ20240115001',
    processName: '系统通知',
    unread: true,
    messageType: 'notification',
    actionType: 'check',
    actionText: '查看',
    submitter: '系统管理员',
    department: '技术部',
  },
  {
    id: 2,
    type: 'message',
    title: '会议提醒',
    description: '电商平台开发项目月度汇报',
    time: '2024-01-15 11:00:00',
    businessCode: 'XM20240115001',
    processName: '项目汇报流程',
    urgent: false,
    actionType: 'progress',
    actionText: '处理',
    submitter: '钱七',
    department: '技术部',
  },
  {
    id: 3,
    type: 'message',
    title: '工作流通知',
    description: '新供应商资质评估报告',
    time: '2024-01-14 15:30:00',
    businessCode: 'GYS20240114001',
    processName: '供应商评估流程',
    urgent: false,
    actionType: 'progress',
    actionText: '处理',
    submitter: '孙八',
    department: '采购部',
  },
];

// Mock API 响应格式
export const mockApiResponse = (data: ICardItem[]) => ({
  code: 200,
  message: 'success',
  data: {
    rows: data,
    total: data.length,
    pageSize: 10,
    current: 1,
  },
});

// 根据类型获取对应的 mock 数据
export const getMockDataByType = (type: string): ICardItem[] => {
  switch (type) {
    case 'approval':
      return mockApprovalData;
    case 'business':
      return mockBusinessData;
    case 'warning':
      return mockWarningData;
    case 'message':
      return mockMessageData;
    default:
      return [];
  }
};
