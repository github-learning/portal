import { apiConfig } from 'remote/shared';
import { request } from 'remote/shared';

// 项目数量统计
export async function getTasks(data: any, headers: any = {}) {
  return request(`${apiConfig.apiActiviti}/v1/oa/task/count`, {
    method: 'POST',
    data,
    headers,
  });
}

// 项目数量统计
export async function getProjectCount(headers: any = {}) {
  return request(`${apiConfig.apiBg}/v1/project/company/count`, {
    method: 'get',
    headers,
  });
}

// 企业项目数据概览(项目资金类别统计)
export async function getProjectCountByCapital(data: any, headers: any = {}) {
  return request(
    `${apiConfig.apiBg}/v1/project/workbench/count-by-capital/${data}`,
    {
      method: 'get',
      headers,
    },
  );
}

// 企业项目数据概览(项目资金类别统计)
export async function getProjectCountByType(data: any, headers: any = {}) {
  return request(
    `${apiConfig.apiBg}/v1/project/workbench/count-by-type/${data}`,
    {
      method: 'get',
      headers,
    },
  );
}
