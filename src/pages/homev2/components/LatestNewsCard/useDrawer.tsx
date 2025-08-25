import { useState } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  content: {
    marginTop: '20px',
  },
  contentRow: {
    display: 'flex',
    alignItems: 'flex-start',

    marginBottom: '20px',
    '& span.label': {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
    '& .describe': {
      flex: 1,
    },
  },
  avatar: (props: any) => {
    return {
      '&::before': {
        content: props?.name || '',
        display: 'inline-flex',
        width: '40px',
        height: '40px',
        backgroundColor: 'var( --lj-primary-color )',
        color: '#fff',

        marginRight: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        borderRadius: '4px',
      },
    };
  },
  tipAlert: {
    '& .ant-alert-icon': {
      alignSelf: 'flex-start',
      marginTop: '5px',
    },
  },
});
type DataInfoProps = {
  verifyStatus: number;
  changeEmployeeName: string;
  refuseRemark: string;
  description: string;
  oneselfCert: any;
  authorization: any;

  applyTime?: number;

  companyName?: string;
  employeeName?: string;
  createdDatetime?: number;
  modiDatetime?: number;
};
export const stateMap = (
  type: number,
): {
  color: string;
  text: string;
  alertType: 'success' | 'info' | 'warning' | 'error';
} => {
  switch (type) {
    case 0:
      return {
        color: 'var( --lj-primary-color )',
        text: '待接受',
        alertType: 'info',
      };
    case 1:
      return { color: '#f93a4a', text: '已拒绝', alertType: 'error' };
    case 2:
      return { color: '#00b578', text: '已同意', alertType: 'info' };
    case 3:
      return { color: '#aaa', text: '已撤销', alertType: 'warning' };
    case 4:
      return { color: '#ff6010', text: '已过期', alertType: 'warning' };
    default:
      return { color: '#aaa', text: '未定义状态', alertType: 'info' };
  }
};
export const useDrawer = () => {
  const [spinning, setSpinning] = useState(false);
  const [dataInfo, setDataInfo] = useState<DataInfoProps>({
    verifyStatus: -1,
    refuseRemark: '',
    changeEmployeeName: '',
    description: '',
    oneselfCert: {},
    authorization: {},
  });
  // 预览
  const [previewInfo, setPreviewInfo] = useState({
    visible: false,
    src: '',
  });
  // 改变图片marker
  const changeImageMark = (mode: string, type: string, fileUrl: string) => {
    if (mode === 'fileUrlmark' && type === 'hover') {
      setPreviewInfo({
        visible: true,
        src: fileUrl,
      });
    }
  };
  return {
    spinning,
    setSpinning,
    dataInfo,
    setDataInfo,
    previewInfo,
    setPreviewInfo,
    changeImageMark,
    useStyles,
    stateMap,
  };
};
