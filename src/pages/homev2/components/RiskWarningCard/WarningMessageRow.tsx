import React from 'react';
import './warningMessageRow.less';
import dayjs from 'dayjs';
export const WarningMessageRow = ({ row }: { row?: any }) => {
  const handleJump = () => {
    window.open(`/warning/risk/log-search/detail?id=${row.id}`);
  };
  if (!row) {
    return null;
  }
  return (
    <div
      className="messageItem"
      onClick={() => {
        handleJump();
      }}
    >
      <div className="levelNameTagWrap">
        <div className="flex-1 configNameLine">{row.configName}</div>
        <div className="levelNameTag">{row.levelName}预警</div>
      </div>

      <div>{dayjs(row.warnTime).format('YYYY-MM-DD HH:mm:ss')}</div>
    </div>
  );
};
