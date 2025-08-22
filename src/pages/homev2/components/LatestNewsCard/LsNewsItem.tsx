import React, { useState } from 'react';
import styles from './lsNewsItem.module.less';
import { getAdminApplyApi, getBoxInfoApi } from '@/service/home';
import { useJumpPageRouteGet } from 'remote/shared';

const headers = {
  'function-code': 'TABLE-QUERY',
};

const PATH_PRE_ENUM = {
  UIMS_1013: 'uims1013', // 财务授权申请
  UIMS_1014: 'uims1014', // 未认证企业更换管理员申请详情
  UIMS_1015: 'uims1015', // 已认证企业更换管理员申请详情
  UIMS_1018: 'uims1018', // 法人手持身份证
  UIMS_1019: 'uims1019', // 企业授权证书
  UIMS_1021: 'uims1021', // 用户手持身份证
  UIMS_1022: 'uims1022', // 财务管理员审核附件
};
const systemAuthors = {
  QUERY: 'TABLE-QUERY',
  GET: 'TABLE-GET',
  readAll: 'TABLE-PROCESS', // 全部已读
  GROUP: 'TABLE-RPT_GROUP', //消息分类
  CONFIRM: 'TABLE-CONFIRM', //已读/批量已读
};

export const LsNewsItem = ({
  row,
  drawVisibleObj,
  setDrawVisibleObj,
}: {
  row: any;
  drawVisibleObj: any;
  setDrawVisibleObj: any;
}) => {
  // 跳转路由
  const { getJumpPagePath } = useJumpPageRouteGet();

  const onMsgClick = () => {
    const data = row;
    // 更换管理员申请 - 详情抽屉
    if (
      [
        PATH_PRE_ENUM.UIMS_1013,
        PATH_PRE_ENUM.UIMS_1014,
        PATH_PRE_ENUM.UIMS_1015,
      ].includes(data.busCode)
    ) {
      const { busCode, busId } = data;
      if (busCode === PATH_PRE_ENUM.UIMS_1014) {
        getAdminApplyApi(busId).then((res) => {
          if (res.code === 200) {
            let userInfo: any = sessionStorage.getItem('USER_INFO');
            if (userInfo) {
              userInfo = JSON.parse(userInfo);
            }
            if (res.data.employeeId === userInfo.employeeId) {
              setDrawVisibleObj({
                ...drawVisibleObj,
                senderDraw: true,
                rowInfo: res.data,
                id: res.data?.id,
              });
            } else {
              setDrawVisibleObj({
                ...drawVisibleObj,
                receiverDraw: true,
                id: res.data?.id,
                rowInfo: res.data,
              });
            }
          }
        });
      } else if (busCode === PATH_PRE_ENUM.UIMS_1013) {
        getBoxInfoApi(busId, headers).then((res) => {
          if (res.code === 200) {
            const {
              employeeInfo,
              financeCertification,
              records = [],
            } = res.data;
            const nameString = employeeInfo
              .map((v: any) => v.employeeName)
              .join(',');
            setDrawVisibleObj({
              ...drawVisibleObj,
              financeAdminDraw: true,
              rowInfo: {
                ...financeCertification,
                ...records[0],
              },
              nameList: nameString.split(','),
            });
          }
        });
      } else if (busCode === PATH_PRE_ENUM.UIMS_1015) {
        setDrawVisibleObj({
          ...drawVisibleObj,
          certifySenderDraw: true,
          id: busId,
        });
      }
    } else if (data.appType === 'SYSTEM_BUS_CODE') {
      getJumpPagePath(
        {
          ...data,
          businessCode: data.busCode,
          businessKey: data.busId,
        },
        {
          baseOnOrigin: 'message',
        },
      ).then((directPath) => {
        if (directPath) {
          window.location.href = directPath;
        }
      });
    } else if (data.webUrl) {
      // 修复不按规则输入的网址，
      let webUrl = data.webUrl;
      // 校验是否是有效的网址
      const reg =
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      if (reg.test(webUrl)) {
        if (webUrl.indexOf('//') === -1) {
          webUrl = '//' + webUrl; // bu'z
        }
      } else if (
        webUrl.indexOf(window.location.origin) === -1 &&
        webUrl.indexOf('//') === -1
      ) {
        webUrl = window.location.origin + webUrl;
      }
      window.open(webUrl, '_blank');
    }
  };

  return (
    <div
      className={`${styles.lsNewsItem} cardBase`}
      onClick={() => {
        onMsgClick();
      }}
    >
      <div className={`${styles.title} ellipsis`}>{row.title}</div>
      <div className={`${styles.content} ellipsis`}>{row.content}</div>
    </div>
  );
};
