import { ItemObj } from "./index.vue";
declare const _default: import("vue").DefineComponent<{}, {
    handleSelect: (data: ItemObj, index: number) => void;
    handleScroll: (event: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "select")[], "scroll" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onScroll?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
}, {}>;
export default _default;
