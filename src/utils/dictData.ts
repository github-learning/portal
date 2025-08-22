//工具
import { isEmpty } from 'lodash-es';
import storage from './sessionStorage';

// api
import { queryDictCodeByCode } from '@/service/common';

/**
 * 获取指定的code字典翻译，本地sessionStorage里面存在，就走本地，不存在就走后端
 * @param code
 */
export const getDictCodeByCode = async (code: string) => {
  const sessionStorageDict = storage.get(code);
  if (isEmpty(sessionStorageDict)) {
    //本地不存在，走后端
    const res = await queryDictCodeByCode(code);
    const { code: resCode, data } = res;
    if (resCode === 200) {
      storage.set(code, data);
      return data;
    } else {
      return [];
    }
  } else {
    //本地存在，直接走本地
    return sessionStorageDict;
  }
};
