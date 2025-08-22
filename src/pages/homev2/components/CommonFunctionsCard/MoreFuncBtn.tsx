import React from 'react';
import styles from './moreFuncBtn.module.less';
import { RightOutlined } from '@ant-design/icons';
export const MoreFuncBtn = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div className={styles.moreFuncBtn} onClick={onClick}>
      <div className={styles.moreFuncBtnText}>更多</div>
      <div>
        {/* <RightOutlined
          style={{
            color: '#666666',
            fontSize: '14px',
          }}
        /> */}
      </div>
    </div>
  );
};
