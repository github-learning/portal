// 质量路由
export const getQualityConfig = (id: string) => ({
  quality1070: {
    path: `/inspection/selfCheck/${id}/detail`,
  },
  quality1090: {
    // path: `/mutualCheck/detail?id=${e.id}`,
    path: `/inspection/mutualCheck/${id}/detail`,
  },
  quality1080: {
    path: `/inspection/specialCheck/${id}/detail`,
  },
  //工序样板管理
  quality1030: {
    path: `/plan/processSample/${id}/detail`,
  },
  // 质量行为奖惩
  quality1040: {
    path: `/reward/behaviorRewardPunish/${id}/detail`,
  },
  // 质量事故报告
  quality1050: {
    path: `/control/incidentReport/${id}/detail`,
  },
  // 通病防控
  quality1130: {
    path: `/plan/comprobPrevent/${id}/detail`,
  },
  // 责任制度
  quality1140: {
    path: `/plan/liabilitySystem/${id}/detail`,
  },
  // 验收标准
  quality1150: {
    path: `/plan/acceptanceCriteria/${id}/detail`,
  },
  // 材料进场
  quality2200: {
    path: `/access/materialApproach/${id}/detail`,
  },
  // 隐蔽管理
  quality2020: {
    path: `/control/hide/${id}/detail`,
  },
  // 施工测量
  quality2030: {
    path: `/control/measure/${id}/detail`,
  },
  // 实测实量
  quality2080: {
    path: `/control/realAspect/${id}/detail`,
  },
  // 检查检验记录
  quality2050: {
    path: `/control/inspectRecord/${id}/detail`,
  },
  // 砼砂浆统计评定
  quality2070: {
    path: `/control/evaluate/${id}/detail`,
  },
  // 试验记录
  quality2090: {
    path: `/control/testRecord/${id}/detail`,
  },
  // 设备系统测试调试
  quality2060: {
    path: `/control/equipmentTest/${id}/detail`,
  },
  // 检验批/工序验收
  quality3010: {
    path: `/evaluation/accept/${id}/detail`,
  },
  // 分项/单元工程验收
  quality3050: {
    path: `/evaluation/subentry/${id}/detail`,
  },
  // 子分部工程验收
  quality3060: {
    path: `/evaluation/subsegment/${id}/detail`,
  },
  // 分部工程验收
  quality3030: {
    path: `/evaluation/segment/${id}/detail`,
  },
  // 专项验收
  quality3040: {
    path: `/evaluation/special/${id}/detail`,
  },
  // 完工验收
  quality4070: {
    path: `/evaluation/projectCompleted/${id}/detail`,
  },
  // 竣工验收报告
  quality4040: {
    path: `/evaluation/completedReport/${id}/detail`,
  },
  // 质量保修书
  quality4020: {
    path: `/evaluation/guarantee/${id}/detail`,
  },
  // 单位工程竣工验收
  quality4050: {
    path: `/evaluation/unit/${id}/detail`,
  },
  // 竣工备案
  quality4030: {
    path: `/evaluation/completedRecord/${id}/detail`,
  },
  //预警记录
  quality7010: {
    path: `/warning/warningRecord`,
  },
});
