import {
  CommonFunctionsCard,
  LatestNewsCard,
  NoticeAnnouncementCard,
  RiskWarningCard,
  TaskToDoCard,
  UnifiedCard,
  cardConfigs,
  MyScheduleCard,
} from './components';
import styles from './homeV2.module.less';
import './style.less';

const HomeV2 = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapLeft}>
        <CommonFunctionsCard />
        <div className={styles.cardsGrid}>
          <UnifiedCard {...cardConfigs.approval} />
          <UnifiedCard {...cardConfigs.business} />
          <UnifiedCard {...cardConfigs.warning} />
          <UnifiedCard {...cardConfigs.message} />
        </div>
        {/* <div className={styles.noticeWrap}> */}
        {/* <NoticeAnnouncementCard /> */}
        {/* <LatestNewsCard /> */}
        {/* </div> */}
      </div>

      {/* 右侧界面 */}
      <div className={styles.homeWrapRight}>
        <NoticeAnnouncementCard />
        <MyScheduleCard />
      </div>
    </div>
  // 213
  );
};

export default HomeV2;
