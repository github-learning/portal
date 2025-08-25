import React, { useState } from 'react';
import { Tag, Calendar, Select } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { GenericCard, IGenericCardItem } from '../GenericCard/GenericCard';
import type { Moment } from 'moment';
import styles from './noticeAnnouncementCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import { useRequest } from 'ahooks';
import { Empty, rcRequest } from '@core/rc-components';
import emptyImg from '@/asset/img/empty.png';

const { Option } = Select;

// Mock数据 - 当接口没有数据时使用
const mockNoticeData = [
  {
    id: 1,
    title: '系统维护通知',
    content: '系统将于今晚进行维护升级，预计维护时间2小时',
    time: '2023-03-10',
    status: 'urgent' as const,
    businessCode: 'SYS001',
    processName: '系统维护',
  },
  {
    id: 2,
    title: '新功能上线公告',
    content: '新增用户管理功能，提升用户体验',
    time: '2023-03-15',
    status: 'normal' as const,
    businessCode: 'FEAT001',
    processName: '功能发布',
  },
  {
    id: 3,
    title: '安全更新提醒',
    content: '请及时更新密码，确保账户安全',
    time: '2023-03-20',
    status: 'warning' as const,
    businessCode: 'SEC001',
    processName: '安全更新',
  },
];

// 扩展通知公告项的类型
interface INoticeItem extends Omit<IGenericCardItem, 'status'> {
  status?: 'urgent' | 'warning' | 'normal' | 'inProgress' | 'completed';
  dayOfWeek?: string;
}

export const NoticeAnnouncementCard: React.FC = () => {
  // 使用当前时间作为默认值
  const [currentMonth, setCurrentMonth] = useState<Moment>(require('moment')());
  // 当前选中的日期
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  // 获取通知公告数据
  const { data, loading } = useRequest(
    () =>
      rcRequest(`/api/cms/v1/cms/content/notice/page`, {
        data: { pageNum: 1, pageSize: 3 },
        method: 'post',
      }),
    {},
  );

  // 从接口数据转换为组件需要的格式，如果没有数据则使用空数组
  const noticeItems: INoticeItem[] =
    (data?.rows || []).length > 0
      ? (data?.rows || []).map((row: any, index: number) => {
          const createTime = row.createTime
            ? require('moment')(row.createTime)
            : null;
          const dayOfWeek = createTime ? createTime.format('dddd') : '--';

          return {
            id: row.id || index + 1,
            title: row.title || row.content || '通知公告',
            description: createTime
              ? `创建时间: ${createTime.format('YYYY-MM-DD HH:mm:ss')}`
              : '暂无描述',
            time: createTime ? createTime.format('DD') : '--',
            status: row.status || 'normal',
            businessCode: row.businessCode || '',
            processName: row.processName || '',
            dayOfWeek: dayOfWeek,
            ...row, // 保留原始数据
          };
        })
      : [];

  // 日历事件数据 - 根据实际通知数据动态生成
  const calendarEvents = noticeItems.map((item) => {
    // 确保时间格式正确，如果time是DD格式，需要结合当前月份
    let dateStr;
    if (item.time && item.time.length <= 2) {
      // 如果time只是日期数字，需要结合当前月份和年份
      const currentYear = currentMonth.year();
      const currentMonthNum = currentMonth.month() + 1;
      dateStr = `${currentYear}-${currentMonthNum
        .toString()
        .padStart(2, '0')}-${item.time.padStart(2, '0')}`;
    } else {
      // 如果time已经是完整日期格式
      dateStr = require('moment')(item.time).format('YYYY-MM-DD');
    }

    return {
      date: dateStr,
      hasEvent: true,
    };
  });

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
    window.open(`/uims/notice?type=2`);
  };

  const handleItemClick = (item: INoticeItem) => {
    console.log('点击通知公告:', item);
  };

  const onPanelChange = (value: Moment) => {
    setCurrentMonth(value);
    // 切换月份时清除选中的日期，避免显示错误的高亮
    setSelectedDate(null);
  };

  const onDateSelect = (value: Moment) => {
    console.log('选择的日期:', value.format('YYYY-MM-DD'));
    setSelectedDate(value);

    // 可以在这里添加更多逻辑，比如：
    // - 跳转到该日期的通知详情
    // - 显示该日期的通知列表
    // - 过滤显示该日期的通知
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
          value={selectedDate || currentMonth}
          onPanelChange={onPanelChange}
          onSelect={onDateSelect}
          headerRender={headerRender}
          dateCellRender={dateCellRender}
          fullscreen={false}
          className={styles.calendar}
        />
      </div>

      {/* 通知列表 */}
      <div className={styles.noticeList}>
        {loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingText}>加载中...</div>
          </div>
        ) : noticeItems.length > 0 ? (
          noticeItems.map((item) => (
            <div key={item.id} onClick={() => handleItemClick(item)}>
              {renderNoticeItem(item)}
            </div>
          ))
        ) : (
          <div className={styles.emptyContainer}>
            <Empty imgSrc={emptyImg} title="" imgHeight={180} imgWidth={214} />
          </div>
        )}
      </div>
    </div>
  );
};
