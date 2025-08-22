/**
 * 图片预览弹窗组件
 */
import { Modal } from 'antd';
import React from 'react';

//工具
import { isEmpty } from 'lodash';

//css
import styles from './index.module.less';

//常量
const AntModal: any = Modal;

//类型定义
type TReviewModalProps = {
  visible: boolean;
  previewImage: string;
  previewVideo?: string;
  onCancel: () => void;
};

const ReviewModal: React.FC<TReviewModalProps> = ({
  visible = false,
  previewImage = '',
  previewVideo = '',
  onCancel = () => { },
}) => {
  return (
    <AntModal
      visible={visible}
      footer={null}
      onCancel={onCancel}
      className={styles.reviewModal}
    >
      {!isEmpty(previewImage) ? (
        <img className={styles.image} src={previewImage} alt='' />
      ) : null}
      {!isEmpty(previewVideo) ? (
        <video
          className={styles.previewVideo}
          src={previewVideo}
          autoPlay
          controls={true}
        />
      ) : null}
    </AntModal>
  );
};

export default ReviewModal;
