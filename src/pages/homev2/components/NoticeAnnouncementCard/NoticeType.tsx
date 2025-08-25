import React from 'react';
import styles from './noticeType.module.less';

export const noticeTypes = [
  {
    label: '平台公告',
    value: 1,
  },
  {
    label: '企业公告',
    value: 2,
  },
];

export const NoticeType = ({
  type = 1,
  setType,
}: {
  type?: number;
  setType: Function;
}) => {
  return (
    <div className={styles.noticeType}>
      {noticeTypes.map((t) => {
        return (
          <div
            key={t.value}
            className={`${styles.label} ${
              t.value == type ? styles.labelActive : ''
            }`}
            onClick={() => {
              setType && setType(t.value);
            }}
          >
            {t.label}
          </div>
        );
      })}
    </div>
  );
};
