define(["exports", "vue", "../icon/index.vue.amd"], function(exports, vue, index) {
  "use strict";
  const _hoisted_1 = {
    key: 0,
    class: "input-prepend"
  };
  const _hoisted_2 = {
    key: 0,
    class: "input-prefix"
  };
  const _hoisted_3 = {
    key: 0,
    class: "prefix"
  };
  const _hoisted_4 = ["type", "value", "autofocus", "readonly", "disabled", "autocomplete", "placeholder"];
  const _hoisted_5 = {
    key: 1,
    class: "input-suffix"
  };
  const _hoisted_6 = {
    key: 0,
    class: "suffix"
  };
  const _hoisted_7 = { key: 3 };
  const _hoisted_8 = {
    key: 1,
    class: "input-append"
  };
  const _hoisted_9 = ["value", "cols", "rows"];
  const __default__ = vue.defineComponent({
    name: "hz-input"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      size: {
        type: String,
        default: "medium"
      },
      resize: {
        type: String,
        default: "both"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: String,
        default: "off"
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      clearable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: "请输入"
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      cols: {
        type: Number,
        default: 30
      },
      rows: {
        type: Number,
        default: 2
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change"],
    setup(__props, { emit: emitEvent }) {
      const props = __props;
      const isFocus = vue.ref(false), isHover = vue.ref(false), focusColor = vue.ref("rgba(64, 158, 255, 1)"), passWord = vue.ref(true);
      const showClear = vue.computed(() => {
        return props.clearable && !props.readonly && !props.disabled && props.modelValue && (isFocus.value || isHover.value);
      });
      const handleInput = (e) => {
        emitEvent("update:modelValue", e.target.value);
      };
      const handleFocus = (e) => {
        isFocus.value = true;
        emitEvent("focus", e);
      };
      const handleBlur = (e) => {
        isFocus.value = false;
        emitEvent("blur", e);
      };
      const handleClear = () => {
        emitEvent("update:modelValue", "");
      };
      const handleChange = (e) => {
        emitEvent("change", e.target.value);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass([
            props.type === "textarea" ? "hz-textarea" : "hz-input",
            __props.size
          ])
        }, [
          __props.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock("section", {
            key: 0,
            class: "wrap",
            onMouseenter: _cache[2] || (_cache[2] = ($event) => isHover.value = true),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => isHover.value = false)
          }, [
            _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
              vue.renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
            ])) : vue.createCommentVNode("", true),
            vue.createElementVNode("section", {
              class: vue.normalizeClass(["input-wrap", {
                "hz-input-prefix": _ctx.$slots.prefix || __props.prefixIcon,
                "hz-input-suffix": _ctx.$slots.suffix || __props.suffixIcon || __props.clearable || __props.showPassword,
                "is-disabled": __props.disabled
              }]),
              style: vue.normalizeStyle({
                borderTopLeftRadius: _ctx.$slots.prepend ? 0 : null,
                borderBottomLeftRadius: _ctx.$slots.prepend ? 0 : null,
                borderTopRightRadius: _ctx.$slots.append ? 0 : null,
                borderBottomRightRadius: _ctx.$slots.append ? 0 : null,
                borderColor: isFocus.value ? focusColor.value : null
              })
            }, [
              _ctx.$slots.prefix || __props.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
                _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
                  vue.renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
                ])) : __props.prefixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
                  key: 1,
                  name: __props.prefixIcon
                }, null, 8, ["name"])) : vue.createCommentVNode("", true)
              ])) : vue.createCommentVNode("", true),
              vue.createElementVNode("input", vue.mergeProps({
                type: __props.showPassword ? passWord.value ? "password" : "text" : __props.type,
                value: __props.modelValue,
                autofocus: __props.autofocus,
                readonly: __props.readonly,
                disabled: __props.disabled,
                autocomplete: __props.autocomplete,
                placeholder: __props.placeholder
              }, _ctx.$attrs, {
                onFocus: handleFocus,
                onBlur: handleBlur,
                onInput: handleInput,
                onChange: handleChange
              }), null, 16, _hoisted_4),
              _ctx.$slots.suffix || __props.suffixIcon || showClear.value || __props.showPassword ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
                _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, [
                  vue.renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
                ])) : __props.suffixIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
                  key: 1,
                  name: __props.suffixIcon
                }, null, 8, ["name"])) : showClear.value ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
                  key: 2,
                  name: "close-bold",
                  onClick: vue.withModifiers(handleClear, ["stop"])
                }, null, 8, ["onClick"])) : __props.showPassword ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, [
                  passWord.value ? (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
                    key: 0,
                    name: "browse",
                    onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => passWord.value = false, ["stop"]))
                  })) : (vue.openBlock(), vue.createBlock(vue.unref(index.default), {
                    key: 1,
                    name: "hide",
                    onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => passWord.value = true, ["stop"]))
                  }))
                ])) : vue.createCommentVNode("", true)
              ])) : vue.createCommentVNode("", true)
            ], 6),
            _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8, [
              vue.renderSlot(_ctx.$slots, "append", {}, void 0, true)
            ])) : vue.createCommentVNode("", true)
          ], 32)) : (vue.openBlock(), vue.createElementBlock("textarea", vue.mergeProps({
            key: 1,
            value: __props.modelValue,
            cols: __props.cols,
            rows: __props.rows,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange
          }, _ctx.$attrs), null, 16, _hoisted_9))
        ], 2);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
