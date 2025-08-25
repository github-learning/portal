import { checkSystem, getSystemList } from '@/service/home';
import staticRoutes from '@/utils/staticRoutes';
import { getRouteInfo } from './commonRouterConfig';
import { UIMS_BASE } from './constant';

export const toRouter = async (
  e: any,
  path: any,
  url: any,
  config?: {
    systemId?: string;
    oaMode?: boolean; // 是否开启oa浏览模式
  },
  hasSystemId?: boolean,
) => {
  const sysRes = await getSystemList();
  const { code, data } = sysRes;
  if (code !== 200) return;
  let sk = { id: '', pcPath: '' };
  if (config?.systemId) {
    sk.id = config.systemId;
  } else {
    sk = data.filter(
      (item: any) => item.code === e && item.portalType == '02',
    )[0];
  }

  const headers = {
    'depend-uri': '/api/uims/v1/system/list/{useScope}',
    'depend-method': 'GET',
  };
  // 默认用后端返回的pc跳转路由前缀
  let newPath = sk.pcPath || path;

  if (newPath && newPath.includes('/:id')) {
    // 嵌入基座的跳转方式
    newPath = newPath.replace(':id', sk.id);
  } else {
    // 旧项目的跳转方式， 确认没有vue项目了
    if (hasSystemId !== false) {
      // newPath = newPath + '/' + sk.id;
    }
  }
  if (!newPath.startsWith('/')) {
    newPath = '/' + newPath;
  }

  if (url) {
    if (url.startsWith('/')) {
      newPath = newPath + url;
    } else {
      newPath = newPath + '/' + url;
    }
    // oa浏览模式
    if (config?.oaMode) {
      let joinSuff = '?';
      if (newPath.indexOf('?') > -1) {
        joinSuff = '&';
      }
      newPath =
        newPath + joinSuff + 'oApproval=true&layout=head&breadcrumb=title';
    }
  }
  checkSystem(sk.id, headers)
    .then((res: any) => {
      if (res.code == 200) {
        window.location.href = newPath;
      }
    })
    .catch((err) => {});
};

export const backRouter = (e: any, taskUrl: any) => {
  const userInfoJson = JSON.parse(sessionStorage.getItem('USER_INFO') || '');
  let type = 'approveNotice'; // 1显示签收
  switch (e.businessCode) {
    // 采购
    // 采购方-请购单
    case 'purchase1010':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/pur/buyingRequisition/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 采购方订单
    case 'purchase1020':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/pur/purchaseOrder/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 发货计划
    case 'purchase1030':
      toRouter(
        'provider-system',
        staticRoutes.supplier,
        `/sup/shippingPlan/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 发货单
    case 'purchase1040':
      toRouter(
        'provider-system',
        staticRoutes.supplier,
        `/sup/supplierDispatchBill/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 入库单
    case 'purchase1050':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/pur/godownEntry/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 退货单
    case 'purchase1060':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/pur/returnList/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 出库单
    case 'purchase1070':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/psi/stockOut/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 调拨单
    case 'purchase1080':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/psi/transferringOrder/detail?id=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 项目材料清单
    case 'purchase1120':
      toRouter(
        'purchase-system',
        staticRoutes.purchase,
        `/log/materialsLog?projectId=${e.businessKey}`,
        {},
        false,
      );
      break;
    // 往来单位
    // 加入团队
    case 'uims1007':
      window.location.href = `${UIMS_BASE}/enterpriseManage/addTeam?id=${e.businessKey}`;
      break;
    // 往来单位详情
    case 'uims1002':
      window.location.href = `${UIMS_BASE}/collaborate/btypeList/inviteDetails?id=${e.businessKey}`;
      break;
    // 接受往来单位邀请
    case 'uims1003':
      window.location.href = `${UIMS_BASE}/collaborate/btypeList/checkCollaborate?id=${e.businessKey}`;
      break;
    // 加入团队
    case 'uims1001':
      window.location.href = `${UIMS_BASE}/companyList/companyHandle?id=${e.businessKey}`;
      break;
    // 上下级单位
    case 'uims1004':
      window.location.href = `${UIMS_BASE}/superiorUnit/childUnit?id=${e.businessKey}`;
      break;
    case 'uims1005':
      window.location.href = `${UIMS_BASE}/superiorUnit/superiorUnitDetails?id=${e.businessKey}`;
      break;
    case 'uims1006':
      window.location.href = `${UIMS_BASE}/superiorUnit`;
      break;
    // 企业认证结果落地页
    case 'uims1011':
      window.location.href = `${UIMS_BASE}/companyCertify/certifyDetail?id=${e.businessKey}`;
      break;
    // 用户认证结果落地页
    case 'uims1012':
      window.location.href = `${UIMS_BASE}/account/certifyDetail?id=${e.businessKey}`;
      break;
    case 'uims1040':
      // 个人认证
      window.location.href = `${UIMS_BASE}/account/certifyAccount?id=${e.businessKey}`;
      break;
    case 'uims1042':
      // 个人认证
      window.location.href = `${UIMS_BASE}/account/certifyAccount?id=${e.businessKey}`;
      break;
    case 'uims1041':
      // 团队认证
      window.location.href = `${UIMS_BASE}/companyCertify?id=${e.businessKey}`;
      break;
    case 'uims1048':
      // Oss项目 - 法人主体认证审核
      window.location.href = `${window.location.origin}/m/oss/teamVerify/teamDetail?id=${e.businessKey}`;
      break;
    case 'uims1049':
      // Oss项目 - 企业管理员审核
      window.location.href = `${window.location.origin}/m/oss/companyAdminExamine/examine?id=${e.businessKey}&type=detail`;
      break;
    case 'uims1050':
      // Oss项目 - 财务管理员审核
      window.location.href = `${window.location.origin}/m/oss/financeAdminExamine/examine?id=${e.businessKey}&type=detail`;
      break;
    case 'uims1051':
      // Oss项目 - 用户审核
      window.location.href = `${window.location.origin}/m/oss/userVerify/userHandle?id=${e.businessKey}&type=detail`;
      break;
    // 项目
    case 'project1010':
      // window.location.href = staticRoutes.project + `details?id=${e.busId}`
      toRouter(
        'project-system',
        staticRoutes.project,
        `/list/details?id=${e.businessKey}`,
      );
      break;
    // 合同
    case 'contracting1000':
      // window.location.href = staticRoutes.contract + `detail?itemId=${e.businessKey}&type=1`
      toRouter(
        'xjjchain-contract',
        staticRoutes.contract,
        `/contract/detail?id=${e.businessKey}`,
      );
      break;
    case 'contracting1010':
      // window.location.href = staticRoutes.contract + `supplement/detail?supplementId=${e.businessKey}&type=1`
      toRouter(
        'xjjchain-contract',
        staticRoutes.contract,
        `/supplement/detail?id=${e.businessKey}`,
      );
      break;
    case 'contracting1020':
      // window.location.href = staticRoutes.contract + `supplement/detail?supplementId=${e.businessKey}&type=1`
      toRouter(
        'xjjchain-contract',
        staticRoutes.contract,
        `/nego/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2300': // 工作联系单
      toRouter(
        'construction',
        staticRoutes.construction,
        `/assignmentContact/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1000': // 监理进场
      toRouter(
        'construction',
        staticRoutes.construction,
        `/preConstruction/supervisorApproach/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1200': // 施工组织设计
      toRouter(
        'construction',
        staticRoutes.construction,
        `/preConstruction/design/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1300': // 开工报审
      toRouter(
        'construction',
        staticRoutes.construction,
        `/preConstruction/report/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1400': // 开工令
      toRouter(
        'construction',
        staticRoutes.construction,
        `/preConstruction/order/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1500': // 项目经理任命
      toRouter(
        'construction',
        staticRoutes.construction,
        `/qualification/projectManager/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1600': // 施工管理机构报备
      toRouter(
        'construction',
        staticRoutes.construction,
        `/qualification/manageAgencyReport/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1700': // 分包单位资格报审
      toRouter(
        'construction',
        staticRoutes.construction,
        `/qualification/subUnitQualityReport/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1800': // 施工作业人员报审
      toRouter(
        'construction',
        staticRoutes.construction,
        `/personnelReport/constructionWork/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction1900': // 特种作业人员资格报审
      toRouter(
        'construction',
        staticRoutes.construction,
        `/personnelReport/speciaOpera/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2000': // 专项施工方案
      toRouter(
        'construction',
        staticRoutes.construction,
        `/plan/specialPlan/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2100': // 危大工程专项施工方案
      toRouter(
        'construction',
        staticRoutes.construction,
        `/plan/dangerPlan/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2200': // 危大工程验收
      toRouter(
        'construction',
        staticRoutes.construction,
        `/dangerAccept/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2400': // 工程暂停令
      toRouter(
        'construction',
        staticRoutes.construction,
        `/stopReturnWork/pauseOrder/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2500': // 工程暂停令
      toRouter(
        'construction',
        staticRoutes.construction,
        `/stopReturnWork/returnReport/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2600': // 复工令
      toRouter(
        'construction',
        staticRoutes.construction,
        `/stopReturnWork/returnOrder/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2700': // 监理报告
      toRouter(
        'construction',
        staticRoutes.construction,
        `/supervisionReport/detail?id=${e.businessKey}`,
      );
      break;
    case 'construction2800': // 项目总结
      toRouter(
        'construction',
        staticRoutes.construction,
        `/summary/detail?id=${e.businessKey}`,
      );
      break;
    // 费控
    case 'fee1010':
      toRouter('fee', staticRoutes.fee, `/budget/info/detail/${e.businessKey}`);
      break;
    case 'fee1020':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/projectFeeChange/apply/detail/${e.businessKey}`,
      );
      break;
    case 'fee1030':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/projectFeeChange/notice/detail/${e.businessKey}`,
      );
      break;
    case 'fee1040':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/projectFeeChange/feeApply/detail/${e.businessKey}`,
      );
      break;
    case 'fee1050':
      if (userInfoJson.defaultCompId == e.variables.applyCompanyId) {
        type = 'notice';
      }
      toRouter(
        'fee',
        staticRoutes.fee,
        `/cliam/fee/${type}/detail/${e.businessKey}?type=${
          type == 'approveNotice' ? 'approve' : ''
        }`,
      );
      break;
    case 'fee1060':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/cliam/fee/approve/detail/${e.businessKey}`,
      );
      break;
    case 'fee1070':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/cliam/period/approve/detail/${e.businessKey}`,
      );
      break;
    case 'fee1080':
      toRouter(
        'fee',
        staticRoutes.fee,
        `/projectSign/sign/detail/${e.businessKey}`,
      );
      break;
    case 'design1010':
      toRouter(
        'design-management',
        staticRoutes.design,
        `/design/construction/detail/${e.businessKey}`,
      );
      break;
    case 'design1020':
      toRouter(
        'design-management',
        staticRoutes.design,
        `/design/change/detail/${e.businessKey}`,
      );
      break;
    case 'design1030':
      toRouter(
        'design-management',
        staticRoutes.design,
        `/design/discuss/detail/${e.businessKey}`,
      );
      break;
    case 'design1040':
      toRouter(
        'design-management',
        staticRoutes.design,
        `/design/meeting/detail/${e.businessKey}`,
      );
      break;
    case 'project3000':
      toRouter(
        'project-system',
        staticRoutes.project,
        `/projectDivision/detail?id=${e.businessKey}`,
      );
      break;
    case 'esign1010':
      // 邀请已可信认证的员工激活电子签章服务
      window.location.href = `/account?buscode=esign1010`;
      break;
    case 'esign1020':
      // 先完成个人实名认证并激活电子签章服务
      window.location.href = `/account?buscode=esign1020`;
      break;
    case 'ant1000':
      // window.open(`http://archichaincloud.sit.alipay.net/mall/service/todotask/${e.processInstanceId}`)
      // window.location.href = `http://archichaincloud.sit.alipay.net/mall/service/todotask/${e.processInstanceId}`
      window.location.href = `${taskUrl}${
        e.processInstanceId
      }?fp=${localStorage.getItem('fp')}&ct=1`;
      break;
    case 'crm1010':
      toRouter('crm', staticRoutes.crm, `/filing/detail?id=${e.businessKey}`);
      break;
    case 'crm1020':
      toRouter(
        'crm',
        staticRoutes.crm,
        `/business/filing/detail?id=${e.businessKey}`,
      );
      break;
    case 'crm1210':
      toRouter('crm', staticRoutes.crm, `/filing/detail?id=${e.businessKey}`);
      break;
    case 'crm1220':
      toRouter(
        'crm',
        staticRoutes.crm,
        `/business/filing/detail?id=${e.businessKey}`,
      );
      break;
    case 'finance8006':
      toRouter(
        'finance-oss',
        staticRoutes.financeoss,
        `/order/insuranceOrder/detail?id=${e.businessKey}`,
      );
      break;
    case 'finance8007':
      toRouter('finance-oss', staticRoutes.financeoss, `/channel/channelOrg`);
      break;
    case 'finance8009':
      toRouter(
        'finance-oss',
        staticRoutes.financeoss,
        `/channel/channelProduct`,
      );
      break;
    case 'finance8011':
      toRouter(
        'finance-oss',
        staticRoutes.financeoss,
        `/order/financingOrder/detail?id=${e.businessKey}`,
      );
      break;
    // 不要再继续写case判断了，维护比较困难，写在下方的default的getRouteInfo逻辑中
    case 'crm1210':
      toRouter('crm', staticRoutes.crm, `/filing/detail?id=${e.businessKey}`);
      break;
    case 'crm1220':
      toRouter(
        'crm',
        staticRoutes.crm,
        `/business/filing/detail?id=${e.businessKey}`,
      );
      break;
    default: {
      const { id, code, businessKey, businessCode, ...rest } = e;
      // 其他子系统得检索
      const routeInfo = getRouteInfo({
        id: businessKey,
        code: businessCode,
        ...rest,
      });
      if (routeInfo && routeInfo.path) {
        toRouter(
          routeInfo.systemName,
          routeInfo.pathPrefix,
          routeInfo.path,
          routeInfo.otherConfig,
        );
      }
    }
  }
};
