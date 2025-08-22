export const getPayConfig = (id: string) => ({
  // 发票详情
  pay1010: {
    path: `/invoice/upload/${id}/detail`,
  },
  // 发票签收详情
  pay1013: {
    path: `/invoice/receipt/${id}/detail`,
  },
  // 费用支付申请
  pay1020: {
    path: `/feePayment/applicate/${id}/detail`,
  },
  // 费用支付审批
  pay1130: {
    path: `/feePayment/approval/${id}/detail`,
  },
  // 工程款支付申请
  pay1030: {
    path: `/constructionProgress/report/${id}/detail`,
  },
  // 工程款审查记录
  pay1040: {
    path: `/constructionProgress/record/${id}/detail`,
  },
  // 工程款 支付证书
  pay1050: {
    path: `/constructionProgress/certificate/${id}/detail`,
  },
  // 竣工支付证书申请
  pay1070: {
    path: `/completeSettlement/certificate/${id}/detail`,
  },
  // 竣工结算款申请
  pay1060: {
    path: `/completeSettlement/applicate/${id}/detail`,
  },
  // 最终结算申请
  pay1080: {
    path: `/finalSettlement/applicate/${id}/detail`,
  },
  // 最终结算证书
  pay1090: {
    path: `/finalSettlement/certificate/${id}/detail`,
  },
  // 线下转账登记
  pay1100: {
    path: `/confirmPayment/offline/${id}/detail`,
  },
  // 线上款项拨付
  pay1110: {
    path: `/confirmPayment/online/${id}/detail`,
  },
  // 确认收款详情
  pay1120: {
    path: `/confirmPayment/receipt/${id}/detail`,
  },
  // 付款单
  pay1210: {
    path: `/payment/paycheck/${id}/detail`,
  },
  // 付款记录
  pay1220: {
    path: `/payment/record/${id}/detail`,
  },
});
