import React, { useState } from 'react';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Button, Spin } from 'antd';
import styles from './noticeAnnouncementCard.module.less';
import { NoticeType } from './NoticeType';
import { useRequest } from 'ahooks';
import { Empty, rcRequest } from '@core/rc-components';
import { NoticeItem } from './NoticeItem';
export const NoticeAnnouncementCard = () => {
  const [type, setType] = useState(1);
  const { data, loading } = useRequest(
    () =>
      rcRequest(`/api/cms/v1/cms/content/notice/page`, {
        data: { pageNum: 1, pageSize: 3, noticeType: type },
        method: 'post',
      }),
    {
      refreshDeps: [type],
    },
  );
  const isEmpty = Boolean(!data?.rows || !data?.rows?.length);
  return (
    <div className={styles.noticeAnnouncementCard}>
      <CommonCardHeader
        title="通知公告"
        style={{
          height: '64px',
        }}
      >
        <Button
          type="link"
          onClick={() => {
            window.open(`/uims/notice?type=2`);
          }}
        >
          查看全部
        </Button>
      </CommonCardHeader>
      <Spin spinning={loading}>
        <NoticeType type={type} setType={setType} />
        {isEmpty && (
          <div className={styles.emptyWrap}>
            <Empty imgHeight={180} imgWidth={214} />
          </div>
        )}

        {(data?.rows || []).map((row, index) => {
          return <NoticeItem key={row.id + index} row={row} />;
        })}
      </Spin>
    </div>
  );
};
