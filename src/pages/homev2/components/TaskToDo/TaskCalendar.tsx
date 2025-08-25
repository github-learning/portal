import styles from './taskCalendar.module.less';
import { Calendar } from 'antd';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

export const TaskCalendar = ({
  time,
  setTime,
  dateMark,
  setDateMark,
}: {
  time: any;
  setTime: any;
  dateMark: any;
  setDateMark: any;
}) => {
  //时间变化
  const changeTime = (
    operateType: 'add' | 'subtract',
    type: 'month' | 'year',
  ) => {
    const _time = moment(time)[operateType](1, type);
    setTime(_time);
  };

  return (
    <ConfigProvider locale={locale}>
      <div className={styles.taskCalendar}>
        <Calendar
          value={time}
          fullscreen={false}
          dateCellRender={(date) => {
            const key = moment(date as any).format('YYYY-MM-DD');
            return dateMark?.find?.((item) => item.timeStr === key)?.color ==
              1 ? (
              <div className={styles.blueCircle} />
            ) : dateMark?.find?.((item) => item.timeStr === key)?.color == 2 ? (
              <div className={styles.greyCircle} />
            ) : null;
          }}
          headerRender={({ value }) => {
            return (
              <div className={styles.calendarOperate}>
                <div className={styles.calendarOperate__left}>
                  <DoubleLeftOutlined
                    onClick={() => changeTime('subtract', 'year')}
                  />
                  <LeftOutlined
                    className={styles.ml32}
                    onClick={() => changeTime('subtract', 'month')}
                  />
                </div>
                <div className={styles.calendarOperate__center}>
                  {moment(value as any).format('YYYY年MM月')}
                </div>
                <div className={styles.calendarOperate__right}>
                  <RightOutlined onClick={() => changeTime('add', 'month')} />
                  <DoubleRightOutlined
                    className={styles.ml32}
                    onClick={() => changeTime('add', 'year')}
                  />
                </div>
              </div>
            );
          }}
          onChange={setTime}
        />
      </div>
    </ConfigProvider>
  );
};
