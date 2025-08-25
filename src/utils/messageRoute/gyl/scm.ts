export const getScmConfig = (data: { id: string; variables: { type?: number } } | any) => ({
  scm1010: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supplier/supplierInquiry/detail?id=${data.id}`;
      }
      return `/purchaser/inquiry/detail?id=${data.id}`;
    },
    systemId: '182590770363007005',
  },
  scm1020: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supplier/quotation/detail?id=${data.id}`;
      }
      return `/purchaser/purchaserQuotation/detail?id=${data.id}`;
    },
    systemId: '182590770363007005',
  },
  scm1030: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supplier/subver/detail?id=${data.id}`;
      }
      return `/purchaser/pubver/detail?id=${data.id}`;
    },
    systemId: '182590770363007005',
  },
  scm1040: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supContract/contract/detail?id=${data.id}`;
      }
      return `/purContract/contract/detail?id=${data.id}`;
    },
    systemId: '182590974562697223',
  },
  scm1050: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supContract/cusAgreeTable/detail?id=${data.id}`;
      }
      return `/purContract/agreeTable/detail?id=${data.id}`;
    },
    systemId: '182590974562697223',
  },
  scm1060: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supOrder/orderTable/detail?id=${data.id}`;
      }
      return `/purOrder/orderTable/detail?id=${data.id}`;
    },
    systemId: '182591202514731045',
  },
  scm1070: {
    path: () => {
      if (data?.variables?.type === 2) {
        return `/supOrder/orderChange/detail?id=${data.id}`;
      }
      return `/purOrder/orderChange/detail?id=${data.id}`;
    },
    systemId: '182591202514731045',
  },
});
