/**
 * tag样式的button组合
 */
import React from "react";

//css
import styles from './index.module.less';

//类型
type TTagsButtonProps = {
  className?: string;
  buttons: { key: string, label: string }[];
  currType: string;
  onTypeChange: (key: string) => void
}

const TagsButton: React.FC<TTagsButtonProps> = ({
  className = '',
  buttons = [],
  currType = '0',
  onTypeChange = () => { }
}) => {
  return <div className={`${styles.tagsButton} ${className}`}>
    {
      buttons?.map(item => {
        return <div
          key={item.key}
          className={`${styles.tagItem} ${currType === item.key ? styles.active : ''}`}
          onClick={() => { onTypeChange(item.key) }}
        >
          {item.label}
        </div>
      })
    }
  </div>
}

export default TagsButton
