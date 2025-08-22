declare module topNoticeModel {
  export interface Datum {
    appPath: string;
    categoryId: number;
    categoryName: string;
    code: string;
    content: string;
    createdDatetime: number;
    haveRead: boolean;
    id: number;
    istop: number;
    path: string;
    publishDatetime: number;
    readNum: number;
    status: number;
    summary: string;
    title: string;
  }
}
