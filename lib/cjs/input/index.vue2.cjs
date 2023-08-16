"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = { class: "basicInput" };
const _hoisted_2 = ["value"];
const __default__ = vue.defineComponent({
  name: "hz-input"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("input", {
          value: __props.model,
          onInput: handleInput
        }, null, 40, _hoisted_2)
      ]);
    };
  }
});
exports.default = _sfc_main;
