import { apiConfig } from 'remote/shared';
import { request } from 'remote/shared';
import { handleDictObjRequest } from '@core/service-api';

// 查询登录用户拥有权益
export async function getUserEquity(headers: any = {}) {
  return request(`${apiConfig.apiUims}/v1/company/equity/query-user-equity`, {
    method: 'get',
    headers,
  });
}

/**
 * 查询单个字典
 * @param data
 * @param headers
 * @returns
 */
export async function queryDictCodeByCode(data: string, headers: any = {}) {
  return handleDictObjRequest(`${apiConfig.apiUims}/v1/dict/code/${data}`, {
    method: 'post',
    headers,
  });
}

// 获取用户权限信息
export const getUserInfoPerm = async (systemId: string) => {
  return request(
    `${apiConfig.apiUims}/v1/resource-function/user/${systemId}/perms`,
    {
      method: 'get',
    },
  );
};
