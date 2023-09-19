/**
 * 当要透传某些原生属性时，如果没定义在props上, 则就是在$attrs上;
 * 原生属性也可以写在API上
 */
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    resize: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "focus" | "blur")[], "update:modelValue" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    resize: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
}, {
    type: string;
    size: string;
    disabled: boolean;
    modelValue: string | number;
    resize: string;
    autofocus: boolean;
    readonly: boolean;
    autocomplete: string;
    prefixIcon: string;
    suffixIcon: string;
    clearable: boolean;
    placeholder: string;
}, {}>;
export default _sfc_main;
