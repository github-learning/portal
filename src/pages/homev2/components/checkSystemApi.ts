import { rcRequest } from '@core/rc-components';

export function checkSystemApi({
  systemId = '',
  resourceId = '',
  isSystem = false,
}: {
  systemId?: string;
  resourceId?: string;
  isSystem?: boolean;
}) {
  if (isSystem) {
    return rcRequest<any>('/api/uims/v1/system/check-permissions/' + systemId, {
      method: 'get',
      headers: {
        'system-id': '1',
      },
    });
  }
  return rcRequest<any>(
    '/api/uims/v1/resource/check/' + systemId + '/' + resourceId,
    {
      method: 'get',
      headers: {
        'system-id': '1',
      },
    },
  );
}
