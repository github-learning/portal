import { getAdminApplyApi, putAdminApplyApi } from '@/service/home';
import type { ProFormInstance } from '@ant-design/pro-components';
import { Alert, message, Button, Drawer, Modal, Spin } from 'antd';
import { BetaSchemaForm } from '@ant-design/pro-components';
import classNames from 'classnames';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { useDrawer } from './useDrawer';
import { createUseStyles } from 'react-jss';
import { useClientAuthThing } from 'remote/shared';
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
    '&::before': {
      content: '1',
      color: '#fff',
    },
    '&.grey': {
      borderColor: '#aaa',
      '&::before': {
        color: '#aaa',
      },
    },
  },
  leftSecond: {
    '&::before': {
      content: '2',
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
      msg: {
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
const ReceiverDraw: React.FC<DrawProps> = ({
  id,
  onLoaded,
  visible,
  onVisibleChange,
}) => {
  const { spinning, setSpinning, dataInfo, setDataInfo, stateMap } =
    useDrawer();
  const [modalVisible, setModalVisible] = useState(false);
  const globalProps = useClientAuthThing();
  const formRef = useRef<ProFormInstance>();
  // css
  const styles = useStyles();

  const getAdminApply = () => {
    setSpinning(true);
    getAdminApplyApi(id)
      .then((res) => {
        setSpinning(false);
        if (res.code === 200) {
          setDataInfo(res.data ?? {});
          onLoaded?.();
        }
      })
      .catch(() => setSpinning(false));
  };
  const logout = () => {
    // 回到登录页
    globalProps?.logout?.();
  };

  // 倒计时modal
  const countDownModal = () => {
    let countDown = 3;
    let interVal: any = null;
    // 生成modal
    const modal = Modal.warning({
      content: `您已接受企业管理员，请重新登录`,
      title: '请重新登录',
      okText: '知道了（3）',
      cancelButtonProps: {
        disabled: true,
      },
      closable: false,
      maskClosable: false,

      onOk: () => {
        if (interVal) {
          clearInterval(interVal);
        }
        modal?.destroy();
        logout();
      },
    });

    // 倒计时3秒开始
    interVal = setInterval(() => {
      countDown -= 1;
      modal.update({
        okText: `知道了（${countDown}）`,
      });

      if (countDown <= 0) {
        if (interVal) {
          clearInterval(interVal);
        }
        modal?.destroy();
        logout();
      }
    }, 1000);
  };

  const ok = () => {
    putAdminApplyApi({
      ...dataInfo,
      id: id,
      verifyStatus: 2,
    }).then((res) => {
      if (res.code === 200) {
        countDownModal();
      }
    });
  };
  const cancelModal = () => {
    formRef.current?.resetFields();
    setModalVisible(false);
  };
  const refuse = (values: any) => {
    putAdminApplyApi({
      ...dataInfo,
      id: id,
      verifyStatus: 1,
      description: values.description,
    }).then((res) => {
      if (res.code === 200) {
        message.success('已拒绝');
        cancelModal();
        getAdminApply();
      }
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
            <Button
              onClick={() => setModalVisible(true)}
              style={{ marginRight: '10px' }}
            >
              拒绝
            </Button>
            <Button type="primary" onClick={ok}>
              接受
            </Button>
          </div>
        ) : (
          false
        )
      }
    >
      <Spin spinning={spinning}>
        <Alert
          className={styles.tipAlert}
          type={stateMap(dataInfo.verifyStatus)?.alertType}
          message={
            <>
              <div style={{ fontWeight: 'bolder' }}>成为企业管理员</div>
              <div style={{ color: '#444', marginTop: '6px' }}>
                {dataInfo.verifyStatus === 0 && (
                  <span>接受后，您的管理员身份将在重新登录后正式生效。</span>
                )}
                {dataInfo.verifyStatus === 1 && (
                  <span>
                    您已拒绝成为【{dataInfo.companyName}】的企业管理员。
                  </span>
                )}
                {dataInfo.verifyStatus === 2 && (
                  <span>您已是【{dataInfo.companyName}】的企业管理员。</span>
                )}
                {dataInfo.verifyStatus === 3 && (
                  <span>本次企业管理员更换申请已被撤销 </span>
                )}
                {dataInfo.verifyStatus === 4 && (
                  <span>7天内未接受，本次企业管理员更换申请已过期</span>
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
          企业管理员【{dataInfo.employeeName}】邀请您成为【
          {dataInfo.companyName}
          】的管理员。本次邀请7天内有效，请于
          <span style={{ color: 'var( --lj-primary-color )' }}>
            {dataInfo.createdDatetime &&
              moment(dataInfo.createdDatetime).format('YYYY-MM-DD')}
          </span>{' '}
          前处理
        </p>
        <div className={styles.stepsWrap}>
          <div
            className={classNames(styles.leftLine, {
              grey: [0, 3].includes(dataInfo.verifyStatus),
            })}
          />
          {/* <!-- 原员工 --> */}
          <div className={styles.steps}>
            <i className={styles.left} />
            <div className={styles.center}>
              <div className="staff1">
                <span>{dataInfo.employeeName}</span>
                {dataInfo.verifyStatus === 3 && (
                  <div
                    className="msg"
                    style={{ color: '#aaa', fontWeight: 500 }}
                  >
                    已撤销
                  </div>
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
              className={classNames(styles.left, styles.leftSecond, {
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
                  <div
                    className="msg"
                    style={{
                      fontWeight: 500,
                      color: stateMap(dataInfo.verifyStatus)?.color,
                    }}
                  >
                    {stateMap(dataInfo.verifyStatus)?.text}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.right}>
              {dataInfo.verifyStatus !== 0 && (
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
        </div>
      </Spin>
      <BetaSchemaForm
        visible={modalVisible}
        title="拒绝"
        formRef={formRef}
        onFinish={async (values) => {
          refuse(values);
        }}
        modalProps={{
          onCancel: () => cancelModal(),
        }}
        submitter={{
          render: (props: any) => (
            <div>
              <Button key="cancel" onClick={cancelModal}>
                取 消
              </Button>
              <Button
                key="send"
                type="primary"
                onClick={() => props.form?.submit?.()}
              >
                确定
              </Button>
            </div>
          ),
        }}
        layoutType="ModalForm"
        layout="vertical"
        columns={[
          {
            title: '拒绝原因：',
            dataIndex: 'description',
            valueType: 'textarea',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: `请输入拒绝原因`,
                },
              ],
            },
            colProps: {
              span: 24,
            },
            fieldProps: {
              maxLength: 100,
              showCount: true,
              rows: 6,
            },
          },
        ]}
      />
    </Drawer>
  );
};

export default ReceiverDraw;
