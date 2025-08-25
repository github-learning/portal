/**
 * tag样式的button组合
 */
import React from 'react';

//css
import styles from './index.module.less';
import { getBusinessCodeTag } from 'remote/shared';

// 常量
// import { sysList } from "./constant";

//类型
type TSysTagsProps = {
  className?: string;
  busCode: string;
};

const SysTags: React.FC<TSysTagsProps> = ({
  className = '',
  busCode = '0',
}) => {
  return (
    <div className={`${styles.sysTags} ${className}`}>
      {/* {
      sysList.find(item => `${busCode}`?.startsWith(item.key))?.label
    } */}
      {
        // 引用公共待办组件的任务类型
        getBusinessCodeTag(busCode)
      }
    </div>
  );
};

export default SysTags;
