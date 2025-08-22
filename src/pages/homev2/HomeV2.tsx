import {
  CommonFunctionsCard,
  LatestNewsCard,
  NoticeAnnouncementCard,
  PendingApprovalCard,
  RiskWarningCard,
  TaskToDoCard,
} from './components';
import styles from './homeV2.module.less';
import './style.less';
const HomeV2 = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapLeft}>
        <CommonFunctionsCard />
        <PendingApprovalCard />
        <div className={styles.noticeWrap}>
          <NoticeAnnouncementCard />
          <LatestNewsCard />
        </div>
      </div>
      <div className={styles.homeWrapRight}>
        <RiskWarningCard />
        <TaskToDoCard />
      </div>
    </div>
  );
};

export default HomeV2;
