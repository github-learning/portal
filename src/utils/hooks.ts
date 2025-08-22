/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

//工具
import { getDictCodeByCode } from '@/utils/dictData';
import { isEmpty } from 'lodash-es';
import storage from './sessionStorage';

/**
 * 获取字典hook
 * @param code
 * @param headers
 */
export const useDictCodeByCode = (code: string) => {
  /**
   * 字典
   */
  const [dictCode, setDictCode] = useState<{ code: string; name: string }[]>(
    [],
  );
  /**
   * 获取字典字段
   */
  const fetchDictCode = async (codeParams: string) => {
    const sessionDictCode = await getDictCodeByCode(codeParams);
    setDictCode(sessionDictCode);
  };

  useEffect(() => {
    if (isEmpty(code)) return;
    fetchDictCode(code);
  }, [code]);
  return dictCode;
};

/**
 * 获取多个字段字典
 * @param codeArr
 */
export const useDictCodeByCodes = (codeArr: string[]) => {
  /**
   * 字典
   */
  const [dictCodeObj, setDictCodeObj] = useState<
    Record<string, { code: string; name: string }[]>
  >({});

  useEffect(() => {
    if (isEmpty(codeArr)) return;
    const newDictCodeObj = {};
    codeArr.forEach(async (codeItem, codeIndex) => {
      const codeItemDict = await getDictCodeByCode(codeItem);
      newDictCodeObj[codeItem] = codeItemDict;
      if (codeIndex == codeArr.length - 1) {
        setDictCodeObj(newDictCodeObj);
      }
    });
  }, []);

  return dictCodeObj;
};

/**
 * 请求一次就缓存的逻辑
 */
export const useFetchOnce = (dataName: string, fetchRequest: () => any) => {
  /**
   * 只请求一次的数据
   */
  const [fetchOnceData, setFetchOnceData] = useState<any>(undefined);

  const doRequest = async () => {
    const sessionStorageData = storage.get(dataName);
    if (isEmpty(sessionStorageData)) {
      //本地不存在，走请求
      const dataObj = await fetchRequest();
      storage.set(dataName, dataObj);
      setFetchOnceData(dataObj);
    } else {
      //本地存在，直接走本地
      setFetchOnceData(sessionStorageData);
    }
  };

  useEffect(() => {
    if (isEmpty(dataName)) return;
    doRequest();
  }, [dataName]);

  return fetchOnceData;
};

/**
 * 获取元素大小
 * @param domRef
 * @returns
 */
export const useDomSize = (domRef: any) => {
  const [domSize, setDomSize] = useState({
    width: 0,
    height: 1,
  });

  useEffect(() => {
    if (domRef?.current) {
      setDomSize({
        width: domRef?.current?.clientWidth,
        height: domRef?.current?.clientHeight,
      });
    }
  }, [domRef?.current]);

  return domSize;
};
