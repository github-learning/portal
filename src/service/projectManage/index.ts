import { apiConfig } from 'remote/shared';
import { request } from 'remote/shared';

// 项目数量统计
export async function getWorkbenchCount(headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/workbench/count`, {
    method: 'get',
    headers,
  });
}

// 项目列表
export async function getTableList(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/workbench/table`, {
    method: 'POST',
    data,
    headers,
  });
}

// 工作台(判断是否有项目看板权限)
export async function getProjectAuthority(data: any, headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/workbench/authority/${data}`, {
    method: 'GET',
    headers,
  });
}
