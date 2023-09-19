declare const _sfc_main: import("vue").DefineComponent<{
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableData: {
        type: ArrayConstructor;
        default: () => any[];
    };
    fixHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    headerAlign: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableData: {
        type: ArrayConstructor;
        default: () => any[];
    };
    fixHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    headerAlign: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onScroll?: (...args: any[]) => any;
}, {
    align: string;
    height: number;
    itemHeight: number;
    showHeader: boolean;
    stripe: boolean;
    tableData: unknown[];
    fixHead: boolean;
    style: Record<string, any>;
    headerAlign: string;
}, {}>;
export default _sfc_main;
