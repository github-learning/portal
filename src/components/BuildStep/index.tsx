/**
 * 项目进程tag
 */
import { BuildStepList } from "@/constant/buildStep";
import React from "react";

//css
import styles from './index.module.less';

//常量

//类型
type TBuildStepPorps = {
  className?: string;
  type: number | string | undefined
}

const BuildStep: React.FC<TBuildStepPorps> = ({
  className = '',
  type = undefined
}) => {
  return <div
    className={`${styles.buildStep}
  ${className}
  ${styles[BuildStepList.find(item => item.type === `${type}`)?.classStr || 'normal']}
  `}
  >
    {BuildStepList.find(item => item.type === `${type}`)?.label || '未知'}
  </div>
}

export default BuildStep
