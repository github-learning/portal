import React from 'react';
import styles from './pendingApprovalCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Button } from 'antd';
import { useRequest } from 'ahooks';
import { Empty, rcRequest } from '@core/rc-components';
import { apiConfig } from 'remote/shared';
import { ApprovalItem } from './ApprovalItem';
export const PendingApprovalCard = () => {
  const { data, loading } = useRequest(() =>
    rcRequest(`${apiConfig.activiti}/v1/oa/task/running`, {
      method: 'post',
      data: {
        module: 0,
        pageNum: 1,
        pageSize: 5,
        companyId: JSON.parse(sessionStorage.getItem('USER_INFO') || '{}')
          .defaultCompId,
      },
    }),
  );
  const isEmpty = data?.rows && Array.isArray(data?.rows) && !data?.rows.length;
  return (
    <div className={styles.pendingApprovalCard}>
      <CommonCardHeader title="待审批">
        <Button
          type="link"
          onClick={() => {
            window.open('/uims/backlog');
          }}
        >
          查看全部
        </Button>
      </CommonCardHeader>
      {isEmpty && (
        <div className={styles.emptyWrap}>
          <Empty height={'100px'} imgHeight={180} imgWidth={214} />
        </div>
      )}
      {(data?.rows || []).map((row, index) => {
        return <ApprovalItem row={row} key={row.id + index} />;
      })}
    </div>
  );
};
