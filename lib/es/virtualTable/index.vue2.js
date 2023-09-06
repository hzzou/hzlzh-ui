import { defineComponent, ref, onBeforeMount, openBlock, createElementBlock, createElementVNode, normalizeStyle, createBlock, unref, normalizeProps, mergeProps, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode } from "vue";
import RenderTableHeader from "./renderTableHeader.js";
import RenderTBodyRow from "./renderTBodyRow.js";
const _hoisted_1 = { class: "hz-virtual-table" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 1,
  class: "default"
};
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
      default: 400
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
  emits: ["scroll"],
  setup(__props, { emit: emitEvent }) {
    const props = __props;
    let scrollOffset = ref(0), itemCount = ref(0), headKey = ref([]), itemData = ref([]);
    onBeforeMount(() => {
      if (props.tableData.length) {
        itemCount.value = props.tableData.length;
        headKey.value = Object.keys(props.tableData[0]);
      }
      getClientChildren();
    });
    const handleScroll = (event) => {
      emitEvent("scroll", { event });
      const { scrollTop } = event.target;
      scrollOffset.value = scrollTop;
      getClientChildren();
    };
    const getClientChildren = () => {
      const startIdx = Math.floor(scrollOffset.value / props.itemHeight), finialStartIdx = Math.max(0, startIdx - 2), numVisible = Math.ceil(props.height / props.itemHeight), endIdx = Math.min(itemCount.value, startIdx + numVisible + 2);
      itemData.value = [];
      for (let i = finialStartIdx; i < endIdx; i++) {
        const item = {
          index: i,
          data: props.tableData[i],
          top: props.showHeader ? props.itemHeight + props.itemHeight * i : props.itemHeight * i
        };
        itemData.value.push(item);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("article", {
          class: "table",
          onScroll: handleScroll,
          style: normalizeStyle({ height: __props.height + "px" })
        }, [
          __props.showHeader ? (openBlock(), createBlock(unref(RenderTableHeader), normalizeProps(mergeProps({ key: 0 }, { headKey: unref(headKey), itemHeight: __props.itemHeight, headerAlign: __props.headerAlign, fixHead: __props.fixHead })), null, 16)) : createCommentVNode("", true),
          createElementVNode("section", {
            class: "tbody",
            style: normalizeStyle({ height: __props.showHeader ? __props.height - __props.itemHeight + "px" : __props.height + "px" })
          }, [
            unref(itemData).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(itemData), (item) => {
                return openBlock(), createBlock(unref(RenderTBodyRow), normalizeProps(mergeProps({
                  key: item.index
                }, { item, stripe: __props.stripe, itemHeight: __props.itemHeight, align: __props.align })), null, 16);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createTextVNode("暂无数据")
              ], true)
            ]))
          ], 4)
        ], 36)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
