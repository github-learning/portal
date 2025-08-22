import { rcRequest } from '@core/rc-components';
import { useRequest } from 'ahooks';

import React from 'react';
import { apiConfig } from 'remote/shared';

interface IUseCommonFunctionsDataProps {
  onSuccess?: (data: any) => void;
}

export const useCommonFunctionsData = ({
  onSuccess,
}: IUseCommonFunctionsDataProps = {}) => {
  const {
    data: commonFunctionsData = [],
    loading: commonFunctionsLoading,
    refresh,
  } = useRequest(
    () =>
      rcRequest(`${apiConfig.apiUims}/v1/users/common/functions/find`, {
        method: 'get',
        headers: {
          'system-id': '1',
          'depend-uri': '/api/activiti/v1/oa/task/running',
          'depend-method': 'POST',
        },
      }),
    {
      onSuccess,
    },
  );
  return {
    commonFunctionsData,
    commonFunctionsLoading,
    refreshCommonFunctions: refresh,
  };
};
