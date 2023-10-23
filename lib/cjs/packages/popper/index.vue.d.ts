declare const _sfc_main: import("vue").DefineComponent<{
    place: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("show" | "hide")[], "show" | "hide", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    place: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
}, {
    title: string;
    width: string | number;
    place: string;
}>;
export default _sfc_main;
