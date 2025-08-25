import React, { useState } from 'react';
import { Tag, Calendar, Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { GenericCard, IGenericCardItem } from '../GenericCard/GenericCard';
import type { Moment } from 'moment';
import styles from './noticeAnnouncementCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';

const { Option } = Select;

// 扩展通知公告项的类型
interface INoticeItem extends Omit<IGenericCardItem, 'status'> {
  status?: 'urgent' | 'warning' | 'normal' | 'inProgress' | 'completed';
  dayOfWeek?: string;
}

export const NoticeAnnouncementCard: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Moment>(
    require('moment')('2023-03-01'),
  );

  // 模拟数据 - 根据图片中的内容
  const noticeItems: INoticeItem[] = [
    {
      id: 1,
      title: '3月安全例行巡检任务',
      description: '张提交: 2019-08-24 10:01:39',
      time: '26',
      status: 'inProgress',
      businessCode: 'SAFE001',
      processName: '安全巡检',
      dayOfWeek: '周三',
    },
    {
      id: 2,
      title: '3月安全例行巡检任务',
      description: '张提交: 2019-08-24 10:01:39',
      time: '26',
      status: 'completed',
      businessCode: 'SAFE002',
      processName: '安全巡检',
      dayOfWeek: '周三',
    },
    {
      id: 3,
      title: '3月安全例行巡检任务',
      description: '张提交: 2019-08-24 10:01:39',
      time: '26',
      status: 'completed',
      businessCode: 'SAFE003',
      processName: '安全巡检',
      dayOfWeek: '周三',
    },
  ];

  // 日历事件数据
  const calendarEvents = [
    { date: '2023-03-10', hasEvent: true },
    { date: '2023-03-11', hasEvent: true },
    { date: '2023-03-18', hasEvent: true },
    { date: '2023-03-26', hasEvent: true },
  ];

  const dateCellRender = (value: Moment) => {
    const dateStr = value.format('YYYY-MM-DD');
    const event = calendarEvents.find((e) => e.date === dateStr);

    if (event?.hasEvent) {
      return (
        <div className={styles.calendarCell}>
          <div className={styles.calendarEventDot} />
        </div>
      );
    }
    return null;
  };

  const headerRender = ({ value, onChange }: any) => {
    const month = value.format('YYYY年MM月');

    return (
      <div className={styles.calendarHeader}>
        <div className={styles.calendarNavigation}>
          <LeftOutlined
            className={styles.navButton}
            onClick={() => {
              const newMonth = value.clone().subtract(1, 'month');
              onChange(newMonth);
              setCurrentMonth(newMonth);
            }}
          />
          <span className={styles.calendarMonth}>{month}</span>
          <RightOutlined
            className={styles.navButton}
            onClick={() => {
              const newMonth = value.clone().add(1, 'month');
              onChange(newMonth);
              setCurrentMonth(newMonth);
            }}
          />
        </div>
        <Select defaultValue="日程" className={styles.select} size="middle">
          <Option value="日程">日程</Option>
        </Select>
      </div>
    );
  };

  const renderNoticeItem = (item: INoticeItem) => (
    <div className={styles.noticeItem}>
      {/* 左侧日期和星期 */}
      <div className={styles.dateColumn}>
        <div className={styles.dateNumber}>{item.time}</div>
        <div className={styles.dayOfWeek}>{item.dayOfWeek}</div>
      </div>

      {/* 中间内容 */}
      <div className={styles.contentColumn}>
        <div className={styles.contentHeader}>
          <div className={styles.blueDot} />
          <h4 className={styles.itemTitle}>{item.title}</h4>
        </div>
        <div className={styles.itemDescription}>{item.description}</div>
      </div>

      {/* 右侧状态标签 */}
      <div className={styles.statusColumn}>
        {item.status === 'inProgress' && (
          <span className={styles.statusTag + ' ' + styles.statusTagBlue}>
            进行中
          </span>
        )}
        {item.status === 'completed' && (
          <span className={styles.statusTag + ' ' + styles.statusTagGreen}>
            已完成
          </span>
        )}
      </div>
    </div>
  );

  const handleMoreClick = () => {
    console.log('查看更多通知公告');
  };

  const handleItemClick = (item: INoticeItem) => {
    console.log('点击通知公告:', item);
  };

  const onPanelChange = (value: Moment) => {
    setCurrentMonth(value);
  };

  return (
    <div className={styles.container}>
      {/* 使用统一的头部组件 */}
      <CommonCardHeader
        title="通知公告"
        actionButton={{
          text: '更多',
          onClick: handleMoreClick,
        }}
      />

      {/* 日历组件 */}
      <div className={styles.calendarContainer}>
        <Calendar
          value={currentMonth}
          onPanelChange={onPanelChange}
          headerRender={headerRender}
          dateCellRender={dateCellRender}
          fullscreen={false}
          className={styles.calendar}
        />
      </div>

      {/* 通知列表 */}
      <div className={styles.noticeList}>
        {noticeItems.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            {renderNoticeItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
