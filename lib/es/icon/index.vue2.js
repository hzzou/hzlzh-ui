import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
const __default__ = defineComponent({
  name: "hz-icon"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["hz-icon iconfont", "icon-" + __props.name]),
        style: normalizeStyle({ color: __props.color, fontSize: __props.size + "px" })
      }, null, 6);
    };
  }
});
export {
  _sfc_main as default
};
