import { defineComponent, ref, onBeforeMount, openBlock, createElementBlock, normalizeStyle, withDirectives, createElementVNode, vModelText, createBlock, unref, createVNode, mergeProps } from "vue";
import Icon from "../icon/index.vue.js";
import RenderSelectList from "./renderSelectList.js";
const __default__ = defineComponent({
  name: "hz-virtual-select"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const showOption = ref(false), inputValue = ref(""), selected = ref(-1), scrollOffset = ref(0), itemData = ref([]);
    onBeforeMount(() => {
      getClientData();
    });
    const handleOption = () => {
      showOption.value = !showOption.value;
    };
    const handleSelect = (data, index) => {
      emitEvent("select", data);
      inputValue.value = data.name;
      selected.value = index;
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
      return openBlock(), createElementBlock("div", {
        class: "hz-virtual-select",
        style: normalizeStyle({ width: __props.width + "px" })
      }, [
        withDirectives(createElementVNode("input", {
          class: "input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
          onBlur: handleBlur,
          onFocus: handleOption,
          style: normalizeStyle({ width: __props.width + "px", height: __props.itemHeight + "px" }),
          type: "text"
        }, null, 36), [
          [vModelText, inputValue.value]
        ]),
        createElementVNode("div", {
          class: "icon",
          onClick: handleOption
        }, [
          showOption.value ? (openBlock(), createBlock(unref(Icon), {
            key: 0,
            name: "arrow-up-bold"
          })) : (openBlock(), createBlock(unref(Icon), {
            key: 1,
            name: "arrow-down-bold"
          }))
        ]),
        createElementVNode("div", {
          class: "tip",
          style: normalizeStyle({ display: showOption.value ? "block" : "none", top: __props.itemHeight + "px" })
        }, null, 4),
        createElementVNode("div", {
          class: "tip-cover",
          style: normalizeStyle({ display: showOption.value ? "block" : "none", top: __props.itemHeight + 1 + "px" })
        }, null, 4),
        createElementVNode("div", {
          class: "option",
          style: normalizeStyle({
            display: showOption.value ? "block" : "none",
            width: __props.width + "px",
            height: __props.height + "px",
            top: __props.itemHeight + 10 + "px"
          })
        }, [
          createVNode(unref(RenderSelectList), mergeProps({
            onScroll: handleScroll,
            onSelect: handleSelect
          }, { width: __props.width, itemHeight: __props.itemHeight, height: __props.height, selected: selected.value, itemData: itemData.value }), null, 16)
        ], 4)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
