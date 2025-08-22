//上链图标
import React from 'react';
import { getApiUrl } from 'remote/shared';

//类型
type TTraceIconProps = {
  style?: React.CSSProperties
}

const TraceIcon: React.FC<TTraceIconProps> = ({
  style = {}
}) => {
  const traceStyle: React.CSSProperties = {
    background: `url(${getApiUrl()}/public/trace_logo.svg)`,
    display: 'inline-block',
    width: '13px',
    height: '13px',
    marginRight: '4px',
  };
  return <div style={{
    ...traceStyle,
    ...style
  }
  } />;
};
export default TraceIcon;
