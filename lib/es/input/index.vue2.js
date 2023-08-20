import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "hz-input" };
const _hoisted_2 = ["value"];
const __default__ = defineComponent({
  name: "hz-input"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
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
