export interface IBaseCardItem {
  id: string | number;
  title: string;
  description?: string;
  time?: string;
  status?: 'urgent' | 'warning' | 'normal';
  businessCode?: string;
  processName?: string;
  [key: string]: any;
}

export interface IApprovalItem extends IBaseCardItem {
  type: 'approval';
  urgent?: boolean;
  actionText?: string;
  actionType?: 'check' | 'progress' | 'order' | 'manage';
}

export interface IBusinessItem extends IBaseCardItem {
  type: 'business';
  urgent?: boolean;
  actionText?: string;
  actionType?: 'progress' | 'order' | 'manage';
}

export interface IWarningItem extends IBaseCardItem {
  type: 'warning';
  warningLevel: 'high' | 'medium' | 'low';
  actionText?: string;
  actionType?: 'check' | 'progress' | 'order' | 'manage';
}

export interface IMessageItem extends IBaseCardItem {
  type: 'message';
  unread?: boolean;
  messageType?: 'notification' | 'alert' | 'info';
  actionText?: string;
  actionType?: 'check' | 'progress' | 'order' | 'manage';
}

export type ICardItem =
  | IApprovalItem // 审批代办
  | IBusinessItem // 业务待办
  | IWarningItem // 预警中心
  | IMessageItem; // 消息中心

export interface ICardConfig {
  title: string;
  type: 'approval' | 'business' | 'warning' | 'message';
  apiEndpoint?: string;
  apiParams?: any;
  moreLink?: string | { url: string; target?: string };
  maxItems?: number;
  emptyText?: string;
}
