import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { rcRequest } from '@core/rc-components';
import { apiConfig } from 'remote/shared';
import { GenericCard, IGenericCardItem } from './GenericCard';
import { CardItemRenderer } from './CardItemRenderer';
import { ICardConfig, ICardItem } from './types';
import { getMockDataByType, mockApiResponse } from './mockData';
import { useJumpPageRouteGet } from 'remote/shared';
import { getAdminApplyApi, getBoxInfoApi } from '@/service/home';

// 抽屉组件导入
import ReceiverDraw from '../LatestNewsCard/ReceiverDraw';
import SenderDraw from '../LatestNewsCard/SenderDraw';
import FinanceAdminDraw from '../LatestNewsCard/FinanceAdminDraw';
import CertifySenderDraw from '../LatestNewsCard/CertifySenderDraw';

interface IUnifiedCardProps extends ICardConfig {
  className?: string;
}

// 使用预定义的 mock 数据
const getMockData = (type: string): ICardItem[] => {
  return getMockDataByType(type);
};

// 类型适配器：将 ICardItem 转换为 IGenericCardItem
const adaptCardItems = (items: ICardItem[]): IGenericCardItem[] => {
  return items.map((item) => ({
    ...item, // 先展开所有属性
    status: item.urgent
      ? 'urgent'
      : item.warningLevel === 'high'
      ? 'warning'
      : 'normal',
  }));
};

// 路径枚举
const PATH_PRE_ENUM = {
  UIMS_1013: 'uims1013', // 财务授权申请
  UIMS_1014: 'uims1014', // 未认证企业更换管理员申请详情
  UIMS_1015: 'uims1015', // 已认证企业更换管理员申请详情
  UIMS_1018: 'uims1018', // 法人手持身份证
  UIMS_1019: 'uims1019', // 企业授权证书
  UIMS_1021: 'uims1021', // 用户手持身份证
  UIMS_1022: 'uims1022', // 财务管理员审核附件
};

export const UnifiedCard: React.FC<IUnifiedCardProps> = ({
  title,
  type,
  apiEndpoint,
  apiParams,
  moreLink,
  maxItems = 5,
  emptyText = '暂无数据',
  className = '',
}) => {
  // 跳转路由
  const { getJumpPagePath } = useJumpPageRouteGet();

  // 抽屉状态管理
  const [drawVisibleObj, setDrawVisibleObj] = useState({
    financeAdminDraw: false,
    senderDraw: false,
    receiverDraw: false,
    certifySenderDraw: false,
    id: '',
    rowInfo: { id: '' },
    nameList: [],
  });

  // 如果有API端点，使用API请求；否则使用模拟数据
  const { data, loading } = useRequest(
    apiEndpoint
      ? () => rcRequest(apiEndpoint, apiParams)
      : () => Promise.resolve(mockApiResponse(getMockData(type))),
    {
      refreshDeps: [apiEndpoint, JSON.stringify(apiParams)],
    },
  );

  const handleMoreClick = () => {
    if (moreLink) {
      if (typeof moreLink === 'string') {
        // 兼容原有的字符串格式
        // if (moreLink.startsWith('http')) {
        //   window.open(moreLink);
        // } else {
        //   window.open(moreLink);
        // }
      } else {
        // 新的对象格式，支持 url 和 target
        window.open(moreLink.url, moreLink.target);
      }
    }
  };

  // 消息点击处理逻辑
  const handleMessageClick = (item: any) => {
    if (type !== 'message') {
      console.log('Item clicked:', item);
      return;
    }

    const data = item;
    // 更换管理员申请 - 详情抽屉
    if (
      [
        PATH_PRE_ENUM.UIMS_1013,
        PATH_PRE_ENUM.UIMS_1014,
        PATH_PRE_ENUM.UIMS_1015,
      ].includes(data.busCode)
    ) {
      const { busCode, busId } = data;
      if (busCode === PATH_PRE_ENUM.UIMS_1014) {
        getAdminApplyApi(busId).then((res) => {
          if (res.code === 200) {
            let userInfo: any = sessionStorage.getItem('USER_INFO');
            if (userInfo) {
              userInfo = JSON.parse(userInfo);
            }
            if (res.data.employeeId === userInfo.employeeId) {
              setDrawVisibleObj({
                ...drawVisibleObj,
                senderDraw: true,
                rowInfo: res.data,
                id: res.data?.id,
              });
            } else {
              setDrawVisibleObj({
                ...drawVisibleObj,
                receiverDraw: true,
                id: res.data?.id,
                rowInfo: res.data,
              });
            }
          }
        });
      } else if (busCode === PATH_PRE_ENUM.UIMS_1013) {
        const headers = {
          'function-code': 'TABLE-QUERY',
        };
        getBoxInfoApi(busId, headers).then((res) => {
          if (res.code === 200) {
            const {
              employeeInfo,
              financeCertification,
              records = [],
            } = res.data;
            const nameString = employeeInfo
              .map((v: any) => v.employeeName)
              .join(',');
            setDrawVisibleObj({
              ...drawVisibleObj,
              financeAdminDraw: true,
              rowInfo: {
                ...financeCertification,
                ...records[0],
              },
              nameList: nameString.split(','),
            });
          }
        });
      } else if (busCode === PATH_PRE_ENUM.UIMS_1015) {
        setDrawVisibleObj({
          ...drawVisibleObj,
          certifySenderDraw: true,
          id: busId,
        });
      }
    } else if (data.appType === 'SYSTEM_BUS_CODE') {
      getJumpPagePath(
        {
          ...data,
          businessCode: data.busCode,
          businessKey: data.busId,
        },
        {
          baseOnOrigin: 'message',
        },
      ).then((directPath) => {
        if (directPath) {
          window.location.href = directPath;
        }
      });
    } else if (data.webUrl) {
      // 修复不按规则输入的网址
      let webUrl = data.webUrl;
      // 校验是否是有效的网址
      const reg =
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      if (reg.test(webUrl)) {
        if (webUrl.indexOf('//') === -1) {
          webUrl = '//' + webUrl;
        }
      } else if (
        webUrl.indexOf(window.location.origin) === -1 &&
        webUrl.indexOf('//') === -1
      ) {
        webUrl = window.location.origin + webUrl;
      }
      window.open(webUrl, '_blank');
    }
  };

  const handleItemClick = (item: IGenericCardItem) => {
    if (type === 'message') {
      handleMessageClick(item);
    } else {
      console.log('Item clicked:', item);
      // 这里可以添加其他类型的点击处理逻辑
    }
  };

  const renderItem = (item: IGenericCardItem, index: number) => {
    return <CardItemRenderer item={item as ICardItem} index={index} />;
  };

  // 转换数据格式
  const items: ICardItem[] = (data?.data?.rows || data?.rows || []).map(
    (row: any, index: number) => {
      if (row.type) {
        // 如果数据已经有类型，直接返回
        return row;
      }

      // 否则根据卡片类型转换数据
      const baseItem = {
        id: row.id || `${type}-${index}`,
        title: row.processName || row.title || row.name || '未知标题',
        description: row.description || row.processName || row.title,
        time: row.createTime || row.time || row.submitTime,
        businessCode: row.businessCode,
        processName: row.processName,
        ...row,
      };

      switch (type) {
        case 'approval':
          return {
            ...baseItem,
            type: 'approval' as const,
            urgent: row.urgent || row.priority === 'high',
            actionType: row.actionType || 'check',
          };
        case 'business':
          return {
            ...baseItem,
            type: 'business' as const,
            urgent: row.urgent || row.priority === 'high',
            actionType: row.actionType || 'progress',
          };
        case 'warning':
          return {
            ...baseItem,
            type: 'warning' as const,
            warningLevel:
              row.warningLevel ||
              (row.priority === 'high'
                ? 'high'
                : row.priority === 'medium'
                ? 'medium'
                : 'low'),
            actionType: row.actionType || 'check',
          };
        case 'message':
          return {
            ...baseItem,
            type: 'message' as const,
            unread: row.unread !== false,
            messageType: row.messageType || 'notification',
            actionType: row.actionType || 'check',
          };
        default:
          return baseItem;
      }
    },
  );

  // 使用类型适配器转换数据
  const adaptedItems = adaptCardItems(items);

  return (
    <>
      <GenericCard
        title={title}
        items={adaptedItems}
        loading={loading}
        emptyText={emptyText}
        showMore={!!moreLink}
        moreText="更多"
        onMoreClick={handleMoreClick}
        onItemClick={handleItemClick}
        renderItem={renderItem}
        maxItems={maxItems}
        className={className}
      />

      {/* 抽屉组件 */}
      {type === 'message' && (
        <>
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
        </>
      )}
    </>
  );
};
