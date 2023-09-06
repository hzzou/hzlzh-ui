import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, normalizeStyle, createVNode, unref, normalizeProps, guardReactiveProps } from "vue";
import RenderHeader from "./renderHeader.js";
const _hoisted_1 = { class: "hz-virtual-table" };
const __default__ = defineComponent({
  name: "hz-virtual-table"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    ref(0);
    ref(props.tableData.length);
    let headKey = ref(Object.keys(props.tableData[0]));
    const handleScroll = (event) => {
      console.log(event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: "table",
          onScroll: handleScroll,
          style: normalizeStyle({ height: __props.height + "px" })
        }, [
          createVNode(unref(RenderHeader), normalizeProps(guardReactiveProps({ headKey: unref(headKey), itemHeight: __props.itemHeight, headerAlign: __props.headerAlign, fixHead: __props.fixHead })), null, 16)
        ], 36)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
