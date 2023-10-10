define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const __default__ = vue.defineComponent({
    name: "hz-icon"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      name: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#999"
      },
      size: {
        type: [String, Number],
        default: "16"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("i", {
          class: vue.normalizeClass(["hz-icon iconfont", "icon-" + __props.name]),
          style: vue.normalizeStyle({ color: __props.color, fontSize: __props.size + "px" })
        }, null, 6);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
