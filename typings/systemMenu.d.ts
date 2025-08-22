declare module systemMenuModel {

    export interface Meta {
        icon: string;
        title: string;
    }

    export interface Meta2 {
        icon: string;
        title: string;
    }

    export interface Child {
        id: string;
        parentId: string;
        name: string;
        component: string;
        key: string;
        code: string;
        meta: Meta2;
        children: any[];
    }

    export interface ResourceList {
        id: string;
        parentId: string;
        meta: Meta;
        children: Child[];
    }

    export interface Data {
        systemId: string;
        systemName: string;
        resourceList: ResourceList[];
    }

    export interface RootObject {
        code: number;
        message: string;
        data: Data;
    }

}

