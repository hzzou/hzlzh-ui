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
    openSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "check")[], "scroll" | "check", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    openSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onScroll?: (...args: any[]) => any;
    onCheck?: (...args: any[]) => any;
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
    openSelect: boolean;
    multiSelect: boolean;
}, {}>;
export default _sfc_main;
