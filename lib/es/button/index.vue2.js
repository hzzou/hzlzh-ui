import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, toDisplayString } from "vue";
const _hoisted_1 = { class: "basicButton" };
const __default__ = defineComponent({
  name: "hz-button"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        }, toDisplayString(__props.name), 3)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
