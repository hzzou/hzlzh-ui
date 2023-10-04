define(["exports", "vue", "./renderTableHeader.amd", "./renderTBodyRow.amd", "./hooks.amd"], function(exports, vue, renderTableHeader, renderTBodyRow, hooks) {
  "use strict";
  const _hoisted_1 = { class: "hz-virtual-table" };
  const _hoisted_2 = { key: 0 };
  const _hoisted_3 = {
    key: 1,
    class: "default"
  };
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
      },
      openSelect: {
        type: Boolean,
        default: false
      },
      multiSelect: {
        type: Boolean,
        default: false
      }
    },
    emits: ["scroll", "check"],
    setup(__props, { emit: emitEvent }) {
      const props = __props;
      let scrollOffset = vue.ref(0), itemCount = vue.ref(0), checkHeader = vue.ref(false), headKey = vue.ref([]), itemData = vue.ref([]);
      const [currentIdx, setCurrentIdx] = hooks.useCurrentIdx(), [selected, setSelected] = hooks.useSelected(), [selectedItem, setSelectedItem] = hooks.useSelectedItem();
      vue.onBeforeMount(() => {
        if (props.tableData.length) {
          itemCount.value = props.tableData.length;
          headKey.value = Object.keys(props.tableData[0]);
        }
        getClientChildren();
      });
      const handleAllSelect = () => {
        if (props.multiSelect) {
          const arr = selected.value.length > 0 ? [] : props.tableData.map((ele, idx) => idx);
          const itemArr = selectedItem.value.length > 0 ? [] : props.tableData;
          setSelected(arr);
          setSelectedItem(itemArr);
          emitEvent("check", itemArr);
        } else {
          if (checkHeader.value && currentIdx.value !== -1) {
            checkHeader.value = false;
            setCurrentIdx(-1);
            emitEvent("check", {});
          }
        }
      };
      const handleSelect = (item) => {
        console.log(item);
        if (props.multiSelect) {
          setSelected(item.index);
          setSelectedItem(item.data);
          props.openSelect && emitEvent("check", selectedItem);
        } else {
          const idx = currentIdx.value === item.index ? -1 : item.index;
          checkHeader.value = true;
          setCurrentIdx(idx);
          props.openSelect && emitEvent("check", item.data);
        }
      };
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("article", {
            class: "table",
            onScroll: handleScroll,
            style: vue.normalizeStyle({ height: __props.height + "px" })
          }, [
            __props.showHeader ? (vue.openBlock(), vue.createBlock(vue.unref(renderTableHeader.default), vue.mergeProps({
              key: 0,
              onHeaderSelect: handleAllSelect
            }, {
              headKey: vue.unref(headKey),
              itemHeight: __props.itemHeight,
              headerAlign: __props.headerAlign,
              fixHead: __props.fixHead,
              openSelect: __props.openSelect,
              multiSelect: __props.multiSelect,
              checkHeader: vue.unref(checkHeader),
              selected: vue.unref(selected),
              itemCount: vue.unref(itemCount)
            }), null, 16)) : vue.createCommentVNode("", true),
            vue.createElementVNode("section", {
              class: "tbody",
              style: vue.normalizeStyle({ height: __props.showHeader ? __props.height - __props.itemHeight + "px" : __props.height + "px" })
            }, [
              vue.unref(itemData).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(itemData), (item) => {
                  return vue.openBlock(), vue.createBlock(vue.unref(renderTBodyRow.default), vue.mergeProps({
                    key: item.index,
                    onSelect: handleSelect
                  }, {
                    item,
                    stripe: __props.stripe,
                    itemHeight: __props.itemHeight,
                    align: __props.align,
                    openSelect: __props.openSelect,
                    multiSelect: __props.multiSelect,
                    currentIdx: vue.unref(currentIdx),
                    selected: vue.unref(selected)
                  }), null, 16);
                }), 128))
              ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                vue.renderSlot(_ctx.$slots, "empty", {}, () => [
                  vue.createTextVNode("暂无数据")
                ], true)
              ]))
            ], 4)
          ], 36)
        ]);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
