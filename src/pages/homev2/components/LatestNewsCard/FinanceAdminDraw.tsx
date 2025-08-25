import { putFinanceDetailApi } from '@/service/home';
import { FilePreviewItem } from '@core/rc-components';
import { Alert, Button, Drawer, message, Modal, Spin } from 'antd';
import moment from 'moment';
import React, { useMemo } from 'react';
import { useDrawer } from './useDrawer';
export type CertifySenderDrawProps = {
  nameList: any;
  id: string;
  rowInfo: any;
  visible: boolean;
  onVisibleChange: (bool: boolean) => void;
  onLoaded?: () => void;
};
const FinanceAdminDraw: React.FC<CertifySenderDrawProps> = ({
  id,
  rowInfo,
  nameList,
  visible,
  onVisibleChange,
  onLoaded,
}) => {
  const {
    spinning,
    previewInfo,
    setPreviewInfo,
    changeImageMark,
    useStyles,
    stateMap,
  } = useDrawer();
  const styles = useStyles();
  // 撤销需求
  const revoke = () => {
    Modal.confirm({
      content: '确认撤销本次财务授权？',
      title: '撤销授权确认',
      closable: false,
      onOk: () => {
        // 撤销的状态是3
        putFinanceDetailApi(id).then((res) => {
          if (res.code === 200) {
            message.success('已撤销');
            onVisibleChange(false);
            onLoaded?.();
          }
        });
      },
    });
  };
  const nameDoms = useMemo(() => {
    const arr: React.ReactNode[] = [];
    if (nameList?.length > 0) {
      nameList.forEach((name: string, index: number) => {
        arr.push(
          <div
            className={styles.avatar}
            id={name ? name.slice(-2) : ''}
            key={index}
          >
            {name}
          </div>,
        );
      });
    }
    return arr;
  }, [nameList]);
  return (
    <Drawer
      title="更换管理员"
      width={500}
      visible={visible}
      onClose={() => onVisibleChange(false)}
      footer={
        rowInfo.verifyStatus === 0 ? (
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={revoke}>
              撤销
            </Button>
          </div>
        ) : (
          false
        )
      }
    >
      <Spin spinning={spinning}>
        <Alert
          type={stateMap(rowInfo.verifyStatus)?.alertType}
          className={styles.tipAlert}
          message={
            <>
              {rowInfo.verifyStatus === 0 && (
                <span>正在审核中，请耐心等待。</span>
              )}
              {rowInfo.verifyStatus === 1 && (
                <span>审核不通过。{rowInfo.certificationRemark}</span>
              )}
              {rowInfo.verifyStatus === 2 && <span>申请审核已通过。</span>}
              {rowInfo.verifyStatus === 3 && (
                <span>
                  {rowInfo.applyName} 于{' '}
                  {rowInfo.applyTime &&
                    moment(rowInfo.applyTime).format(
                      'YYYY-MM-DD HH:mm:ss',
                    )}{' '}
                  撤销本次授权。
                </span>
              )}
            </>
          }
          showIcon
        />
        <div className={styles.content}>
          <div className={styles.contentRow}>
            <span className="label">本次授权：</span>
            <div className="describe">{nameDoms}</div>
          </div>
          <div className={styles.contentRow}>
            <span className="label">认证环节遇到的问题：</span>
            <span className="describe">{rowInfo.remark}</span>
          </div>
          <div className={styles.contentRow}>
            <span className="label">法人手持身份证照片：</span>
            {rowInfo?.oneselfCert?.fileSrcUrl && (
              <div className="describe">
                <img
                  width="106px"
                  height="60px"
                  style={{ marginLeft: '8px' }}
                  src={rowInfo.oneselfCert.fileSrcUrl}
                  onMouseEnter={() =>
                    changeImageMark(
                      'fileUrlmark',
                      'hover',
                      rowInfo.oneselfCert.fileSrcUrl,
                    )
                  }
                  onMouseLeave={() =>
                    changeImageMark(
                      'fileUrlmark',
                      '',
                      rowInfo.oneselfCert.fileSrcUrl,
                    )
                  }
                />
              </div>
            )}
          </div>
          <div className={styles.contentRow}>
            <span className="label">企业授权承诺书：</span>
            {rowInfo.authorization?.fileSrcUrl && (
              <div className="describe">
                <FilePreviewItem
                  fileName={rowInfo.authorization.fileName}
                  fileSrcUrl={rowInfo.authorization.fileSrcUrl}
                  key={rowInfo.authorization.id}
                />
              </div>
            )}
          </div>
        </div>
      </Spin>

      <Modal
        visible={previewInfo.visible}
        footer={null}
        onCancel={() => setPreviewInfo({ ...previewInfo, visible: false })}
      >
        <img
          style={{ width: '100%', marginTop: '32px' }}
          src={previewInfo.src}
        />
      </Modal>
    </Drawer>
  );
};

export default FinanceAdminDraw;
