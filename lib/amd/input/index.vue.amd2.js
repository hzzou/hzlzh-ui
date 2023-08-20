define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const _hoisted_1 = { class: "hz-input" };
  const _hoisted_2 = ["value"];
  const __default__ = vue.defineComponent({
    name: "hz-input"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("input", {
            value: __props.modelValue,
            onInput: handleInput
          }, null, 40, _hoisted_2),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
