import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = { class: "basicInput" };
const _hoisted_2 = ["value"];
const __default__ = defineComponent({
  name: "hz-input"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    model: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["updateModel"],
  setup(__props, { emit: emitEvent }) {
    const handleInput = (e) => {
      emitEvent("updateModel", e.target.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("input", {
          value: __props.model,
          onInput: handleInput
        }, null, 40, _hoisted_2)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
