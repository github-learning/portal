declare module queryAdModel {
  export interface Image {
    id: string;
    delFlag?: number;
    dataVersion?: number;
    createdId?: string;
    createdEmplId?: string;
    createdDatetime?: number;
    modiId?: string;
    modiEmplId?: string;
    modiDatetime?: number;
    busCode?: string;
    busId?: string;
    bucket?: string;
    objectName?: string;
    fileName?: string;
    fileSize?: string;
    fileType?: string;
    contentType?: string;
    pieceNum?: number;
    blockNum?: number;
    transactionHash?: any;
    txHash?: any;
    docId?: any;
    contentHash?: any;
    transactionId?: any;
    resource?: number;
    proofWay?: any;
    identifier?: string;
    fileSrcUrl: string;
    uploadId?: any;
  }

  export interface Datum {
    id: string;
    adThemeId: string;
    image: Image;
    title: string;
    linkType: number;
    linkAddress: string;
    orderNum: number;
  }

  export interface RootObject {
    code: number;
    message: string;
    data: Datum[];
    validErrors?: any;
  }
}
