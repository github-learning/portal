import React from 'react';
import styles from './taskItem.module.less';
import dayjs from 'dayjs';
import { Badge } from 'antd';
import Ellipsis from '@/components/Ellipsis';

const statusListEnum = {
  1: {
    status: 1,
    label: '未开始',
    color: '#999999',
  },
  2: {
    status: 2,
    label: '进行中',
    color: 'var( --lj-primary-color )',
  },
  3: {
    status: 5,
    label: '已结束',
    color: '#00B578',
  },
};

export const TaskItem = ({ row: item }: { row: any }) => {
  if (!item) {
    return null;
  }
  return (
    <div className={`${styles.taskItem} cardBase`}>
      <div className={styles.line1}>
        <div className={styles.time}>{`${dayjs(
          Number(item.planStartDate),
        ).format('YYYY-MM-DD')}-${dayjs(Number(item.planEndDate)).format(
          'YYYY-MM-DD',
        )}`}</div>
        <Badge
          color={statusListEnum[item.status]?.color}
          text={
            <span
              style={{
                color: statusListEnum[item.status]?.color,
              }}
            >
              {statusListEnum[item.status]?.label}
            </span>
          }
        />
      </div>
      <div className={styles.line2}>
        <Ellipsis text={item.name} />
      </div>
      <div className={styles.line3}>
        <div className={styles.people}>
          负责人：{item?.directorsName || '--'}
        </div>
        <div className={styles.type}>
          来源：
          {statusListEnum[item.status]?.label}
        </div>
      </div>
    </div>
  );
};
