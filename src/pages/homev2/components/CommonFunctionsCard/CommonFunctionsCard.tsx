import React, { memo, useEffect, useState } from 'react';
import styles from './commonFunctionsCard.module.less';
import { CommonCardHeader } from '../CommonCardHeader/CommonCardHeader';
<<<<<<< HEAD
import { MoreFuncBtn } from './MoreFuncBtn';
import { useRequest } from 'ahooks';
import { apiConfig } from 'remote/shared';
import { rcRequest, Empty } from '@core/rc-components';
import { Button } from 'antd';
import { FunctionsMenuDrawer } from './FunctionsMenuDrawer';
import { useCommonFunctionsData } from './useCommonFunctionsData';
import { DrawerMenuItem } from './DrawerMenuItem';
=======
import { DrawerMenuItem } from './DrawerMenuItem';
import { useCommonFunctionsData } from './useCommonFunctionsData';
import { FunctionsMenuDrawer } from './FunctionsMenuDrawer';
import { Empty, SpinnersDot } from '@core/rc-components';
import { Button } from 'antd';
>>>>>>> d1f1d1861b73d4cff7c592fa46ceae5e0f13e81e

const LoadingC = () => {
  return;
};

export const CommonFunctionsCard = memo(() => {
  // 产品首页用户常用功能设置-列表
  const {
    commonFunctionsData,
    commonFunctionsLoading,
    refreshCommonFunctions,
  } = useCommonFunctionsData();
  const isEmpty =
    !commonFunctionsData ||
    !commonFunctionsData.length ||
    commonFunctionsData?.length === 0;
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    window.addEventListener('refreshCommonFunctions', refreshCommonFunctions);
    return () => {
      window.removeEventListener(
        'refreshCommonFunctions',
        refreshCommonFunctions,
      );
    };
  }, []);
  return (
    <div className={styles.cardWrap}>
      <CommonCardHeader
        title="常用功能"
        actionButton={{
          text: '更多',
          onClick: () => {
            setIsEdit(false);
            setOpen(true);
          },
        }}
      />
      {isEmpty && (
        <div className={styles.emptyWrap}>
          <div className={styles.emptyImgWrap}>
            <Empty imgHeight={180} imgWidth={214} title={''} height="180px" />
          </div>
          <div className={styles.emptyTextWrap}>{'暂无常用功能'}</div>
          <div className={styles.emptyBtnWrap}>
            <Button
              type="primary"
              onClick={() => {
                setIsEdit(true);
                setOpen(true);
              }}
            >
              去添加
            </Button>
          </div>
        </div>
      )}
      {open && (
        <FunctionsMenuDrawer
          open={open}
          setOpen={setOpen}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
      <div className={styles.commonGridWrap}>
        {(commonFunctionsData || []).map((d, index) => {
          return (
            <DrawerMenuItem
              isVertical={true}
              key={index}
              {...d}
              isEdit={false}
              title={d.title || d.resourceName}
            />
          );
        })}
      </div>
    </div>
  );
});
