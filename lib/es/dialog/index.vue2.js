import { defineComponent, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, withModifiers, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createVNode, unref, createCommentVNode } from "vue";
import Icon from "../icon/index.vue.js";
const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "main" };
const _hoisted_3 = { class: "footer" };
const _hoisted_4 = { class: "header" };
const _hoisted_5 = { class: "main" };
const _hoisted_6 = { class: "footer" };
const __default__ = defineComponent({
  name: "hz-dialog"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    modal: {
      // 蒙层
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["open", "close", "update:modelValue"],
  setup(__props, { emit: emitEvent }) {
    const props = __props;
    watch(() => props.modelValue, (newVal) => {
      if (newVal) {
        emitEvent("open", { show: true });
      } else {
        emitEvent("close", { show: false });
      }
    }, { immediate: true });
    const hideDialog = () => {
      emitEvent("update:modelValue");
    };
    return (_ctx, _cache) => {
      return __props.modelValue ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "hz-dialog",
        onClick: hideDialog
      }, [
        __props.modal ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass({ "hz-modal": __props.modal })
        }, [
          createElementVNode("div", {
            class: "hz-content",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"])),
            style: normalizeStyle({ width: __props.width + "px", height: __props.height + "px" })
          }, [
            createElementVNode("div", _hoisted_1, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode(toDisplayString(__props.title), 1)
              ], true),
              createVNode(unref(Icon), {
                class: "close",
                name: "close",
                onClick: withModifiers(hideDialog, ["stop"])
              }, null, 8, ["onClick"])
            ]),
            createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])
          ], 4)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "hz-wrap",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("div", {
            class: "hz-content",
            style: normalizeStyle({ width: __props.width + "px", height: __props.height + "px" })
          }, [
            createElementVNode("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode(toDisplayString(__props.title), 1)
              ], true),
              createVNode(unref(Icon), {
                class: "close",
                name: "close",
                onClick: withModifiers(hideDialog, ["stop"])
              }, null, 8, ["onClick"])
            ]),
            createElementVNode("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])
          ], 4)
        ]))
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
