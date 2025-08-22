// 安全路由
export const getSafetyConfig = (id: string) => ({
  safety1010: {
    path: `/check/check/detail?id=${id}`,
  },
  safety1020: {
    path: `/check/rectify/detail?id=${id}`,
  },
  safety1030: {
    path: `/accidentReport/detail?id=${id}`,
  },
  safety1040: {
    path: `/managePlan/detail?id=${id}`,
  },
  safety1050: {
    path: `/targetManage/detail?id=${id}`,
  },
  safety1060: {
    path: `/fireApply/detail?id=${id}`,
  },
  safety1070: {
    path: `/symbol/detail?id=${id}`,
  },
  safety1080: {
    path: `/dangerousSource/detail?id=${id}`,
  },
  safety1090: {
    path: `/workDesign/detail?id=${id}`,
  },
  safety1100: {
    path: `/duty/detail?id=${id}`,
  },
  safety1110: {
    path: `/handOver/detail?id=${id}`,
  },
  safety1120: {
    path: `/educationRecord/detail?id=${id}`,
  },
  safety1150: {
    path: `/earlyWarning/warningConfig/detail?id=${id}`,
  },
  safety1160: {
    path: `/trace/qrcodeLibrary/detail?id=${id}`,
  },
  safety1180: {
    path: '/earlyWarning/preWarning',
  },
});
