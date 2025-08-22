import React from 'react';
import styles from './noticeItem.module.less';
import { Base64 } from 'js-base64';
export const NoticeItem = ({ row }: { row: any }) => {
  const handleJump = () => {
    if (row.path) {
      const userInfo = sessionStorage.getItem('USER_INFO');
      const str = Base64.encode(userInfo as any);
      const newUrl = `/${row.path}&info=${str}&busCode=cms1000`;
      window.open(window.location.origin + newUrl);
    }
  };
  return (
    <div
      className={`cardBase ${styles.noticeItem} `}
      onClick={() => {
        handleJump();
      }}
    >
      <div className={`${styles.title} ellipsis`}>{row.title}</div>
      <div className={`${styles.summary} ellipsis`}>{row.summary}</div>
    </div>
  );
};
