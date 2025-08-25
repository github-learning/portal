import React, { PropsWithChildren } from 'react';
import styles from './commonCardHeader.module.less';
import { Button } from 'antd';

interface ICommonCardHeaderProps extends PropsWithChildren {
  title?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  // 新增统一的按钮配置
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

// 统一的按钮组件
const ActionButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className={styles.moreButton} onClick={onClick}>
      <span className={styles.moreButtonText}>{text}</span>
    </div>
  );
};

export const CommonCardHeader = ({
  title = '',
  children,
  style,
  titleStyle,
  actionButton,
}: ICommonCardHeaderProps) => {
  return (
    <div className={styles['commonCardHeader']} style={style}>
      <div className={styles.commonCardHeaderText} style={titleStyle}>
        {title}
      </div>
      <div>
        {actionButton ? (
          <ActionButton
            text={actionButton.text}
            onClick={actionButton.onClick}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};
