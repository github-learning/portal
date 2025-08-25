import React from 'react';
import { Button, Tag } from 'antd';
import { ICardItem } from './types';
import styles from './cardItemRenderer.module.less';
import cuibanImg from '@/asset/img/cuiban.png';

interface ICardItemRendererProps {
  item: ICardItem;
  index: number;
}
const levelColors = {
  high: '#ff4d4f',
  medium: '#faad14',
  low: '#1890ff',
};

const getStatusIcon = (item: ICardItem) => {
  switch (item.type) {
    case 'approval':
      return (
        <>
          <span
            className={styles.warningIcon}
            style={{ color: levelColors[item.warningLevel] }}
          >
            ◆
          </span>
          <img className={styles.urgentIcon} src={cuibanImg} alt="催办" />
        </>
      );
    // return <span className={styles.normalIcon}>●</span>;
    case 'business':
      if (item.urgent) {
        return <img className={styles.urgentIcon} src={cuibanImg} alt="催办" />;
      }
      return (
        <span
          className={styles.warningIcon}
          style={{ color: levelColors[item.warningLevel] }}
        >
          ◆
        </span>
      );
    // return <span className={styles.normalIcon}>●</span>;
    // return <span className={styles.normalIcon}>●</span>;
    case 'warning':
      return (
        <span
          className={styles.warningIcon}
          style={{ color: levelColors[item.warningLevel] }}
        >
          ◆
        </span>
      );
    case 'message':
      return '';
    // return <span className={styles.messageIcon}>●</span>;
    default:
      break;
    // return <span className={styles.normalIcon}>●</span>;
  }
};

const getActionButton = (item: ICardItem) => {
  const actionTexts = {
    check: '检查整改',
    progress: '任务进度',
    order: '采购订单',
    manage: '任务管理',
  };

  const actionText =
    item.actionText || actionTexts[item.actionType || 'check'] || '查看详情';

  return <div className={styles.actionButtonStyle}>{actionText}</div>;
};

export const CardItemRenderer: React.FC<ICardItemRendererProps> = ({
  item,
  index,
}) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.itemHeader}>
        <div className={styles.statusSection}>
          {getStatusIcon(item)}
          <div className={styles.title}>
            {item.title}
            {item.type === 'message' && item.title && (
              <span className={styles.messageIcon}>●</span>
            )}
          </div>

          <div className={styles.actionSection}>{getActionButton(item)}</div>
        </div>
      </div>
      {item.type === 'message' && item.content && (
        <div className={styles.description}>{item.content}</div>
      )}

      <div className={styles.itemFooter}>
        <span className={styles.submitter}>
          {item.type === 'message' ? '时间: ' : '张提交: '}
          {item.time || '2019-08-24 10:01:39'}
        </span>
      </div>
    </div>
  );
};
