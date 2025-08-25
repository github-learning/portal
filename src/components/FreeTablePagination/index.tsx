/**
 * freeTable类似组件
 */
import { Pagination } from "antd";
import React from "react";

//css
import styles from './index.module.less';

//类型
type TFreeTablePaginationProps = {
  className?: string,
  total: number;
  pageNum: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void
}

const FreeTablePagination: React.FC<TFreeTablePaginationProps> = ({
  className = '',
  total = 0,
  pageNum = 0,
  pageSize = 0,
  onChange = () => { }
}) => {
  return <div className={`${styles.paginationBox} ${className}`}>
    <Pagination
      current={pageNum}
      pageSize={pageSize}
      total={total}
      showSizeChanger={false}
      showQuickJumper
      showTotal={() => `共 ${total} 条记录`}
      onChange={onChange}
    /></div>


}

export default FreeTablePagination
