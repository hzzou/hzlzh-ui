"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const renderHeader = require("./renderHeader.cjs");
const _hoisted_1 = { class: "hz-virtual-table" };
const __default__ = vue.defineComponent({
  name: "hz-virtual-table"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    itemHeight: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 300
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: Array,
      default: () => []
    },
    fixHead: {
      type: Boolean,
      default: true
    },
    style: {
      type: Object,
      default: () => {
        return {};
      }
    },
    headerAlign: {
      type: String,
      default: "left"
    },
    align: {
      type: String,
      default: "left"
    }
  },
  setup(__props) {
    const props = __props;
    vue.ref(0);
    vue.ref(props.tableData.length);
    let headKey = vue.ref(Object.keys(props.tableData[0]));
    const handleScroll = (event) => {
      console.log(event);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", {
          class: "table",
          onScroll: handleScroll,
          style: vue.normalizeStyle({ height: __props.height + "px" })
        }, [
          vue.createVNode(vue.unref(renderHeader.default), vue.normalizeProps(vue.guardReactiveProps({ headKey: vue.unref(headKey), itemHeight: __props.itemHeight, headerAlign: __props.headerAlign, fixHead: __props.fixHead })), null, 16)
        ], 36)
      ]);
    };
  }
});
exports.default = _sfc_main;
