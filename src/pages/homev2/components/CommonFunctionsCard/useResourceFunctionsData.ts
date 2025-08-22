import { rcRequest } from '@core/rc-components';
import { useRequest } from 'ahooks';

import React from 'react';
import { apiConfig } from 'remote/shared';

interface IuseResourceFunctionsDataProps {
  onSuccess?: (data: any) => void;
}
/**
 * 查询用户当前使用的产品所有子系统与菜单
 * @param param0
 * @returns
 */
export const useResourceFunctionsData = ({
  onSuccess,
}: IuseResourceFunctionsDataProps = {}) => {
  const { data: resourceFunctionsData, loading: resourceFunctionsLoading } =
    useRequest(
      () =>
        rcRequest(
          `${apiConfig.apiUims}/v1/resource/function/find/user-resource-function`,
          {
            method: 'get',
            headers: {
              'system-id': '1',
            },
          },
        ),
      {
        onSuccess,
      },
    );
  return {
    resourceFunctionsData,
    resourceFunctionsLoading,
  };
};
