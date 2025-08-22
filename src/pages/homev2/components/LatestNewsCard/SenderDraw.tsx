import { getAdminApplyApi, putAdminApplyApi } from '@/service/home';
import { Alert, Button, Drawer, message, Modal, Spin } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import { useEffect } from 'react';
import { useDrawer } from './useDrawer';
import { createUseStyles } from 'react-jss';
// css
const useStyles = createUseStyles({
  stepsWrap: {
    marginLeft: '30px',
    position: 'relative',
  },
  leftLine: {
    position: 'absolute',
    top: '18px',
    transform: 'translateX(5px)',
    height: 'calc(100% - 70px)',
    width: '1px',
    backgroundColor: 'var( --lj-primary-color )',
    '&.grey': {
      backgroundColor: '#aaa',
    },
  },
  steps: {
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    minWidth: '12px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid var( --lj-primary-color )',
    transform: 'translateY(50%)',
    '&.grey': {
      borderColor: '#aaa',
    },
  },

  staff: {
    height: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    height: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  center: {
    flex: 1,
    marginLeft: '10px',
    minWidth: '100px',

    '& .staff1': {
      fontWeight: 'bold',

      '&.grey': {
        color: '#aaa',
      },
    },
  },

  right: {
    textAlign: 'right',

    '& .rightInfo': {
      color: '#aaa',
      '& .msg': {
        textAlign: 'left',
      },
    },
  },
  tipAlert: {
    '& .ant-alert-icon': {
      alignSelf: 'flex-start',
      marginTop: '5px',
    },
  },
});
export type DrawProps = {
  id: string;
  visible: boolean;
  onVisibleChange: (bool: boolean) => void;
  onLoaded?: () => void;
};
const SenderDraw: React.FC<DrawProps> = ({
  id,
  visible,
  onVisibleChange,
  onLoaded,
}) => {
  const { spinning, setSpinning, dataInfo, setDataInfo, stateMap } =
    useDrawer();
  // css
  const styles = useStyles();

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
                    【{dataInfo.changeEmployeeName}
                    】接受后，您的管理员身份及管理员权限将被收回。
                  </span>
                )}
                {dataInfo.verifyStatus === 1 && (
                  <span>
                    【{dataInfo.changeEmployeeName}
                    】已拒绝成为企业管理员，拒绝原因：
                    {dataInfo.refuseRemark
                      ? dataInfo.refuseRemark
                      : dataInfo.description}
                    。
                  </span>
                )}
                {dataInfo.verifyStatus === 2 && (
                  <span>
                    【{dataInfo.changeEmployeeName}】已成为【
                    {dataInfo.companyName}】的企业管理员。
                  </span>
                )}
                {dataInfo.verifyStatus === 3 && (
                  <span>
                    您已撤销邀请【{dataInfo.changeEmployeeName}】成为【
                    {dataInfo.companyName}
                    】的企业管理员的申请。
                  </span>
                )}
                {dataInfo.verifyStatus === 4 && (
                  <span>
                    您邀请【{dataInfo.changeEmployeeName}】成为【
                    {dataInfo.companyName}
                    】的企业管理员的申请已过期。
                  </span>
                )}
              </div>
            </>
          }
          showIcon
        />
        <p
          style={{
            marginTop: '20px',
            marginBottom: '30px',
            fontWeight: 'bolder',
          }}
        >
          企业管理员【{dataInfo.employeeName}】邀请【
          {dataInfo.changeEmployeeName}】成为【
          {dataInfo.companyName}】的管理员。本次邀请7天内有效，请提醒【
          {dataInfo.changeEmployeeName}
          】于
          <span style={{ color: 'var( --lj-primary-color )' }}>
            {dataInfo.createdDatetime &&
              moment(dataInfo.createdDatetime).format('YYYY-MM-DD')}
          </span>{' '}
          前接任企业管理员
        </p>
        <div className={styles.stepsWrap}>
          {/* <!-- 原员工 --> */}
          <div className={styles.steps}>
            <i className={styles.left} />
            <div className={styles.center}>
              <div className={classNames(styles.staff, 'staff1')}>
                <span>{dataInfo.employeeName}</span>
                {dataInfo.verifyStatus === 3 && (
                  <span
                    className="msg"
                    style={{ color: '#aaa', fontWeight: 500 }}
                  >
                    已撤销
                  </span>
                )}
              </div>
            </div>
            <div className={styles.right}>
              <div className={classNames(styles.info, 'rightInfo')}>
                <span className="time">
                  {dataInfo.createdDatetime &&
                    moment(dataInfo.createdDatetime).format(
                      'YYYY-MM-DD HH:mm:ss',
                    )}
                </span>
                <span className="msg">申请更换管理员</span>
              </div>
            </div>
          </div>

          {/* <!-- 现员工 --> */}
          <div className={styles.steps} style={{ marginTop: '40px' }}>
            <i
              className={classNames(styles.left, {
                grey: [0, 3].includes(dataInfo.verifyStatus),
              })}
            />
            <div className={styles.center}>
              <div
                className={classNames(styles.staff, {
                  grey: [0, 3].includes(dataInfo.verifyStatus),
                })}
              >
                <span>{dataInfo.changeEmployeeName}</span>
                {/* <!-- !== 3 表示已撤销，该状态是在 原员工处写的 --> */}
                {dataInfo.verifyStatus !== 3 && (
                  <span
                    className="msg"
                    style={{
                      fontWeight: 500,
                      color: stateMap(dataInfo.verifyStatus)?.color,
                    }}
                  >
                    {stateMap(dataInfo.verifyStatus)?.text}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.right}>
              {[1, 3, 4].includes(dataInfo.verifyStatus) && (
                <div className={classNames(styles.info, 'rightInfo')}>
                  <span className="time">
                    {dataInfo.modiDatetime &&
                      moment(dataInfo.modiDatetime).format(
                        'YYYY-MM-DD HH:mm:ss',
                      )}
                  </span>
                  {[1, 4].includes(dataInfo.verifyStatus) && (
                    <span className="msg">{dataInfo.description}</span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            className={classNames(styles.leftLine, {
              grey: [0, 3].includes(dataInfo.verifyStatus),
            })}
          />
        </div>
      </Spin>
    </Drawer>
  );
};
export default SenderDraw;
