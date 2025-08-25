/// <reference types="react" /> 
        declare module "remote/shared" {
           /// <reference types="react" />

import { AnchorHTMLAttributes } from 'react';
import { BaseButtonProps } from 'antd/lib/button/button';
import { ButtonHTMLAttributes } from 'react';
import { CardProps } from 'antd/lib/card';
import { default as default_2 } from 'rc-table/lib/Footer/Summary';
import { Dispatch } from 'react';
import { EffectCallback } from 'react';
import { FC } from 'react';
import { FilePreviewItem } from '@core/rc-components';
import { FormSchema } from '@ant-design/pro-form/es/components/SchemaForm';
import { FreeTable } from '@core/rc-components';
import { freeTablePagination } from '@core/rc-components';
import { FreeTableProps } from '@core/rc-components';
import { ImageProps } from 'antd';
import { InputProps } from 'antd';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LubanAiFixed } from '@core/rc-components';
import { ModalProps } from 'antd';
import { MouseEventHandler } from 'react';
import { PageHeaderProps } from 'antd';
import { PaginationProps } from 'antd';
import { ParseUrl2Svg } from '@core/rc-components';
import type { ProCardProps } from '@ant-design/pro-components';
import type { ProColumnType } from '@ant-design/pro-components';
import { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { ProDescriptionsProps } from '@ant-design/pro-descriptions';
import { ProFormProps } from '@ant-design/pro-form';
import type { ProListProps } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { request } from '@core/rc-components';
import { ResizableProps as ResizableProps_2 } from 're-resizable';
import { RouteObject } from 'react-router-dom';
import { SetStateAction } from 'react';
import { Size } from 're-resizable';
import { SpinProps } from 'antd';
import { TableRowSelection } from 'antd/lib/table/interface';
import { TableTitleRequired } from '@core/rc-components';
import { TreeProps } from 'antd';
import { unstable_Blocker } from 'react-router-dom';
import { unstable_BlockerFunction } from 'react-router-dom';
import { useSharedGlobalState } from '@core/rc-components/es/hooks/useSharedGlobal';
import { default as videojs_2 } from 'video.js';

/**
 * 请求授权服务器获取token
 * @param code
 */
export declare function accestokenByCode(params?: any, config?: Record<string, any>): Promise<void>;

export declare const AddCompanyDrawer: React_2.FC<TAddCompanyDrawerProps>;

export declare const Agency: ({ title, extra, columns, dataSource, onChange, tabs, onClick, }: AgencyProps) => JSX_2.Element;

export declare interface AgencyProps {
    /** 卡片标题 */
    title?: string;
    /** 右上角自定义区域 */
    extra?: React_2.ReactNode;
    columns?: ProDescriptionsItemProps<Record<string, any>, 'text'>[];
    dataSource?: {
        id?: string;
        title?: string;
        link?: string;
    }[] & Record<string, any>[];
    /** tab 切换的事件 */
    onChange?: (activeKey: string) => void;
    tabs?: {
        badge?: number;
        key?: string;
        title?: string;
    }[];
    /** 点击代办每一项的事件 */
    onClick?: () => void;
}

export declare const apiConfig: {
    baseUrl: string;
    apiUims: string;
    apiMessage: string;
    apiOss: string;
    apiAntUims: string;
    activiti: string;
    apiSystem: string;
    apiLabor: string;
    apiActiviti: string;
    blockchainContracting: string;
    apiProjectSystem: string;
    apiContract: string;
    pathSystemId: string;
    apiFee: string;
    apiDesign: string;
    apiMinio: string;
    apiConstruction: string;
    apiQuality: string;
    apiEsign: string;
    access_token: string;
    refresh_token: string;
    expires_in: string;
    token_expires_time: string;
    user_info: string;
    user_name: string;
    apiIot: string;
    apiCms: string;
    apiScm: string;
    apiWarning: string;
    apiBg: string;
    apiBuilding: string;
    apiPurchaseSystem: string;
    apiBim: string;
    apiWorkreport: string;
    apiProjectAnalysis: string;
    apiLog: string;
    apiAuth: string;
    apiFinance: string;
    apiCrm: string;
    apiSettle: string;
    apiLogistic: string;
    apiPsi: string;
    apiPsiSettle: string;
    apiPay: string;
    apiPsiLogistic: string;
    apiOpenPlatform: string;
    apiCommonCenter: string;
    apiConstructionLog: string;
    apiExam: string;
    apiCourse: string;
    apiTask: string;
    apiKms: string;
    apiMall: string;
    apiSupervision: string;
    apiCheck: string;
    apiSupervisionProject: string;
    apiPayment: string;
    lowerPlatform: string;
};

export declare const App: (props: AppProps) => JSX_2.Element;

export declare type AppProps = {
    routes: RouteType;
    authLoginType: AuthLoginType;
    websocketParams?: WsProviderProps;
    mode?: string;
    system?: string;
    documentTitlePrefix?: string;
    children?: React_2.ReactNode;
    isMenuUrlAddSystemName?: boolean;
    antdConfigProvider?: any;
};

declare class Auth {
    data: {
        authUrl: string;
        mode: string;
        authLoginType: string;
        pathname: string;
    };
    init(params: Params): Promise<any>;
    logout(e?: any, s?: any, msg?: any, userId?: any): void;
    initUserInfo(params: Params): Promise<any>;
    authlogin(params: Params): Promise<any>;
    deleteToken(e?: any, s?: any, msg?: any, uId?: any): void;
}

export declare const auth: Auth;

export declare type AuthLoginType = 'KXGC' | 'LABOR' | 'OSS' | 'GOV' | 'SCM' | 'PSI' | 'GROUP' | 'COMPANY';

declare type AuthLoginType_2 =
| 'KXGC'
| 'LABOR'
| 'OSS'
| 'GOV'
| 'SCM'
| 'PSI'
| 'GROUP'
| 'COMPANY';

export declare const Backlog: React_2.FC<Partial<BacklogProps & Record<string, any>>>;

export declare type BacklogProps = {
    module?: any;
    tag?: any;
    acquiredetails?: (params: any, path?: string) => void;
    project?: boolean;
    columns?: any;
    projectColumns?: any;
    isJoinBasePath?: boolean;
    customParams?: {
        oaMode?: boolean;
        returnJumpResponseAll?: boolean;
    } & Record<string, any>;
    renderBusinessCode?: (record?: any) => React_2.ReactNode;
};

export declare const BASE_RANGE: {
    MIN: number;
    MAX: number;
};

export declare const BaseDetailInfo: React_2.FC<BaseDetailInfoModelProps>;

export declare interface BaseDetailInfoModelProps extends React_2.HTMLAttributes<HTMLDivElement> {
    title?: string;
    infoConfig: infoConfigProps;
    rowInfo: any;
    extra?: React_2.ReactNode;
    /**
     * @description ProDescription上方的插槽
     */
    above?: React_2.ReactNode;
    /**
     * @description ProDescriptions的参数
     */
    extend?: ProDescriptionsProps;
    /**
     * @description 主题色：'dark' | 'light' ,默认light
     */
    theme?: 'dark' | 'light' | string;
    emptyText?: string;
    cardProps?: CardProps;
    dictCodeRequest?: (code: string | {
        types: string[];
    }) => Promise<any>;
    downloadRequest?: () => Promise<any>;
}

export declare const BaseModal: React_2.FC<BaseModalProps>;

export declare interface BaseModalProps extends ModalProps {
    onOk?: () => void;
    footerLeft?: React_2.ReactNode;
    footerRight?: (_config: {
        defaultDoms?: Record<string, React_2.ReactNode>;
        onCancel?: (e: React_2.MouseEvent<HTMLElement>) => void;
        onOk?: () => void;
    }) => React_2.ReactNode;
}

export declare const BasicLayout: ({ canChangeCompany, headerTabs, }: {
    canChangeCompany?: boolean | undefined;
    headerTabs?: {
        label: string;
        path: string;
    }[] | undefined;
}) => JSX_2.Element;

export declare const BasicLayoutChildren: ({ sider, canChangeCompany, headerTabs, children, isShowHelpWebModule, layout, contentStyle, isBodySrcoll, }: {
    sider?: boolean | undefined;
    canChangeCompany?: boolean | undefined;
    headerTabs?: {
        label: string;
        path: string;
    }[] | undefined;
    children: React_2.ReactNode;
    isShowHelpWebModule?: boolean | undefined;
    layout?: "head" | "full" | "sider" | undefined;
    contentStyle?: React_2.CSSProperties | undefined;
    isBodySrcoll?: boolean | undefined;
}) => JSX_2.Element;

export declare type BimActionType<T = {}> = {
    /** @name 自动旋转 */
    onStartAutoRotate?: (speed: number) => void;
    /** @name 停止旋转旋转 */
    onStopAutoRotate?: () => void;
    /** @name 定位 */
    onZoomTo?: (elementId: string[]) => void;
    /** @name 根据 id 着色 */
    onColorTo?: (elementId: string[], color?: string) => void;
    /** @name 根据条件定位着色 */
    onOverrideComponentsColorByObjectData?: (conditions: ConditionsType[], color: string, boundingBox?: BoundingBoxType) => void;
    /** @name 清除着色 */
    onClearColors?: () => void;
    /** @name 清除闪烁 */
    onClearBlink?: () => void;
    /** @name 闪烁
     *  @elementId 构件 ID
     *  @color 闪烁颜色
     *  @time 闪烁时间（时间戳）
     */
    onBlink?: (elementId: string[], time: number, color?: string) => void;
    /** @name 单模型根据构件筛选条件，获取构件列表
     *  @conditions 构件筛选条件
     */
    onGetComponentsByConditions?: (conditions: ConditionsType[]) => Promise<any>;
    /** @name 获取构件属性
     *  @id 构件 id
     */
    onGetComponentProperty?: (id: string, { cid, type }: {
        cid: string;
        type: string;
    }) => Promise<any>;
    /** @name 根据 ID 隔离构件，进度使用
     *  @ids 集成文件的ID
     *  @idsExample fileId.ElementId: 4a9a86ef19c948ba847b3647246bd141.9812604
     *  @type 其他构建的状态 translucent 透明，hide 隐藏
     */
    onIsolateComponentsById?: (ids: string[], type: 'translucent' | 'hide') => void;
    /** @name 根据条件隔离构件，进度使用
     *  @conditions 构件筛选条件
     *  @type 其他构建的状态 translucent 透明，hide 隐藏
     */
    onIsolateComponentsByObjectData?: (conditions: ConditionsType[], type: 'translucent' | 'hide') => void;
    onGetBoundingBoxById?: (id: any) => Record<string, any>;
    /** @name 自定义标签 */
    onCustomTags?: (customTags?: CustomTagsType[]) => void;
    /** @name 隐藏全部构件 */
    onHideAllComponents?: () => void;
    /** @name 显示模型全部构件 */
    onShowAllComponents?: () => void;
    /** @name 根据筛选条件显示构件 */
    onShowComponentsByObjectData?: (conditions: ConditionsType[]) => void;
} & T;

export declare const Bimface: React_2.FC<BimFaceProps>;

export declare type BimFaceEventProps = {
    /** @name 点击某个部件的回调
     *  @a 点击的部件信息
     *  @b 相机位置信息
     */
    onMouseClick?: (a: RecordOrUndefined, b: RecordOrUndefined) => void;
    /** @name 右键点击某个部件的回调
     *  @a 构件属性
     *  @b 楼层信息
     *  @c 最近点击轴的信息
     */
    onMouseRightClick?: (a: RecordOrUndefined, b: RecordOrUndefined, c?: any) => void;
    /** @name 点击树节点的回调
     *  @a 节点信息
     */
    onTreeNodeClick?: (a: RecordOrUndefined) => void;
    /** @name 加载完成回调
     */
    onReady?: () => void;
};

export declare const BimfaceGis: React_2.FC<BimfaceGisProps>;

export declare interface BimfaceGisProps {
    style?: React_2.CSSProperties;
    /** 加载 Bim 的 viewToken */
    viewToken: string;
    /** gis 经纬度 */
    modelPosition: [number, number];
    /** 天地图影像底图地址 */
    mapConfig?: Record<string, any>;
}

export declare interface BimFaceProps extends BimFaceEventProps {
    style?: React_2.CSSProperties;
    /** @name 加载 Bim 的 viewToken */
    viewToken: string;
    actionRef?: React_2.Ref<BimActionType | undefined>;
    toolbars?: string[];
}

export declare const BimfaceScene: React_2.FC<BimfaceSceneProps>;

export declare type BimfaceSceneActionType = {
    /** @name 获取发布场景参数 */
    getPublishData?: () => Record<string, any>;
};

export declare interface BimfaceSceneProps {
    style?: React_2.CSSProperties;
    /** 加载 Bim 的 viewToken */
    viewToken: string;
    /**
     * @name getResourceListHandler 获取
     * @example [
     {
     // 文件ID
     id: '10000007070001',
     // 文件名称
     name: 'Bimface示例模型-1.rvt',
     // 是否为文件夹
     isFolder: false,
     },
     {
     id: '10000007070002',
     name: '文件夹-1',
     isFolder: true,
     },
     ]
     */
    getResourceListHandler?: (config: {
        searchKeyword: string;
        type: 'file' | 'integrate';
        parentId: string;
    }) => Promise<any[]>;
    getViewTokenHandler?: (list: any[]) => Promise<{
        id: string;
        name: string;
        viewToken: string;
    }[]>;
    actionRef?: React_2.Ref<BimfaceSceneActionType | undefined>;
}

export declare type BoundingBoxType = {
    max: {
        x: number;
        y: number;
        z: number;
    };
    min: {
        x: number;
        y: number;
        z: number;
    };
};

/**
 * 关闭浏览器窗口
 */
export declare function closeWindow(type?: any): Promise<void>;

export declare type ConditionsType = {
    categoryId?: string;
    levelName?: string;
    specialty?: string;
    family?: string;
    familyType?: string;
};

export declare const constant: {
    access_token: string;
    refresh_token: string;
    expires_in: string;
    token_expires_time: string;
    user_info: string;
    user_name: string;
    sessionId: string;
};

export declare const createDownload: (hrefOrBlob: string | Blob, filename?: string) => void;

export declare type CustomTagsType = {
    /** @name 标签的位置 */
    boundingBox: BoundingBoxType;
    /** @name 标签的配置 */
    tagConfig: {
        onClick: (props: Record<string, any>) => void;
        content: string;
        props: Record<string, any>;
    };
};

export declare const dedupeArrayObject: (arr: any[], path: string) => any[];

export declare function deleteToken(e?: number, s?: any, msg?: any, uId?: any): Promise<void>;

/**
 * 删除Token
 */
export declare function delToken(e?: any): Promise<void>;

export declare const DocumentTitle: ({}: DocumentTitleProps) => JSX_2.Element;

export declare interface DocumentTitleProps {
}

/**
 * KXGC : 可信工程
 * LABOR : 劳务
 * OSS : OSS
 * GOV : 政府
 * SCM : 供应链
 * PSI : 内部供应链
 */
export declare const ENV: {
    readonly KXGC: "KXGC";
    readonly LABOR: "LABOR";
    readonly OSS: "OSS";
    readonly GOV: "GOV";
    readonly SCM: "SCM";
    readonly PSI: "PSI";
    readonly GROUP: "GROUP";
    readonly COMPANY: "COMPANY";
    readonly BANK: "BANK";
};

export declare const equalDynamicUrl: (url: string, targetUrl: string) => string | undefined;

export declare const ErrorBoundary: ({ children }: {
    children: any;
}) => JSX_2.Element;

export declare const ErrorPage: React_2.FC;

export declare const fetchEnv: (mode?: string, authLoginType?: string) => Promise<unknown>;

export declare const fetchGlobalMsg: (systemId: string) => Promise<{
    resourceList: never[];
    systemId: string;
    userinfoFromApiAll: null;
    systemName: string;
    permissionList: never[];
    userInfoFromSession: null;
    iconPath: string;
}>;

export { FilePreviewItem }

export declare const flattenChildren: (arr?: any[], flattenKey?: string) => any;

export declare const flattenObject: (v: any[] | Record<string, any>, p?: string) => Record<string, any>;

export declare const FormErrorText: (props: any) => JSX_2.Element;

export declare const FreeAnchorLayout: ({ children, style, className }: TFreeAnchorLayoutProps) => JSX_2.Element;

export declare const FreeEmptyImage: React_2.FC<FreeEmptyImageProps>;

declare type FreeEmptyImageProps = {
    message?: string | React_2.ReactNode;
    imageProps: ImageProps;
};

export declare const FreeModal: React_2.FC<FreeModalProps>;

export declare const FreeModalForm: React_2.FC<FreeModalFormProps>;

export declare type FreeModalFormProps = ModalProps & {
    /** BetaSchemaForm 的类型 */
    formProps: SchemaFormProps;
    onOk?: () => void;
    onCancelClear?: boolean;
};

export declare type FreeModalProps = Omit<BaseModalProps, 'onOk'> & {
    tableProps: FreeTableProps & {
        /**
         * selectType 为 radio 时左下角选择的 name
         */
        rowName?: string;
        rowSelection?: Omit<TableRowSelection<Record<string, any>>, 'selectedRowKeys'> & {
            selectedRowKeys?: Record<string, any>;
        };
    };
    treeProps?: TreeProps;
    onOk?: (selectRows: Record<string, any>[]) => void;
    selectType?: 'radio' | 'checkbox';
    footerRight?: (_config: {
        defaultDoms: Record<string, React_2.ReactNode>;
        onCancel?: (e?: React_2.MouseEvent<HTMLElement>) => void;
        onOk?: () => void;
    }) => React_2.ReactNode;
};

export declare const FreeProForm: (props: FreeProFormProps) => JSX_2.Element;

export declare type FreeProFormProps = ProFormProps & {
    /** onOk
     *  onFinish 成功后执行 code === 200
     */
    onOk?: () => void;
    /** onError
     * 需要自定义错误时使用返回后端的错误校验
     * */
    onError?: ({ errors, }: {
        errors: {
            field: string;
            message: string;
        }[];
    }) => void;
    children?: React_2.ReactNode | React_2.ReactNode[];
};

export { FreeTable }

export declare const FreeTableList: <T extends Mode>(props: FreeTableListProps<T>) => JSX_2.Element;

export declare type FreeTableListProps<T> = ProTableProps<Record<string, any>, Record<string, any>, 'text'>
/**
* @description 统一使用columns二次处理
*/
& Omit<ProListProps, 'metas' | 'renderItem'> & {
    /**
     * @description 是否显示序号列
     */
    serial?: boolean | ProColumnType;
    /**
     * @description mode为'both' | 'card'时 renderItem 必填
     */
    mode?: T;
} & Partial<RenderItem> & (T extends 'both' | 'card' ? RenderItem : {});

export { freeTablePagination }

export { FreeTableProps }

export declare const FreeTreeTable: React_2.FC<FreeTreeTableProps>;

export declare type FreeTreeTableProps = {
    tree?: {
        width?: string;
        treeApi: (params?: any) => Promise<{
            rows: any;
            total?: number;
        } | any>;
        pagination?: PaginationProps | false;
        searchProps?: Omit<InputProps, 'onSearch'>;
        treeProps?: TreeProps;
        searchKey?: string;
        searchTableKey?: string;
    };
    tableProps: FreeTableProps | false;
    renderLeft: () => React_2.ReactNode;
    /**
     * @description 不渲染默认的table，需要同步设置 tableProps = false
     */
    renderRight: (tableDom?: React_2.ReactNode) => React_2.ReactNode;
    /**
     * @description equalMin： height取最小默认高度（仅在内部出现滚动条，及固定高度），默认只设最小高度
     */
    heightSet?: {
        minHeight?: string;
        height: string | 'equalMin';
    };
};

export declare const getApiUrl: (authLoginType?: string) => string;

export declare const getAse: () => string;

export declare const getBMapKey: () => string;

/**
 * 获取待办任务类型的内容
 * @param businessCode 任务编码code
 * @param render 重写dom
 * @returns
 */
export declare const getBusinessCodeTag: (businessCode: string, type?: any, render?: ((defaultRender: React_2.ReactNode, tagName: any) => React_2.ReactNode) | undefined) => string | number | boolean | JSX_2.Element | Iterable<React_2.ReactNode> | null | undefined;

/**
 * 判断当前页面是否是oa模式
 * @returns
 */
export declare const getCurrentOaMode: () => boolean;

/**
 * 在没有登录情况下需要传入 mode,authLoginType
 * @param key
 * @param mode
 * @param authLoginType
 * @returns
 */
export declare const getEnvKey: (key: string, mode?: string, authLoginType?: string) => Promise<any>;

export declare const getEnvMAP: () => any;

export declare const getMenuBusinessCodes: (list: menuBusinessCodeType[], codes: Record<string, string>) => void;

export declare const getOrigins: () => {
    dev: any;
    test: any;
};

/**
 * 获取跳转url总入口
 * @param row
 * @param customProps
 * @returns
 */
export declare const getPathNameByRow: (row?: any, customProps?: Record<string, any>, ...other: any[]) => any;

export declare const getPopupContainer: (node?: HTMLElement | undefined) => HTMLElement;

export declare const getPsiIconNameByBusCode: (businessCode: string, type?: number) => string;

export declare const getPsiToPathName: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;

export declare const getScmIconNameByBusCode: (businessCode: string) => string;

export declare const getScmToPathBase: () => {
    scmUrlBasic: string;
    scmUrlContract: string;
    scmUrlSettle: string;
    scmUrlOrder: string;
    scmUrlBill: string;
    scmUrlInvoice: string;
    scmUrlPnm2: string;
    scmBasic: string;
};

export declare const getScmToPathName: (t?: Partial<Row>, base?: Record<string, any>) => any;

/**
 * 获取系统id
 * @param sysName
 */
export declare const getSystemId: (sysName: string) => any;

/**
 * 根据域名判断
 */
export declare function getSystemName(authLoginType?: string): {
    enName: string | undefined;
    cnName: any;
};

export declare const getSystemNameMap: () => any;

export declare const HeaderLayout: ({ canChangeCompany, headerTabs, hasBase }: {
    canChangeCompany?: boolean | undefined;
    headerTabs?: {
        label: string;
        path: string;
    }[] | undefined;
    hasBase?: boolean | undefined;
}) => JSX_2.Element;

export declare const ImageVideoGroup: React.FC<ImageVideoGroupProps>;

export declare type ImageVideoGroupProps = {
    fieldNames?: {
        contentType?: string;
        thumbnailSrcUrl?: string;
        fileSrcUrl?: string;
        id?: string;
        fileName?: string;
    };
    fileList: {
        /**
         * 缩略图
         */
        thumbnailSrcUrl: string;
        fileSrcUrl: string;
        contentType: string;
        id: string;
        fileName: string;
    }[];
};

export declare type infoConfigProps = {
    /**
     * @description 字典code查询
     * @param dictCodes =》 举例： { typeName: 'dict-list', 'bank,account': 'dict-bank' },
     * typeName代表要翻译的字段， 'dict-list' 代表查询字典数据的code,
     * 备注：'bank,account' 来至dataIndex的join(',')
     * data中dictCode的优先级高于dictCodes
     */
    dictCodes?: Record<string, string>;
    data: {
        label?: React_2.ReactNode;
        labelFormat?: (row: any) => React_2.ReactNode;
        key?: string;
        /**
         * @description dataIndex优先级高于key，可以定义字段数组， 假设获取rowInfo.bank.account, 可以写成['bank', 'account']
         */
        dataIndex?: string | string[];
        type?: 'date' | 'file' | 'image' | 'dict' | 'money' | 'html' | string;
        /**
         * @description type == money 大写金额的样式
         */
        digitStyle?: React_2.CSSProperties;
        /**
         * @description type == dict, 字典code，
         */
        dictCode?: string;
        /**
         * @description type == image, 有效，替换字段别名
         */
        imageFieldNames?: ImageVideoGroupProps['fieldNames'];
        format?: (row: any, _?: React_2.ReactNode, response?: {
            dictOptions?: {
                code: string;
                name: string;
            } & Record<string, any>;
        }) => React_2.ReactNode;
        /**
         *
         * @description 同format一样，兼容旧功能
         */
        slot?: (row: any, _?: React_2.ReactNode) => React_2.ReactNode;
        visible?: boolean | ((row: any) => boolean);
        /**
         * @description type == date，时间格式化， 默认是：YYYY-MM-DD
         */
        formatter?: string;
        /**
         * @description ProDescriptionsItem的参数
         */
        extend?: ProDescriptionsItemProps;
        /**
         * @description ProDescriptionsItem的参数， 建议用这个
         */
        itemProps?: ProDescriptionsItemProps;
    }[];
};

declare interface InitialStateType {
    isActive: boolean;
    onConfirm(): void;
    resetConfirmation(): void;
}

/**
 * 是否登陆
 */
export declare function isLogin(): Promise<boolean>;

/**
 * 解密token
 * @param access_sign
 * @returns
 */
export declare const jwtDecode: (access_sign: string) => {
    decrypt: string;
    jwtDecodeData: any;
    aseKey: string;
};

export declare const lazyLoad: (children: ReactNode) => ReactNode;

export declare function loadCss(hrefUrl: any): Promise<unknown>;

export declare const Loading: React_2.FC<SpinProps & any>;

export declare const LoadingGuard: () => JSX_2.Element | null;

export declare function LoginLayout(props: LoginLayoutProps): JSX_2.Element;

declare type LoginLayoutProps = {
    children?: React.ReactNode;
    authLoginType: AuthLoginType_2;
    mode?: string;
};

/**
 * 退出登录
 */
export declare function logout(e?: any, s?: any): Promise<void>;

export { LubanAiFixed }

export declare type menuBusinessCodeType = {
    code: string;
    key: string;
    children: menuBusinessCodeType[];
};

export declare const mergeArrayObject: (a: any[], b: any[], p: string) => any[];

export declare type Mode = 'both' | 'table' | 'card';

export declare const monitorStorage: () => void;

export declare const NODE_ENV: string;

export declare const NotFound: () => JSX_2.Element;

export declare const OperationBtn: React_2.FC<OperationBtnModelProps>;

export declare interface OperationBtnModelProps {
    btns: any[];
    rowInfo: any;
    rowIndex?: number;
    showNum?: number;
}

export declare const otherSysPathNameMap: {
    /**
     * @description 全部待办/
     */
    AllToDo: string;
    /**
     * @description 企业管理base
     */
    UimsBase: string;
    /**
     * @description 企业管理组织与员工
     */
    UimsOrg: string;
    /**
     * @description 更多通知公告type2
     */
    UimsNotice: string;
    /**
     * @description 企业管理组织与员工
     */
    UimsNoticeType2: string;
    /**
     * @description 消息中心
     */
    MessageList: string;
    /**
     * @description 在线帮助pc端
     */
    SupportIndex: string;
};

export declare const PageLayout: ({ title: propsTitle, breadcrumb, children, footer, isScrollTop, ...pageProps }: {
    title?: string | React.ReactNode;
    breadcrumb?: boolean | undefined;
    footer?: ReactNode[] | undefined;
    isScrollTop?: boolean | undefined;
} & PageHeaderProps) => JSX_2.Element;

export declare type PageRouteResponse = {
    /**
     * 系统code
     */
    code?: string;
    /**
     * 系统id
     */
    systemId?: string;
    /**
     * 为解析的pc系统基础路由
     */
    serverPcPath?: string;
    /**
     * pc系统基础路由
     */
    pcPath?: string;
    /**
     * 系统名称
     */
    systemName?: string;
};

export declare type Params = {
    path: string;
    allow?: string[];
    urlHref?: string;
    mode?: string;
    authLoginType?: string;
};

export { ParseUrl2Svg }

export declare const patternPath: (path: string) => string;

export declare const PortalHeaderLayout: ({ header, sider, withoutSiderAndHeaderRouter, withoutHeaderRouter, withoutSiderRouter, canChangeCompany, headerTabs, hasBase, ...rest }: {
    header?: boolean | undefined;
    sider?: boolean | undefined;
    withoutSiderAndHeaderRouter?: string[] | undefined;
    withoutHeaderRouter?: string[] | undefined;
    withoutSiderRouter?: string[] | undefined;
    canChangeCompany?: boolean | undefined;
    hasBase?: boolean | undefined;
    headerTabs?: {
        label: string;
        path: string;
    }[] | undefined;
}) => JSX_2.Element;

declare interface Props extends videojs_2.PlayerOptions {
    src: string;
    controls?: boolean;
    autoplay?: boolean;
    currentTime?: number;
    videoRef?: any;
    style?: React_2.CSSProperties | undefined;
    onReady?: () => void;
}

export declare const psiToPathNameMap: {
    psi1010: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    psi1020: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    psi1030: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    psi1040: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    psi1050: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    psi1060: (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    'psi-settle1010': (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    'psi-settle1060': (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    'psi-settle1080': (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    'psi-settle1030': (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
    'psi-settle1050': (t?: Partial<Row>, base?: Record<string, any>) => string | undefined;
};

export declare const pubUrl = "https://pub.kxgcc.com";

export declare type RecordOrUndefined = Record<string, any> | undefined;

export declare const renderBadge: (count: number, active?: boolean) => JSX_2.Element;

export declare const renderFileHtml: (fileData: any, emptyText?: string) => any;

export declare const renderImageHtml: (fileData: any, itemKey?: string, cfg?: {
    fieldNames: string;
    emptyText?: string;
} & any) => any;

export declare type RenderItem = {
    renderItem: (item: any, index: number) => {
        render: () => React_2.ReactNode;
        cardProps?: ProCardProps;
    };
};

export { request }

export declare const Resizable: React.FC<ResizableProps>;

export declare type ResizableProps = Omit<ResizableProps_2, 'defaultSize'> & {
    range?: typeof BASE_RANGE;
    defaultSize?: Partial<Size>;
};

export declare const Route: ({ router, basename }: {
    router: any;
    basename?: string | undefined;
}) => JSX_2.Element;

export declare interface RouteConfigExtended extends Omit<RouteObject, 'children'> {
    title: string;
    titleConcat?: boolean;
    children?: Routes;
    path: string;
}

export declare type Routes = RouteConfigExtended[] | {
    [name: string]: RouteConfigExtended;
};

declare type RouteType = Omit<RouteObject, 'element' | 'redirect'> & {
    element: any;
    redirect?: string;
}[];

declare interface Row {
    busId: string;
    businessKey: string;
    busCode: string;
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

export declare function saveToken(data?: any): Promise<void>;

export declare const SchemaForm: (props: SchemaFormProps) => JSX_2.Element;

export declare type SchemaFormProps = FormSchema<Record<string, any>> & {
    /** onOk
     *  onFinish 成功后执行 code === 200
     */
    onOk?: () => void;
    /** onError
     * 需要自定义错误时使用返回后端的错误校验
     * */
    onError?: ({ errors, }: {
        errors: {
            field: string;
            message: string;
        }[];
    }) => void;
};

export declare const ScmHeaderLayout: () => JSX_2.Element;

export declare const scmOtherToPathNameMap: {
    scm20501: ({ businessKey }: any) => {
        path: any;
        systemId: "182590554612203591";
    };
    scm20502: ({ businessKey }: any) => {
        path: any;
        systemId: "182590554612203591";
    };
    logistic10101: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    logistic10102: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    logistic10201: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    logistic10202: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    logistic10301: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    logistic10302: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    scm106012: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    scm106011: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    scm106021: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    scm106022: ({ businessKey }: any) => {
        path: any;
        systemId: "182591202514731045";
    };
    settle106011: ({ businessKey }: any) => {
        path: any;
        systemId: "227263571703209998";
    };
    settle106022: ({ businessKey }: any) => {
        path: any;
        systemId: "227263571703209998";
    };
    settle10101: ({ businessKey }: any) => {
        path: string;
        systemId: "227263374860329047";
    };
    settle103011: ({ businessKey }: any) => {
        path: any;
        systemId: "182664828995797064";
    };
    settle103022: ({ businessKey }: any) => {
        path: any;
        systemId: "182664828995797064";
    };
    settle103012: ({ businessKey }: any) => {
        path: any;
        systemId: "182664828995797064";
    };
    settle103021: ({ businessKey }: any) => {
        path: any;
        systemId: "182664828995797064";
    };
    riskWarning1010_settle1030_1: (t?: Partial<Row>) => string | undefined;
    riskWarning1010_settle1030_2: (t?: Partial<Row>) => string | undefined;
    riskWarning1020_settle1030_1: (t?: Partial<Row>) => string | undefined;
    riskWarning1020_settle1030_2: (t?: Partial<Row>) => string | undefined;
    riskWarning1030_settle1030_1: (t?: Partial<Row>) => string | undefined;
    riskWarning1030_settle1030_2: (t?: Partial<Row>) => string | undefined;
    riskWarning1040_settle1030_1: (t?: Partial<Row>) => string | undefined;
    riskWarning1040_settle1030_2: (t?: Partial<Row>) => string | undefined;
    settle10400: ({ businessKey }: any) => {
        path: string;
        systemId: "227263119922143288";
    };
    scm104011: ({ businessKey }: any) => {
        path: any;
        systemId: "182590974562697223";
    };
    scm104021: ({ businessKey }: any) => {
        path: any;
        systemId: "182590974562697223";
    };
    scm104012: ({ businessKey }: any) => {
        path: any;
        systemId: "182590974562697223";
    };
    scm104022: ({ businessKey }: any) => {
        path: any;
        systemId: "182590974562697223";
    };
    scm10101: ({ businessKey }: any) => {
        path: any;
        systemId: "182590770363007005";
    };
    scm10102: ({ businessKey }: any) => {
        path: any;
        systemId: "182590770363007005";
    };
    scm10201: ({ businessKey }: any) => {
        path: any;
        systemId: "182590770363007005";
    };
    scm10202: ({ businessKey }: any) => {
        path: any;
        systemId: "182590770363007005";
    };
};

/**
 * 返回scm的业务map
 * @param row 接口返回的参数 { businessCode:'' ,  variables:{ } }
 * @param customProps 预留字段：各个业务自己需要的特殊参数
 * @returns String
 */
export declare const scmToPathNameMap: {
    scm1010: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1020: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1030: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1040: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1050: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1060: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm1070: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm2030: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3010: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3060: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3061: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3020: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3021: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3050: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3051: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3030: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3031: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3041: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3081: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3080: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3090: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm3091: (t?: Partial<Row>, base?: Record<string, any>) => any;
    scm2050: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1010: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1020: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1030: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1040: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1050: (t?: Partial<Row>, base?: Record<string, any>) => any;
    logistic1060: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1010: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1030: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1040: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1050: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1060: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1080: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle1090: (t?: Partial<Row>, base?: Record<string, any>) => any;
    settle2010: (t?: Partial<Row>, base?: Record<string, any>) => any;
};

export declare const setEnvToWindow: (res: Record<string, any>) => void;

export declare function setMobileSession(): void;

export declare const ShortcutMenu: ({ title, menus, }: {
    title: string;
    menus: {
        title: string;
        link: string;
        icon: React_2.ElementType;
    }[];
}) => JSX_2.Element;

export declare const SiderLayout: () => JSX_2.Element;

export declare const SmartLayout: ({ header, sider, withoutSiderAndHeaderRouter, withoutHeaderRouter, withoutSiderRouter, canChangeCompany, headerTabs, renderLayoutType, children, hasBase, ...rest }: SmartLayoutProps) => JSX_2.Element;

export declare interface SmartLayoutProps {
    /**
     * 是否展示头部
     */
    header?: boolean;
    /**
     * 是否展示侧边栏
     */
    sider?: boolean;
    /**
     * 不展示头部和侧边栏的路由
     */
    withoutSiderAndHeaderRouter?: string[];
    /**
     * 不展示头部的路由
     */
    withoutHeaderRouter?: string[];
    /**
     * 不展示侧边栏的路由
     */
    withoutSiderRouter?: string[];
    /**
     * 是否改变公司
     */
    canChangeCompany?: boolean;
    /**
     * 是否展示头部tab
     */
    headerTabs?: {
        label: string;
        path: string;
    }[];
    /**
     * 插槽
     */
    children?: React.ReactNode;
    /**
     * 是否展示在线帮助模块
     */
    isShowHelpWebModule?: boolean;
    /**
     * 是否有工作台
     */
    hasBase?: boolean;
    /**
     * //优先级 1，layoutType（1:无头部和侧边栏，2:无侧边栏，3:无头部）
     * @param path
     * @returns
     */
    renderLayoutType?: (path: string) => string | undefined;
}

export declare const SubmitButton: ({ onClick: propOnclick, delay, ...props }: Partial<{
    href: string;
    target?: string | undefined;
    onClick?: MouseEventHandler<HTMLElement> | undefined;
} & BaseButtonProps & Omit<AnchorHTMLAttributes<any>, "type" | "onClick"> & {
    htmlType?: "button" | "reset" | "submit" | undefined;
    onClick?: MouseEventHandler<HTMLElement> | undefined;
} & Omit<ButtonHTMLAttributes<any>, "type" | "onClick">> & {
    delay?: number | undefined;
}) => JSX_2.Element;

declare type SubmitFunction = () => Promise<void> | void;

export declare const systemIds: {
    readonly quality: "84310513474895948";
    readonly contract: "81869552404688911";
    readonly 'integrator-manage-oss': "243420066404753469";
    readonly 'project-system-oss': "243421563775475756";
    readonly 'portal-oss': "243423160924495882";
    readonly 'contract-oss': "261613339485007935";
    readonly 'uims-oss': "179368645221163026";
    readonly courses: "153979959378235400";
    readonly cockpit: "167096554103328853";
    readonly 'scm-oss': "202474021994926119";
    readonly 'psi-oss': "260522474096156746";
    readonly schedule: "111875263834587161";
    readonly purchase: "82522476633944122";
    readonly supplier: "82666604164313112";
    readonly 'scm-order': "182591202514731045";
    readonly 'warning-oss': "268484240314855445";
    readonly 'scm-warning': "310974301128110080";
    readonly cms: "156596681134362688";
    readonly warning: "263000431838490677";
    readonly construction: "114044882112446555";
    readonly journal: "92770999912771677";
    readonly 'project-analysis': "278920632408875053";
    readonly 'company-analysis': "278935451954454566";
    readonly 'icon-oss': "233627467213037591";
    readonly crm: "174297437182459959";
    readonly exam: "153979800967761949";
    readonly message: "190149157363683424";
    readonly 'message-oss': "288764695991799814";
    readonly uims: "199269570018578479";
    readonly 'finance-oss': "211949661529894918";
    readonly 'scm-bill': "227263119922143288";
    readonly design: "115984652614819867";
    readonly 'quality-oss': "245580554362282065";
    readonly 'scm-basic': "182590554612203591";
    readonly 'scm-settle': "182664828995797064";
    readonly 'scm-contract': "182590974562697223";
    readonly 'scm-purchase': "182590770363007005";
    readonly fee: "114482962929778703";
    readonly 'psi-basic': "252522681700835378";
    readonly 'psi-finance': "271754767301222476";
    readonly 'psi-purOrder': "252496433972895785";
    readonly 'psi-supOrder': "252496692748869677";
    readonly 'crm-oss': "197805253117120538";
    readonly pay: "81208889093156898";
    readonly finance: "208327558796734517";
    readonly iot: "203179354950242363";
    readonly 'iot-oss': "204799687155290178";
    readonly labor: "77938095424557134";
    readonly constructionlog: "115980021843157076";
    readonly project: "82522199059099734";
    readonly safety: "84346297837977671";
    readonly 'open-platform-oss': "278206791169482793";
    readonly bim: "81164282280046616";
    readonly 'scm-settle-finance': "227263374860329047";
    readonly 'scm-settle-invoice': "227263571703209998";
    readonly 'tools-oss': "262705182754861154";
    readonly 'cms-oss': "164762915621388375";
    readonly 'scm-analysis': "270233894014558246";
    readonly 'scm-materials': "182591463882784800";
    readonly 'scm-inquiry': "182590770363007005";
    readonly 'task-oss': "303218113019912212";
    readonly 'construction-industry': "295607457605210176";
    readonly task: "303662734745280606";
    readonly 'labor-oss': "312291496319791126";
    readonly 'regulatory-report': "310811887745118296";
    readonly 'gov-setting': "82588289080520756";
    readonly 'gov-project': "311556021782839389";
    readonly 'gov-company': "311560095123111986";
    readonly 'mall-oss': "316622727526232133";
    readonly 'gov-schedule': "320661156341481534";
    readonly 'gov-project-manage': "328995784999567447";
    readonly check: "329659241818513436";
    readonly 'psi-analysis': "252496929970315338";
    readonly identity: "336201566086545479";
    readonly 'construction-site-oss': "339071861117993029";
    readonly 'rights-oss': "184711324683505725";
    readonly kms: "156888900802236460";
    readonly 'lower-platform': "365261389457313844";
    readonly 'seller-oss': "366691650774552587";
    readonly 'right-oss': "184711324683505725";
    readonly cost: "379778724419399758";
    readonly psi: "390618543697178712";
};

export declare const TableSummary: default_2;

export { TableTitleRequired }

declare type TAddCompanyDrawerProps = {
    modalType?: string;
    currCompany?: any;
    visible: boolean;
    headers?: any;
    onCancel: () => void;
    onRefresh?: (data?: any) => void;
};

export declare type TFreeAnchorLayoutProps = {
    children: React_2.ReactNode;
    style?: any;
    className?: any;
};

export declare const Thing: () => Auth;

export declare const TinymceEditor: React_2.FC<TinymceInfo>;

declare type TinymceInfo = {
    value?: string;
    baseUrl?: string;
    disabled?: boolean;
    plugins?: any;
    toolbar?: any;
    menubar?: any;
    initValue?: any;
    imageUploadUrl?: string;
    wordUploadUrl?: string;
    fileSaveUrl?: string;
    rtf2htmlUrl?: string;
    bucket?: string;
    objectPathPre?: string;
    gateway?: string;
    token?: any;
    height?: number;
    style?: React_2.CSSProperties;
    getValue?: (value: any) => void;
    onChange?: (value: any) => void;
};

export declare const UIMS_BASE = "/uims";

export declare const urlToList: (url: string, resourceListMap?: any, isMenuUrlAddSystemName?: boolean) => string[];

export declare const useAuthLogin: ({ authLoginType, mode, }: {
    authLoginType: AuthLoginType;
    mode?: string | undefined;
}) => "loading" | "read";

export declare const useBigScreen: () => boolean;

export declare const useClientAuthThing: () => {
    init: (userParams: any) => Promise<any>;
    logout: typeof logout;
    webSocket: {
        webSocket: any;
        initSocket: (self: {
            receiveMessage?: ((arg0: any, arg1: any) => void) | undefined;
            socketParams?: Record<string, any> | undefined;
        }, sub: any, mainConfig?: {
            privaryKey: any;
            apiUrl?: string | undefined;
        } | undefined) => void;
        closeSocket: () => void;
        socketSubscribe: (self: Record<string, any> & {
            receiveMessage?: ((arg0: any, arg1: any) => void) | undefined;
            uniqueKey?: string | undefined;
        }, sub: string | any[]) => void;
        socketCloseSubscribe: (sub: any[], data?: {
            uniqueKey?: string | undefined;
        } | undefined) => void;
        sendMessage: (topic: any, message: any) => void;
    };
};

export declare const useConfirm: (when: boolean | unstable_BlockerFunction) => InitialStateType;

export declare const useDesktopOrLaptop: () => boolean;

export declare const useEffectOnce: (effect: EffectCallback) => void;

export declare const useInterval: (callback: () => void, delay: number | null) => void;

export declare const useJumpPageRouteGet: (headers?: any) => {
    /**
     * 各系统信息的集合， key是系统id，或者是系统code
     */
    sysPasePathMap: Record<string, PageRouteResponse>;
    /**
     * 根据系统id或者系统code获取基本系统信息
     */
    getSystemInfo: ({ sysId, sysCode, }: {
        sysId?: string | undefined;
        sysCode?: string | undefined;
    }) => Promise<PageRouteResponse | undefined>;
    /**
     * 根据businessCode,businessKey获取跳转页面的路径，带有动态获取基础路径的，不用动态获取路径直接用getPathNameByRow方法
     */
    getJumpPagePath: (row: {
        businessCode: string;
        businessKey: string;
    } | any, customProps?: {
        baseOnOrigin?: 'backlog' | 'message';
        returnJumpResponseAll?: boolean;
        oaMode?: boolean;
    } & Record<string, any>, ...other: any[]) => Promise<string>;
};

export declare function useLoaderBMap({ url, cssUrl, mode, authLoginType, }: useLoaderBMapPorps): "loading" | "ready";

declare type useLoaderBMapPorps = {
    url?: string;
    cssUrl?: string;
    mode?: string;
    authLoginType?: string;
};

export declare const useLoaderScript: (url?: string) => {
    status: string;
    setSrc: Dispatch<SetStateAction<string | undefined>>;
};

export declare const useMobile: () => boolean;

export declare const usePermission: () => (permissionCode: any) => boolean;

export declare const usePrompt: (when: boolean | unstable_BlockerFunction) => unstable_Blocker;

export declare const useRouteTitle: ({ routesConfig, pathname, serverPageConfig, }: {
    routesConfig?: any;
    pathname?: string | undefined;
    serverPageConfig?: Record<string, any> | undefined;
}) => any;

export declare const useScript: (src: any) => string;

export { useSharedGlobalState }

export declare function useWebSocket(config: WsProviderProps): {
    startWsHandler: () => void;
};

export declare const useWithPrompt: (submit?: SubmitFunction) => {
    setIsPrompt: Dispatch<SetStateAction<boolean>>;
    onSave: (fn: any) => void;
};

declare interface Variables {
    submitter: string;
    pt: string;
    contractCompanyId: string;
    busType: number;
    dev01: string;
    applyCompanyId: any;
    companyId: string;
    revoke: boolean;
    submitCompanyId: string;
    startEmployeeName: string;
    15805052341: string;
    type?: number;
    settleType?: number;
}

export declare const videoOptions: videojs_2.PlayerOptions;

export declare const VideoPlayer: FC<Props>;

export declare type websocketInfoType = {
    status?: 'ready' | 'connection' | 'done';
    userId: string;
    companyId: string;
    socket?: any;
};

export declare const withPrompt: <D extends unknown = any>() => (WrappedComponent: FC<D>) => (props: any) => JSX_2.Element;

export declare type WsProviderProps = {
    start?: boolean;
    inboxList?: string[];
    onSuccess?: (data?: {
        socketConnectStatus?: 'connecting' | 'success' | 'failed' | 'close';
        subUrl?: string;
        data?: any;
    } | any, resData?: any) => void;
    onWebSocketConnected?: (data: any) => void;
    mode?: string;
    authLoginType?: string;
};

export { }

         }