import React from 'react';
import styles from './approvalItem.module.less';
import SysTags from '@/components/SysTags';
import dayjs from 'dayjs';
import { useJumpPageRouteGet } from 'remote/shared';
const headers: any = {
  'depend-uri': '/api/activiti/v1/oa/task/running',
  'depend-method': 'POST',
};
export const ApprovalItem = ({ row }: { row: any }) => {
  const { getJumpPagePath } = useJumpPageRouteGet(headers);
  // 跳转到对应的OA待办详情页面
  const onGoPath = () => {
    if (row.businessCode) {
      getJumpPagePath(row, {
        baseOnOrigin: 'backlog',
        oaMode: true,
      }).then((directPath) => {
        if (directPath) {
          window.location.href = directPath;
        }
      });
    }
  };
  if (!row) {
    return null;
  }
  return (
    <div
      className={`${styles.approvalItem}  cardBase`}
      onClick={() => {
        onGoPath();
      }}
    >
      <div className={styles.line1}>
        <div className={styles.processName}>{row.processName}</div>
        <div>
          <SysTags busCode={row.businessCode} />
        </div>
      </div>
      <div>
        {row.createTime ? dayjs(row.createTime).format('YYYY-MM-DD') : ''}
      </div>
    </div>
  );
};
