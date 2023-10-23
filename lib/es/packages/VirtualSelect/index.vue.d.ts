import type { PropType as __PropType } from 'vue';
export interface ItemObj {
    name: string;
    value?: string | number;
    [key: string]: string | number | boolean | null | undefined | symbol | object | unknown;
}
export interface ListObj {
    data?: ItemObj;
    top?: number;
    index?: number;
}
export interface SelectProps {
    height?: number;
    itemHeight?: number;
    width?: number;
    listData: Array<ItemObj>;
}
declare const _sfc_main: import("vue").DefineComponent<{
    height: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    itemHeight: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    width: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    listData: {
        type: __PropType<ItemObj[]>;
        required: true;
        default: () => any[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "select")[], "scroll" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    itemHeight: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    width: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    listData: {
        type: __PropType<ItemObj[]>;
        required: true;
        default: () => any[];
    };
}>> & {
    onScroll?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
}, {
    width: number;
    height: number;
    itemHeight: number;
    listData: ItemObj[];
}>;
export default _sfc_main;
