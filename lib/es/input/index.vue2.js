import { defineComponent, useAttrs, ref, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, normalizeStyle, createBlock, unref, mergeProps, withModifiers, toDisplayString } from "vue";
import Icon from "../icon/index.vue.js";
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
const _hoisted_4 = ["type", "value", "placeholder"];
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
const _hoisted_10 = {
  key: 2,
  class: "word-limit"
};
const __default__ = defineComponent({
  name: "hz-input"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      // textarea的拉伸控制
      type: String,
      default: "both"
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
    showWordLimit: {
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
      default: 5
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "clear"],
  setup(__props, { emit: emitEvent }) {
    const props = __props;
    const attrs = useAttrs(), isFocus = ref(false), isHover = ref(false), focusColor = ref("rgba(64, 158, 255, 1)"), passWord = ref(true);
    const showClear = computed(() => {
      return props.clearable && !attrs.readonly && !attrs.disabled && props.modelValue && (isFocus.value || isHover.value);
    });
    const wordVisible = computed(() => {
      return (props.type === "text" || props.type === "textarea") && !attrs.readonly && !attrs.disabled && !props.showPassword && props.showWordLimit && attrs.maxlength;
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
    const handleClear = (e) => {
      emitEvent("update:modelValue", "");
      emitEvent("clear", e);
    };
    const handleChange = (e) => {
      emitEvent("change", e.target.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.type === "textarea" ? "hz-textarea" : "hz-input",
          __props.size
        ])
      }, [
        __props.type !== "textarea" ? (openBlock(), createElementBlock("section", {
          key: 0,
          class: "wrap",
          onMouseenter: _cache[2] || (_cache[2] = ($event) => isHover.value = true),
          onMouseleave: _cache[3] || (_cache[3] = ($event) => isHover.value = false)
        }, [
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("span", _hoisted_1, [
            renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createElementVNode("section", {
            class: normalizeClass(["input-wrap", {
              "hz-input-prefix": _ctx.$slots.prefix || __props.prefixIcon,
              "hz-input-suffix": _ctx.$slots.suffix || __props.suffixIcon || __props.clearable || __props.showPassword,
              "is-disabled": _ctx.$attrs.disabled
            }]),
            style: normalizeStyle({
              borderTopLeftRadius: _ctx.$slots.prepend ? 0 : null,
              borderBottomLeftRadius: _ctx.$slots.prepend ? 0 : null,
              borderTopRightRadius: _ctx.$slots.append ? 0 : null,
              borderBottomRightRadius: _ctx.$slots.append ? 0 : null,
              borderColor: isFocus.value ? focusColor.value : null
            })
          }, [
            _ctx.$slots.prefix || __props.prefixIcon ? (openBlock(), createElementBlock("span", _hoisted_2, [
              _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_3, [
                renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
              ])) : __props.prefixIcon ? (openBlock(), createBlock(unref(Icon), {
                key: 1,
                name: __props.prefixIcon
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createElementVNode("input", mergeProps({
              type: __props.showPassword ? passWord.value ? "password" : "text" : __props.type,
              value: __props.modelValue,
              placeholder: __props.placeholder
            }, _ctx.$attrs, {
              onFocus: handleFocus,
              onBlur: handleBlur,
              onInput: handleInput,
              onChange: handleChange
            }), null, 16, _hoisted_4),
            _ctx.$slots.suffix || __props.suffixIcon || unref(showClear) || __props.showPassword ? (openBlock(), createElementBlock("span", _hoisted_5, [
              _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_6, [
                renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
              ])) : __props.suffixIcon ? (openBlock(), createBlock(unref(Icon), {
                key: 1,
                name: __props.suffixIcon
              }, null, 8, ["name"])) : unref(showClear) ? (openBlock(), createBlock(unref(Icon), {
                key: 2,
                name: "close-bold",
                onClick: withModifiers(handleClear, ["stop"])
              }, null, 8, ["onClick"])) : __props.showPassword ? (openBlock(), createElementBlock("span", _hoisted_7, [
                passWord.value ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  name: "browse",
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => passWord.value = false, ["stop"]))
                })) : (openBlock(), createBlock(unref(Icon), {
                  key: 1,
                  name: "hide",
                  onClick: _cache[1] || (_cache[1] = withModifiers(($event) => passWord.value = true, ["stop"]))
                }))
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ], 6),
          _ctx.$slots.append ? (openBlock(), createElementBlock("span", _hoisted_8, [
            renderSlot(_ctx.$slots, "append", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ], 32)) : (openBlock(), createElementBlock("textarea", mergeProps({
          key: 1,
          style: { resize: __props.resize },
          value: __props.modelValue,
          cols: __props.cols,
          rows: __props.rows,
          onInput: handleInput,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onChange: handleChange
        }, _ctx.$attrs), null, 16, _hoisted_9)),
        unref(wordVisible) ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(__props.modelValue.length + "/" + _ctx.$attrs.maxlength), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
