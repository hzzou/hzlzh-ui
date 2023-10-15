import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, createBlock, unref, createCommentVNode, renderSlot } from "vue";
import Icon from "../icon/index.vue.js";
const _hoisted_1 = { class: "hz-button" };
const _hoisted_2 = ["type", "disabled"];
const _hoisted_3 = { key: 2 };
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
    nativeType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "medium"
    },
    iconName: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: emitEvent }) {
    const handleClick = (event) => {
      emitEvent("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("button", {
          onClick: handleClick,
          class: normalizeClass([
            __props.type,
            __props.size,
            {
              "round": __props.round,
              "circle": __props.circle,
              "plain": __props.plain,
              "loading": __props.loading
            }
          ]),
          type: __props.nativeType,
          disabled: __props.disabled
        }, [
          __props.loading ? (openBlock(), createBlock(unref(Icon), {
            key: 0,
            class: "icon-loading",
            name: "loading"
          })) : createCommentVNode("", true),
          __props.iconName && !__props.loading ? (openBlock(), createBlock(unref(Icon), {
            key: 1,
            name: __props.iconName
          }, null, 8, ["name"])) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ], 10, _hoisted_2)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
