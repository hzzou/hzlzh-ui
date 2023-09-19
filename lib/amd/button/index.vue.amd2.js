define(["exports", "vue", "../icon/index.vue.amd"], function(exports, vue, index) {
  "use strict";
  const _hoisted_1 = { class: "hz-button" };
  const _hoisted_2 = ["type", "disabled"];
  const _hoisted_3 = { key: 2 };
  const __default__ = vue.defineComponent({
    name: "hz-button"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("button", {
            onClick: handleClick,
            class: vue.normalizeClass([
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
            __props.loading ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
              key: 0,
              class: "icon-loading",
              name: "loading"
            })) : vue.createCommentVNode("", true),
            __props.iconName && !__props.loading ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
              key: 1,
              name: __props.iconName
            }, null, 8, ["name"])) : vue.createCommentVNode("", true),
            _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])) : vue.createCommentVNode("", true)
          ], 10, _hoisted_2)
        ]);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
