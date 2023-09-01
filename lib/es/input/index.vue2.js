import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "hz-input" };
const _hoisted_2 = ["type", "max", "min", "step", "maxlength", "minlength", "value"];
const __default__ = defineComponent({
  name: "hz-input"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 1e3
    },
    step: {
      type: [String, Number],
      default: 1
    },
    maxLength: {
      type: [String, Number],
      default: 100
    },
    minLength: {
      type: [String, Number],
      default: 1
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emitEvent }) {
    const handleInput = (e) => {
      emitEvent("update:modelValue", e.target.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("input", {
          type: __props.type,
          max: __props.max,
          min: __props.min,
          step: __props.step,
          maxlength: __props.maxLength,
          minlength: __props.minLength,
          value: __props.modelValue,
          onInput: handleInput
        }, null, 40, _hoisted_2),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
