import React, { useState } from 'react';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Button, Spin } from 'antd';
import styles from './latestNewsCard.module.less';
import { useRequest } from 'ahooks';
import { Empty, rcRequest } from '@core/rc-components';
import { LsNewsItem } from './LsNewsItem';
import ReceiverDraw from './ReceiverDraw';
import SenderDraw from './SenderDraw';
import FinanceAdminDraw from './FinanceAdminDraw';
import CertifySenderDraw from './CertifySenderDraw';
export const LatestNewsCard = () => {
  const { data, loading } = useRequest(() =>
    rcRequest(`/api/message/v1/mc/msg/records/table`, {
      method: 'post',
      data: {
        pageNum: 1,
        pageSize: 4,
        msgTypeId: '',
        text: '',
        isRead: '',
        userId: JSON.parse(sessionStorage.getItem('USER_INFO') || '{}').id,
      },
    }),
  );
  const [drawVisibleObj, setDrawVisibleObj] = useState({
    financeAdminDraw: false,
    senderDraw: false,
    receiverDraw: false,
    certifySenderDraw: false,
    id: '',
    rowInfo: { id: '' },
    nameList: [],
  });
  const isEmpty = Boolean(!data?.rows || !data?.rows?.length);
  return (
    <div className={styles.latestNewsCard}>
      <CommonCardHeader
        title="最新消息"
        style={{
          height: '64px',
        }}
      >
        <Button
          type="link"
          onClick={() => {
            window.open(`/message/messageList`);
          }}
        >
          查看全部
        </Button>
      </CommonCardHeader>
      <Spin spinning={loading}>
        {isEmpty && (
          <div className={styles.emptyWrap}>
            <Empty imgHeight={180} imgWidth={214} />
          </div>
        )}
        {(data?.rows || []).map((row, index) => {
          return (
            <LsNewsItem
              key={row.id + index}
              row={row}
              drawVisibleObj={drawVisibleObj}
              setDrawVisibleObj={setDrawVisibleObj}
            />
          );
        })}
      </Spin>
      <ReceiverDraw
        id={drawVisibleObj.id}
        visible={drawVisibleObj.receiverDraw}
        onVisibleChange={() => {
          setDrawVisibleObj({
            ...drawVisibleObj,
            receiverDraw: false,
          });
        }}
      />
      <SenderDraw
        id={drawVisibleObj.rowInfo?.id}
        visible={drawVisibleObj.senderDraw}
        onVisibleChange={() => {
          setDrawVisibleObj({
            ...drawVisibleObj,
            senderDraw: false,
          });
        }}
      />
      <FinanceAdminDraw
        nameList={drawVisibleObj.nameList}
        id={drawVisibleObj.rowInfo?.id}
        rowInfo={drawVisibleObj.rowInfo}
        visible={drawVisibleObj.financeAdminDraw}
        onVisibleChange={() => {
          setDrawVisibleObj({
            ...drawVisibleObj,
            financeAdminDraw: false,
          });
        }}
      />
      <CertifySenderDraw
        id={drawVisibleObj.id}
        visible={drawVisibleObj.certifySenderDraw}
        onVisibleChange={() => {
          setDrawVisibleObj({
            ...drawVisibleObj,
            certifySenderDraw: false,
          });
        }}
      />
    </div>
  );
};
