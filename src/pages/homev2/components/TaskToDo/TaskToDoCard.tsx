import React, { useState } from 'react';
import styles from './taskToDoCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { Button, Spin } from 'antd';
import { TaskCalendar } from './TaskCalendar';
import moment from 'moment';
import { useRequest } from 'ahooks';
import { Empty, rcRequest } from '@core/rc-components';
import { apiConfig } from 'remote/shared';
import { TaskItem } from './TaskItem';
export const TaskToDoCard = () => {
  const [time, setTime] = useState(moment() as any);
  const [dateMark, setDateMark] = useState([] as any);

  const { loading: wrappersLoading } = useRequest(
    () =>
      rcRequest(`${apiConfig.apiTask}/v1/schedules/wrappers`, {
        method: 'post',
        data: {
          startDate: moment(time).startOf('month').valueOf(),
          endDate: moment(time).endOf('month').valueOf(),
          pageNum: 1,
          pageSize: 1,
        },
        headers: {
          'system-id': '1',
          'depend-uri': '/api/activiti/v1/oa/task/running',
          'depend-method': 'POST',
        },
      }),
    {
      onSuccess: (data) => {
        setDateMark(data);
      },
      refreshDeps: [time],
    },
  );
  const { data: todoListData, loading: todoListLoading } = useRequest(
    () =>
      rcRequest(`${apiConfig.apiTask}/v1/schedules/search`, {
        method: 'post',
        data: {
          startDate: moment(time).startOf('date').valueOf(),
          endDate: moment(time).endOf('date').valueOf(),
          pageNum: 1,
          pageSize: 3,
        },
        headers: {
          'system-id': '1',
          'depend-uri': '/api/activiti/v1/oa/task/running',
          'depend-method': 'POST',
        },
      }),
    {
      refreshDeps: [time],
    },
  );
  const isEmpty = Boolean(
    !todoListData?.rows || todoListData?.rows?.length == 0,
  );
  return (
    <div className={styles.taskToDoCard}>
      <CommonCardHeader
        title="任务待办"
        style={{
          height: '64px',
        }}
      >
        <Button
          type="link"
          onClick={() => {
            window.open('/task/');
          }}
        >
          查看全部
        </Button>
      </CommonCardHeader>
      <Spin spinning={todoListLoading || wrappersLoading}>
        <TaskCalendar
          time={time}
          setTime={setTime}
          dateMark={dateMark}
          setDateMark={setDateMark}
        />
        {isEmpty && (
          <div className={styles.emptyWrap}>
            <Empty imgHeight={180} imgWidth={214} />
          </div>
        )}
        {(todoListData?.rows || []).map((row, index) => {
          return <TaskItem key={row.id + index} row={row} />;
        })}
      </Spin>
    </div>
  );
};
