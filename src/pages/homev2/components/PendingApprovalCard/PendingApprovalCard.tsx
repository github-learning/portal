import styles from './pendingApprovalCard.module.less';
import { useRequest } from 'ahooks';
import { rcRequest } from '@core/rc-components';
import { apiConfig } from 'remote/shared';
import { GenericCard, IGenericCardItem } from '../GenericCard';
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

  const handleMoreClick = () => {
    window.open('/uims/backlog');
  };

  const handleItemClick = (item: IGenericCardItem) => {
    // 这里可以添加通用的点击处理逻辑
    console.log('Item clicked:', item);
  };

  const renderApprovalItem = (item: IGenericCardItem, index: number) => {
    return <ApprovalItem row={item} key={`${item.id}-${index}`} />;
  };

  // 转换数据格式
  const approvalItems: IGenericCardItem[] = (data?.rows || []).map(
    (row: any) => ({
      id: row.id,
      title: row.processName || '',
      description: row.processName || '',
      time: row.createTime,
      businessCode: row.businessCode,
      processName: row.processName,
      ...row, // 保留原始数据
    }),
  );

  return (
    <GenericCard
      title="审批待办"
      items={approvalItems}
      loading={loading}
      emptyText="暂无审批待办"
      showMore={true}
      moreText="查看全部"
      onMoreClick={handleMoreClick}
      onItemClick={handleItemClick}
      renderItem={renderApprovalItem}
      className={styles.pendingApprovalCard}
    />
  );
};
