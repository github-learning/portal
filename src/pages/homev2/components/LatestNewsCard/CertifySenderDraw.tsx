import { getAdminApplyApi, putAdminApplyApi } from '@/service/home';
import { FilePreviewItem } from '@core/rc-components';
import { Alert, Drawer, Modal, Button, message, Spin } from 'antd';
import { useEffect } from 'react';
import { useDrawer } from './useDrawer';

export type CertifySenderDrawProps = {
  id: string;
  visible: boolean;
  onVisibleChange: (bool: boolean) => void;
  onLoaded?: () => void;
};
const CertifySenderDraw: React.FC<CertifySenderDrawProps> = ({
  id,
  onLoaded,
  visible,
  onVisibleChange,
}) => {
  const {
    spinning,
    setSpinning,
    dataInfo,
    setDataInfo,
    previewInfo,
    setPreviewInfo,
    changeImageMark,
    useStyles,
    stateMap,
  } = useDrawer();
  // css
  const styles = useStyles({
    name: dataInfo.changeEmployeeName
      ? dataInfo.changeEmployeeName.slice(-2)
      : '',
  });

  const getAdminApply = () => {
    setSpinning(true);
    getAdminApplyApi(id)
      .then((res) => {
        setSpinning(false);
        if (res.code === 200) {
          setDataInfo(res.data ?? {});
        }
      })
      .catch(() => setSpinning(false));
  };
  const revoke = () => {
    Modal.confirm({
      content: `确认撤销更换【${dataInfo.changeEmployeeName}】成为企业管理员`,
      title: '确认撤销',
      closable: false,
      onOk: () => {
        // 撤销的状态是3
        putAdminApplyApi({
          ...dataInfo,
          id: id,
          verifyStatus: 3,
        }).then((res) => {
          if (res.code === 200) {
            message.success('已撤销');
            getAdminApply();
            onLoaded?.();
          }
        });
      },
    });
  };
  useEffect(() => {
    if (visible) {
      getAdminApply();
    }
  }, [visible]);
  return (
    <Drawer
      title="更换管理员"
      width={500}
      visible={visible}
      onClose={() => onVisibleChange(false)}
      footer={
        dataInfo.verifyStatus === 0 ? (
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
          type={stateMap(dataInfo.verifyStatus)?.alertType}
          className={styles.tipAlert}
          message={
            <>
              <div style={{ fontWeight: 'bolder' }}>更换企业管理员</div>
              <div style={{ color: '#444', marginTop: '6px' }}>
                {dataInfo.verifyStatus === 0 && (
                  <span>
                    授权【{dataInfo.changeEmployeeName}
                    成为新的企业管理员的申请正在审核中。
                  </span>
                )}
                {dataInfo.verifyStatus === 1 && (
                  <span>
                    授权【{dataInfo.changeEmployeeName}
                    】成为新的企业管理员的申请审核不通过。
                    {dataInfo.refuseRemark
                      ? dataInfo.refuseRemark
                      : dataInfo.description}
                  </span>
                )}
                {dataInfo.verifyStatus === 2 && (
                  <span>
                    授权【{dataInfo.changeEmployeeName}
                    】成为企业管理员的申请已审核通过。
                  </span>
                )}
                {dataInfo.verifyStatus === 3 && (
                  <span>
                    授权【{dataInfo.changeEmployeeName}
                    】成为企业管理员的申请已撤销。
                  </span>
                )}
              </div>
            </>
          }
          showIcon
        />
        <div className={styles.content}>
          <div className={styles.contentRow}>
            <span className="label">本次授权：</span>
            <div className="describe">{dataInfo.changeEmployeeName}</div>
          </div>
          <div className={styles.contentRow}>
            <span className="label">认证环节遇到的问题：</span>
            <span className="describe">{dataInfo.description}</span>
          </div>
          <div className={styles.contentRow}>
            <span className="label">法人手持身份证照片：</span>
            {dataInfo?.oneselfCert?.fileSrcUrl && (
              <div className="describe">
                <img
                  width="106px"
                  height="60px"
                  style={{ marginLeft: '8px' }}
                  src={dataInfo.oneselfCert.fileSrcUrl}
                  onMouseEnter={() =>
                    changeImageMark(
                      'fileUrlmark',
                      'hover',
                      dataInfo.oneselfCert.fileSrcUrl,
                    )
                  }
                  onMouseLeave={() =>
                    changeImageMark(
                      'fileUrlmark',
                      '',
                      dataInfo.oneselfCert.fileSrcUrl,
                    )
                  }
                />
              </div>
            )}
          </div>
          <div className={styles.contentRow}>
            <span className="label">企业授权承诺书：</span>

            {dataInfo.authorization?.fileSrcUrl && (
              <div className="describe">
                <FilePreviewItem
                  fileName={dataInfo.authorization.fileName}
                  fileSrcUrl={dataInfo.authorization.fileSrcUrl}
                  key={dataInfo.authorization.id}
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

export default CertifySenderDraw;
