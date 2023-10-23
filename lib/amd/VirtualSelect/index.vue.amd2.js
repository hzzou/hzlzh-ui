define(["exports", "vue", "../icon/index.vue.amd", "./renderSelectList.amd"], function(exports, vue, index, renderSelectList) {
  "use strict";
  const __default__ = vue.defineComponent({
    name: "hz-virtual-select"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      height: { default: 200 },
      itemHeight: { default: 40 },
      width: { default: 300 },
      listData: { default: () => [] }
    },
    emits: ["scroll", "select"],
    setup(__props, { emit: emitEvent }) {
      const props = __props;
      const showOption = vue.ref(false), inputValue = vue.ref(""), selected = vue.ref(-1), scrollOffset = vue.ref(0), itemData = vue.ref([]);
      vue.onBeforeMount(() => {
        getClientData();
      });
      const handleOption = () => {
        showOption.value = !showOption.value;
      };
      const handleSelect = (data, index2) => {
        emitEvent("select", data);
        inputValue.value = data.name;
        selected.value = index2;
        setTimeout(() => {
          showOption.value = false;
        }, 500);
      };
      const handleScroll = (event) => {
        emitEvent("scroll", event);
        const { scrollTop } = event.target;
        scrollOffset.value = scrollTop;
        getClientData();
      };
      const handleBlur = (event) => {
        const { value } = event.target;
        setTimeout(() => {
          if (inputValue.value === value) {
            showOption.value = false;
          }
        }, 500);
      };
      const getClientData = () => {
        const startIdx = Math.floor(scrollOffset.value / props.itemHeight), finialStart = Math.max(0, startIdx - 2), numVisible = Math.ceil(props.height / props.itemHeight), endIdx = Math.min(props.listData.length, startIdx + numVisible + 2);
        itemData.value = [];
        for (let i = finialStart; i < endIdx; i++) {
          itemData.value.push({
            index: i,
            data: props.listData[i],
            top: props.itemHeight * i
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "hz-virtual-select",
          style: vue.normalizeStyle({ width: __props.width + "px" })
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
            onBlur: handleBlur,
            onFocus: handleOption,
            style: vue.normalizeStyle({ width: __props.width + "px", height: __props.itemHeight + "px" }),
            type: "text"
          }, null, 36), [
            [vue.vModelText, inputValue.value]
          ]),
          vue.createElementVNode("div", {
            class: "icon",
            onClick: handleOption
          }, [
            showOption.value ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
              key: 0,
              name: "arrow-up-bold"
            })) : (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
              key: 1,
              name: "arrow-down-bold"
            }))
          ]),
          vue.createElementVNode("div", {
            class: "tip",
            style: vue.normalizeStyle({ display: showOption.value ? "block" : "none", top: __props.itemHeight + "px" })
          }, null, 4),
          vue.createElementVNode("div", {
            class: "tip-cover",
            style: vue.normalizeStyle({ display: showOption.value ? "block" : "none", top: __props.itemHeight + 1 + "px" })
          }, null, 4),
          vue.createElementVNode("div", {
            class: "option",
            style: vue.normalizeStyle({
              display: showOption.value ? "block" : "none",
              width: __props.width + "px",
              height: __props.height + "px",
              top: __props.itemHeight + 10 + "px"
            })
          }, [
            vue.createVNode(vue.unref(renderSelectList.default), vue.mergeProps({
              onScroll: handleScroll,
              onSelect: handleSelect
            }, { width: __props.width, itemHeight: __props.itemHeight, height: __props.height, selected: selected.value, itemData: itemData.value }), null, 16)
          ], 4)
        ], 4);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
