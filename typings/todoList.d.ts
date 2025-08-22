declare module todoListModel {
  export interface Variables {
    submitter: string;
    pt: string;
    dev01: string;
    applyCompanyId: any;
    revoke: boolean;
    submitCompanyId: string;
    startEmployeeName: string;
    15805052341: string;
    type?: number;
  }

  export interface Row {
    businessKey: string;
    businessCode: string;
    businessName: string;
    projectId: string;
    projectCode: string;
    projectName: string;
    id: string;
    processInstanceId: string;
    startTime: any;
    endTime: any;
    durationInMillis: number;
    name: string;
    assignee: string;
    userName: string;
    taskId: string;
    taskDefinitionKey: string;
    createTime: any;
    processName: string;
    startUserId: string;
    startUserName: string;
    createdDate: any;
    statusName: string;
    status: string;
    processStatus: string;
    variables: Variables;
  }

  export interface Data {
    total: number;
    rows: Row[];
  }

  export interface RootObject {
    code: number;
    message: string;
    data: Data;
  }
}
