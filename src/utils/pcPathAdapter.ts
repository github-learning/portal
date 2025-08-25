import React from 'react';

export const pcPathAdapter = (
  basePath = '',
  {
    systemId = '',
    pcPath = '',
  }: {
    systemId?: string;
    pcPath?: string;
  },
) => {
  const strArr = `${basePath}/${pcPath}`
    .split('/')
    .filter((str) => str && str != '/')
    .map((str) => {
      if (str == ':id') {
        return systemId;
      } else {
        return str;
      }
    });
  const str = '/' + strArr.join('/') + '/';
  console.log(str, 'str');
  return str;
};
