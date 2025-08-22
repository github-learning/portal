/**
 * 搜索类型tag
 */
import React from "react";

//css
import styles from './index.module.less';

//类型
type TSearchTypeTagProps = {
  className?: string;
  types: { key: string, label: string, [name: string]: any }[];
  currKey: string;
  onTypeChange: (type: string) => void
}

const SearchTypeTag: React.FC<TSearchTypeTagProps> = ({
  className = '',
  types = [],
  currKey = '0',
  onTypeChange = () => { }
}) => {

  return <div className={styles.searchTypeTag}>
    {
      types.map(item => {
        return <div
          key={item.key}
          className={`${styles.typeItem} ${currKey === item.key ? styles.active : ''}`}
          onClick={() => { onTypeChange(item.key) }}
        >
          {item.label}
        </div>
      })
    }
  </div>
}
export default SearchTypeTag
