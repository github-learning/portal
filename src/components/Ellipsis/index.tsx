/**
 * 文本溢出组件
 */
import { Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

//css
import styles from './index.module.less';

//类型
type TEllipsisProps = {
  text: string;
  className?: string;
};

const Ellipsis: React.FC<TEllipsisProps> = ({ text = '', className = '' }) => {
  const [needTooltip, setNeedTooltip] = useState(false);

  const textRef: any = useRef(null);

  useEffect(() => {
    setNeedTooltip(textRef.current?.clientWidth < textRef.current?.scrollWidth);
  }, [textRef]);
  return needTooltip ? (
    <Tooltip title={text}>
      <div ref={textRef} className={`${styles.ellipsis} ${className}`}>
        {text}
      </div>
    </Tooltip>
  ) : (
    <div ref={textRef} className={`${styles.ellipsis} ${className}`}>
      {text}
    </div>
  );
};

export default Ellipsis;
