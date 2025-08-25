import React from 'react';
import { Tag } from 'antd';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
import styles from './MyScheduleCard.module.less';

// 日程项目接口
interface IScheduleItem {
  id: number;
  title: string;
  timestamp: string;
  type: 'platform' | 'enterprise' | 'project';
  typeLabel: string;
}

export const MyScheduleCard: React.FC = () => {
  // 模拟数据 - 根据图片中的内容
  const scheduleItems: IScheduleItem[] = [
    {
      id: 1,
      title: '平台公告的内容: 可信工程消息中心进行全面整改',
      timestamp: '2019-08-24 10:01:39',
      type: 'platform',
      typeLabel: '平台',
    },
    {
      id: 2,
      title: '1#混凝土浇筑专项施工计划',
      timestamp: '2019-08-24 10:01:39',
      type: 'enterprise',
      typeLabel: '企业',
    },
    {
      id: 3,
      title: '1#混凝土浇筑专项施工计划',
      timestamp: '2019-08-24 10:01:39',
      type: 'project',
      typeLabel: '项目',
    },
    {
      id: 4,
      title: '2#混凝土浇筑专项施工计划',
      timestamp: '2019-08-24 10:01:39',
      type: 'project',
      typeLabel: '项目',
    },
    {
      id: 5,
      title: '3#混凝土浇筑专项施工计划',
      timestamp: '2019-08-24 10:01:39',
      type: 'enterprise',
      typeLabel: '企业',
    },
  ];

  const renderScheduleItem = (item: IScheduleItem) => (
    <div className={styles.scheduleItem}>
      {/* 标题行 - 包含红色圆点和类型标签 */}
      <div className={styles.titleRow}>
        {/* 标题文本 */}
        <div className={styles.titleText}>{item.title}</div>

        {/* 红色圆点指示器 */}
        <div className={styles.redDot} />

        {/* 类型标签 */}
        <span
          className={
            styles.typeTag +
            ' ' +
            (item.type === 'platform'
              ? styles.typeTagPlatform
              : item.type === 'enterprise'
              ? styles.typeTagEnterprise
              : styles.typeTagProject)
          }
        >
          {item.typeLabel}
        </span>
      </div>
      <div className={styles.contentText}>{item.title}</div>
      {/* 时间戳 */}
      <div className={styles.timestamp}>{item.timestamp}</div>
    </div>
  );

  const handleMoreClick = () => {
    console.log('查看更多日程');
  };

  const handleItemClick = (item: IScheduleItem) => {
    console.log('点击日程:', item);
  };

  return (
    <div className={styles.container}>
      {/* 使用统一的头部组件 */}
      <CommonCardHeader
        title="我的日程"
        actionButton={{
          text: '更多',
          onClick: handleMoreClick,
        }}
      />

      {/* 日程列表 */}
      <div className={styles.scheduleList}>
        {scheduleItems.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            {renderScheduleItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
