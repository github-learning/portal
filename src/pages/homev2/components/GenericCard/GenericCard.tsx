import React from 'react';
import styles from './genericCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Empty, Spin } from 'antd';

export interface IGenericCardItem {
  id: string | number;
  title: string;
  description?: string;
  time?: string;
  status?: 'urgent' | 'warning' | 'normal';
  businessCode?: string;
  processName?: string;
  [key: string]: any;
}

export interface IGenericCardProps {
  title: string;
  items: IGenericCardItem[];
  loading?: boolean;
  emptyText?: string;
  showMore?: boolean;
  moreText?: string;
  onMoreClick?: () => void;
  onItemClick?: (item: IGenericCardItem) => void;
  renderItem: (item: IGenericCardItem, index: number) => React.ReactNode;
  maxItems?: number;
  className?: string;
}

export const GenericCard: React.FC<IGenericCardProps> = ({
  title,
  items = [],
  loading = false,
  emptyText = '暂无数据',
  showMore = true,
  moreText = '查看全部',
  onMoreClick,
  onItemClick,
  renderItem,
  className = '',
}) => {
  const isEmpty = !loading && (!items || items.length === 0);

  return (
    <div className={`${styles.genericCard} ${className}`}>
      <CommonCardHeader
        title={title}
        actionButton={
          showMore
            ? {
                text: moreText,
                onClick: onMoreClick || (() => {}),
              }
            : undefined
        }
      />

      <div className={styles.cardContainer}>
        <Spin spinning={loading}>
          {isEmpty && (
            <div className={styles.emptyWrap}>
              <Empty description={emptyText} />
            </div>
          )}

          {!isEmpty && (
            <div>
              {items.map((item, index) => (
                <div
                  key={item.id || index}
                  className={styles.itemWrapper}
                  onClick={() => onItemClick?.(item)}
                >
                  {renderItem(item, index)}
                </div>
              ))}
            </div>
          )}
        </Spin>
      </div>
    </div>
  );
};
