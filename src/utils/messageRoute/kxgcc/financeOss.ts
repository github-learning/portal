 const getPayConfig = (id: string) => ({
  // 运营子系统订单详情页（保险订单
  finance8006: {
    path: `/order/insuranceOrder/detail?id=${id}`,
  },
  // 运营子系统合作渠道机构待处理列表
  finance8007: {
    path: `/channel/channelOrg`,
  },
  // 运营子系统合作渠道产品未关联列表
  finance8009: {
    path: `/channel/channelProduct`,
  },
  // 运营子系统订单详情页（融资订单
  finance8011: {
    path: `/order/financingOrder/detail?id=${id}`,
  },
});

export default getPayConfig