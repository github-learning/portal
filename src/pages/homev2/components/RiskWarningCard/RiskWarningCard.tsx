import React, { useEffect } from 'react';
import styles from './riskWarningCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Button } from 'antd';
import { apiConfig, getApiUrl, useJumpPageRouteGet } from 'remote/shared';
import { useRequest } from 'ahooks';
import { Empty, SpinnersDot, rcRequest } from '@core/rc-components';
import { WarningMessageRow } from './WarningMessageRow';
const messageSystemCode = 'message-center';

const MESSAGE_BASE = '/message';
export const RiskWarningCard = () => {
  const { sysPasePathMap, getSystemInfo } = useJumpPageRouteGet();
  const { data, loading } = useRequest(() =>
    rcRequest(`/api/warningPlatform/v1/log/search`, {
      method: 'post',
      data: {
        pageNum: 1,
        pageSize: 4,
      },
      headers: {
        'system-id': '1',
      },
    }),
  );
  const handleAll = () => {
    // typeId 为预警消息类型的id
    window.open(`/warning/risk/log-search`, 'warning-risk');
  };
  useEffect(() => {
    getSystemInfo({
      sysCode: messageSystemCode,
    });
  }, []);
  const isNotEmpty = !loading && data?.rows && data?.rows.length;
  const rows = data?.rows || [];
  return (
    <div className={styles.riskWarningCard}>
      <CommonCardHeader
        title="风控预警"
        style={{
          height: '64px',
        }}
      >
        <Button type="link" onClick={handleAll}>
          查看全部
        </Button>
      </CommonCardHeader>
      {loading && (
        <div className={styles.emptyWrap}>
          <SpinnersDot />
        </div>
      )}
      {!isNotEmpty && (
        <div className={styles.emptyWrap}>
          <Empty height={80} imgWidth={214} />
        </div>
      )}
      {rows.map((row) => {
        return <WarningMessageRow row={row} key={row.id} />;
      })}
    </div>
  );
};
