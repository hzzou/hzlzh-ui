"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "main" };
const _hoisted_3 = { class: "footer" };
const _hoisted_4 = { class: "header" };
const _hoisted_5 = { class: "main" };
const _hoisted_6 = { class: "footer" };
const __default__ = vue.defineComponent({
  name: "hz-dialog"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
  emits: ["update:modelValue"],
  setup(__props, { emit: emitEvent }) {
    const hideDialog = () => {
      emitEvent("update:modelValue");
    };
    return (_ctx, _cache) => {
      return __props.modelValue ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "hz-dialog",
        onClick: hideDialog
      }, [
        __props.modal ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass({ "hz-modal": __props.modal })
        }, [
          vue.createElementVNode("div", {
            class: "hz-content",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"])),
            style: vue.normalizeStyle({ width: __props.width, height: __props.height })
          }, [
            vue.createElementVNode("div", _hoisted_1, [
              vue.renderSlot(_ctx.$slots, "header", {}, () => [
                vue.createTextVNode(vue.toDisplayString(__props.title), 1)
              ], true)
            ]),
            vue.createElementVNode("div", _hoisted_2, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            vue.createElementVNode("div", _hoisted_3, [
              vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])
          ], 4)
        ], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "hz-wrap",
          onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("div", {
            class: "hz-content",
            style: vue.normalizeStyle({ width: __props.width, height: __props.height })
          }, [
            vue.createElementVNode("div", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "header", {}, () => [
                vue.createTextVNode(vue.toDisplayString(__props.title), 1)
              ], true)
            ]),
            vue.createElementVNode("div", _hoisted_5, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            vue.createElementVNode("div", _hoisted_6, [
              vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
            ])
          ], 4)
        ]))
      ])) : vue.createCommentVNode("", true);
    };
  }
});
exports.default = _sfc_main;
