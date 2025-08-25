declare module leftPortalModel {
  export interface MenuItem {
    id: string;
    pageId: string;
    menuType: number;
    systemId: string;
    systemName: string;
    resourceId: string;
    resourceName: string;
    sort: number;
    alias: string;
    remark: string;
    systemBucket: string;
    resourceBucket: string;
    systemPcPath?: string;
    resourcePcPath?: string;
    icon?: string;
    title?: string;
  }

  export interface SystemItem {
    id: string;
    pageId: string;
    systemType: number;
    systemId: string;
    systemName: string;
    resourceId: string;
    resourceName: string;
    alias: string;
    remark: string;
    sort: number;
    systemBucket: string;
    resourceBucket: string;
    systemPcPath?: string;
    resourcePcPath?: string;
    icon?: string;
    title?: string;
  }
  export interface Item {
    id: string;
    pageId?: string;
    systemType?: number;
    systemId?: string;
    systemName?: string;
    resourceId?: string;
    resourceName?: string;
    alias?: string;
    remark?: string;
    sort?: number;
    systemBucket?: string;
    resourceBucket: string;
    systemPcPath?: string;
    resourcePcPath?: string;
    menuType?: number;
    icon?: string;
    title?: string;
  }

  export interface Data {
    id: string;
    modiId: string;
    modiEmplId: string;
    modiEmplName: string;
    modiName: string;

    modiDatetime: number;
    sourcePlatform: number;
    takeEffectDatetime: string;
    loseEffectDatetime: string;
    status: number;
    menuItems: MenuItem[];
    systemItems: SystemItem[];
  }

  export interface RootObject {
    code: number;
    message: string;
    data: Data;
  }
}
