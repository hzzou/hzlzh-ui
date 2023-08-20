import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createTextVNode } from "vue";
const _hoisted_1 = { class: "hz-button" };
const __default__ = defineComponent({
  name: "hz-button"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
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
    const classList = computed(() => {
      if (props.size !== "") {
        return [props.type, props.size];
      } else {
        return [props.type];
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("button", {
          class: normalizeClass(["default", classList.value])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode("按钮")
          ], true)
        ], 2)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
