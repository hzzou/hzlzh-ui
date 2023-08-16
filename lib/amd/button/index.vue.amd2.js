define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const _hoisted_1 = { class: "basicButton" };
  const __default__ = vue.defineComponent({
    name: "hz-button"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      name: {
        type: String,
        default: "按钮"
      },
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      const classList = vue.computed(() => {
        if (props.size !== "") {
          return [props.type, props.size];
        } else {
          return [props.type];
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("button", {
            class: vue.normalizeClass(["default", classList.value])
          }, vue.toDisplayString(__props.name), 3)
        ]);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
