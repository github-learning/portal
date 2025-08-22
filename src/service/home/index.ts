/**
 * backlog 路由下请求
 */
import { apiConfig } from 'remote/shared';
import { request } from 'remote/shared';

// 获取轮播图列表
export async function getQueryAd(data: any) {
  return request(
    `${apiConfig.apiCms}/v1/ad/theme/queryAd/code/${data.code}/channel/${data.channel}`,
    {
      method: 'get',
    },
  );
}

// 获取记录-根据业务ids、业务code
export async function getFileInfoByBusIds(data: any) {
  return request(`${apiConfig.apiOss}/v1/file/info/bus/ids/code`, {
    method: 'post',
    data,
  });
}

// 获取最新置顶的一条公告
export async function getTopNotice() {
  return request(`${apiConfig.apiCms}/v1/cms/content/topNotice?noticeType=1`, {
    method: 'GET',
  });
}

// 更新公告不在置顶
export async function updateTopNoticeById(contentId: any) {
  return request(
    `${apiConfig.apiCms}/v1/cms/promptRecord/topNotice/${contentId}`,
    {
      method: 'put',
      headers: {
        'depend-uri': `${apiConfig.apiCms}/v1/cms/content/popupContent`,
        'depend-method': 'GET',
      },
    },
  );
}

// 个人信息
export async function getMyMessage() {
  return request(`${apiConfig.apiUims}/v1/org/my`, {
    method: 'GET',
  });
}

// 获取应用系统
export async function getSystemList() {
  return request(`${apiConfig.apiUims}/v1/system/list/1`, {
    method: 'get',
  });
}

// 应用分类列表
export async function systemTypeGetAll(headers: any = {}) {
  return request(`${apiConfig.apiUims}/v1/oss/systemType/getAll`, {
    method: 'get',
    headers,
  });
}

// 检查是否可以访问系统
export async function checkSystem(data: any, headers: any = {}) {
  return request(`${apiConfig.apiUims}/v1/checkSystem/${data}`, {
    method: 'get',
    headers,
  });
}

// 检查是否可以访问系统
export async function homeStatistics(headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/home/statistics`, {
    method: 'get',
    headers,
  });
}

// 通知公告列表
export async function getNoticePage(data: any) {
  return request(`${apiConfig.apiCms}/v1/cms/content/notice/page`, {
    method: 'post',
    data,
  });
}

// 流程待办统计
export async function taskCount(data: any) {
  return request(
    `${apiConfig.activiti}/v1/home/custom/${data.module}/taskCount?companyId=${data.companyId}`,
    {
      method: 'get',
    },
  );
}

// 待办事项列表
export async function tasksCustom(data: any) {
  return request(`${apiConfig.activiti}/v1/oa/task/running`, {
    method: 'post',
    data,
  });
}

// 已办、已完结、我参与的列表
export async function taskCustomFinished(data: any) {
  return request(
    `${apiConfig.activiti}/v1/historic-task-instances/custom/finished/${data.type}/${data.module}/${data.page}/${data.size}?businessName=${data.businessName}&projectId=${data.projectId}&companyId=${data.companyId}`,
    {
      method: 'get',
    },
  );
}

//站内信邀请详情
export async function todoTaskUrl() {
  return request(`${apiConfig.apiUims}/v1/quick/entrance/todoTaskUrl`, {
    method: 'get',
  });
}

// 获取通知公告不在显示
export async function setPopupContentDisable(id: any) {
  return request(`${apiConfig.apiCms}/v1/cms/promptRecord/noPrompt/${id}`, {
    method: 'put',
    headers: {
      'depend-uri': `${apiConfig.apiCms}/v1/cms/content/popupContent`,
      'depend-method': 'GET',
    },
  });
}

// 获取通知公告弹窗设置
export async function getPopupContent() {
  return request(`${apiConfig.apiCms}/v1/cms/content/popupContent`, {
    method: 'get',
  });
}

// 我的企业
export async function userCompany() {
  return request(`${apiConfig.apiUims}/v1/org/user/company`, {
    method: 'get',
    headers: {
      'system-id': '1',
    },
  });
}

// 注册公司
export async function companyRegister(data: any) {
  return request(`${apiConfig.apiUims}/v1/user/company/register`, {
    method: 'post',
    data,
  });
}

// 切换我的企业
export async function putCompany(data: any) {
  return request(`${apiConfig.apiUims}/v1/org/default/company`, {
    method: 'put',
    data,
  });
}

// 设置我的主企业
export async function setMainCompany(data: any) {
  return request(`${apiConfig.apiUims}/v1/org/main/company`, {
    method: 'put',
    data,
  });
}

// 根据父级id查询省市区
export async function getAreaList(data: any) {
  return request(`${apiConfig.apiUims}/v1/area/lowerTable/${data}`, {
    method: 'get',
  });
}

// 新增企业
export async function registerCompany(data: any) {
  return request(`${apiConfig.apiUims}/v1/user/company/register`, {
    method: 'post',
    data,
  });
}

// 新增企业
export async function queryStage(data: any) {
  return request(`${apiConfig.apiUims}/v1/home/page/query-staging`, {
    method: 'post',
    data,
  });
}

// portal首页统计
export async function getHomeStatistics(headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/company/count`, {
    method: 'get',
    headers,
  });
}

// 数量统计
export async function getQualityCheckCount(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/quality/check/count`, {
    method: 'post',
    data,
    headers,
  });
}

// 数量统计
export async function getSafetyCheckCount(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/safety/check/company`, {
    method: 'post',
    data,
    headers,
  });
}

// 数量统计
export async function getWarningCheckCount(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/warning/log/count-level`, {
    method: 'post',
    data,
    headers,
  });
}

// 趋势图
export async function getWarningLogCount(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/warning/log/count`, {
    method: 'post',
    data,
    headers,
  });
}

// 预警消息
export async function getWarningMessage(data: any, headers: any = {}) {
  return request(`${apiConfig.apiMessage}/v1/mc/msg/records/table`, {
    method: 'post',
    data,
    headers,
  });
}

// 获取数量
export async function getWarningNum(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/warning/log/num`, {
    method: 'post',
    data,
    headers,
  });
}

// 更换管理员详情
export const getAdminApplyApi = (busId: string) => {
  return request(`${apiConfig.apiUims}/v1/sys/company/admin/apply/${busId}`, {
    method: 'get',
  });
};
// 获取站内信详情
export const getBoxInfoApi = (id: string, headers) => {
  return request(`${apiConfig.apiUims}/v1/finance/certification/inbox/${id}`, {
    method: 'get',
    headers,
  });
};
// 修改更换管理员
export const putAdminApplyApi = (data: any) => {
  return request(`${apiConfig.apiUims}/v1/sys/company/admin/apply`, {
    method: 'put',
    data,
  });
};

// 修改财务管理员人工审核
export const putFinanceDetailApi = (id: string) => {
  return request(`${apiConfig.apiUims}/v1/finance/certification/${id}`, {
    method: 'put',
  });
};
