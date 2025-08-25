/**
 * 首页头部tab切换
 */
import React from 'react';

//css
import styles from './index.module.less';

//类型
type TSysTabsProps = {
  className?: string;
  activeKey: any;
  sysTabs: { id: string; name: string }[];
  onChange: (key: any) => void
};

const SysTabs: React.FC<TSysTabsProps> = ({
  className = '',
  sysTabs = [],
  activeKey = undefined,
  onChange = () => { }
}) => {
  return (
    <div className={`${styles.sysTabs} ${className}`}>
      {sysTabs?.map?.((item) => {
        return (
          <div
            key={item.id}
            className={`${styles.tabsItem} ${activeKey === item.id ? styles.active : ''
              }`}
            onClick={() => {
              onChange(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default SysTabs;
