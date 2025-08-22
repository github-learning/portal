import React, { PropsWithChildren } from 'react';
import styles from './commonCardHeader.module.less';

interface ICommonCardHeaderProps extends PropsWithChildren {
  title?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties; // 标题样式属性
}

export const CommonCardHeader = ({
  title = '',
  children,
  style,
  titleStyle,
}: ICommonCardHeaderProps) => {
  return (
    <div className={styles['commonCardHeader']} style={style}>
      <div className={styles.commonCardHeaderText} style={titleStyle}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};
