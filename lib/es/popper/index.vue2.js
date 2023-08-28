import { defineComponent, ref, openBlock, createElementBlock, renderSlot, withDirectives, createElementVNode, normalizeStyle, createTextVNode, toDisplayString, vShow } from "vue";
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "content" };
const __default__ = defineComponent({
  name: "hz-popper"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    place: {
      type: String,
      default: "bottom"
    },
    width: {
      type: [String, Number],
      default: 150
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const showPopper = ref(false), popperStyle = ref(null), tipColor = ref(null), tipCoverColor = ref(null), popperRef = ref(null);
    const handleEnter = () => {
      showPopper.value = true;
      const rect = document.querySelector("#hzPopper").getClientRects()[0];
      console.log(rect);
      switch (props.place) {
        case "bottom":
          popperStyle.value = {
            left: "50%",
            transform: "translateX(-50%)",
            top: rect.height + 5 + "px"
          };
          tipColor.value = {
            left: "50%",
            transform: "translateX(-50%)",
            borderBottomColor: "#dedede",
            top: "-10px"
          };
          tipCoverColor.value = {
            left: "50%",
            transform: "translateX(-50%)",
            borderBottomColor: "#fff",
            top: "-8px"
          };
          break;
        case "bottom-start":
          popperStyle.value = {
            left: 0,
            top: rect.height + 5 + "px"
          };
          tipColor.value = {
            left: "5px",
            borderBottomColor: "#dedede",
            top: "-10px"
          };
          tipCoverColor.value = {
            left: "5px",
            borderBottomColor: "#fff",
            top: "-8px"
          };
          break;
        case "bottom-end":
          popperStyle.value = {
            right: 0,
            top: rect.height + 5 + "px"
          };
          tipColor.value = {
            right: "5px",
            borderBottomColor: "#dedede",
            top: "-10px"
          };
          tipCoverColor.value = {
            right: "5px",
            borderBottomColor: "#fff",
            top: "-8px"
          };
          break;
        case "top":
          popperStyle.value = {
            left: "50%",
            transform: "translateX(-50%)",
            bottom: rect.height + 5 + "px"
          };
          tipColor.value = {
            left: "50%",
            transform: "translateX(-50%)",
            borderTopColor: "#dedede",
            bottom: "-10px"
          };
          tipCoverColor.value = {
            left: "50%",
            transform: "translateX(-50%)",
            borderTopColor: "#fff",
            bottom: "-8px"
          };
          break;
        case "top-start":
          popperStyle.value = {
            left: 0,
            bottom: rect.height + 5 + "px"
          };
          tipColor.value = {
            left: "5px",
            borderTopColor: "#dedede",
            bottom: "-10px"
          };
          tipCoverColor.value = {
            left: "5px",
            borderTopColor: "#fff",
            bottom: "-8px"
          };
          break;
        case "top-end":
          popperStyle.value = {
            right: 0,
            bottom: rect.height + 5 + "px"
          };
          tipColor.value = {
            right: "5px",
            borderTopColor: "#dedede",
            bottom: "-10px"
          };
          tipCoverColor.value = {
            right: "5px",
            borderTopColor: "#fff",
            bottom: "-8px"
          };
          break;
        case "left":
          popperStyle.value = {
            top: "50%",
            transform: "translateY(-50%)",
            right: rect.width + 5 + "px"
          };
          tipColor.value = {
            top: "50%",
            transform: "translateY(-50%)",
            borderLeftColor: "#dedede",
            right: "-10px"
          };
          tipCoverColor.value = {
            top: "50%",
            transform: "translateY(-50%)",
            borderLeftColor: "#fff",
            right: "-8px"
          };
          break;
        case "left-start":
          popperStyle.value = {
            top: 0,
            right: rect.width + 5 + "px"
          };
          tipColor.value = {
            top: "5px",
            borderLeftColor: "#dedede",
            right: "-10px"
          };
          tipCoverColor.value = {
            top: "5px",
            borderLeftColor: "#fff",
            right: "-8px"
          };
          break;
        case "left-end":
          popperStyle.value = {
            bottom: 0,
            right: rect.width + 5 + "px"
          };
          tipColor.value = {
            bottom: "5px",
            borderLeftColor: "#dedede",
            right: "-10px"
          };
          tipCoverColor.value = {
            bottom: "5px",
            borderLeftColor: "#fff",
            right: "-8px"
          };
          break;
        case "right":
          popperStyle.value = {
            top: "50%",
            transform: "translateY(-50%)",
            left: rect.width + 5 + "px"
          };
          tipColor.value = {
            top: "50%",
            transform: "translateY(-50%)",
            borderRightColor: "#dedede",
            left: "-10px"
          };
          tipCoverColor.value = {
            top: "50%",
            transform: "translateY(-50%)",
            borderRightColor: "#fff",
            left: "-8px"
          };
          break;
        case "right-start":
          popperStyle.value = {
            top: 0,
            left: rect.width + 5 + "px"
          };
          tipColor.value = {
            top: "5px",
            borderRightColor: "#dedede",
            left: "-10px"
          };
          tipCoverColor.value = {
            top: "5px",
            borderRightColor: "#fff",
            left: "-8px"
          };
          break;
        case "right-end":
          popperStyle.value = {
            bottom: 0,
            left: rect.width + 5 + "px"
          };
          tipColor.value = {
            bottom: "5px",
            borderRightColor: "#dedede",
            left: "-10px"
          };
          tipCoverColor.value = {
            bottom: "5px",
            borderRightColor: "#fff",
            left: "-8px"
          };
          break;
      }
    };
    const handleLeave = () => {
      showPopper.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "hz-popper",
        ref_key: "popperRef",
        ref: popperRef,
        id: "hzPopper",
        onMouseenter: handleEnter,
        onMouseleave: handleLeave
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        withDirectives(createElementVNode("div", {
          class: "hz-content",
          style: normalizeStyle({ width: __props.width + "px", ...popperStyle.value })
        }, [
          createElementVNode("div", {
            class: "tip",
            style: normalizeStyle(tipColor.value)
          }, null, 4),
          createElementVNode("div", {
            class: "tip-cover",
            style: normalizeStyle(tipCoverColor.value)
          }, null, 4),
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ], true)
          ]),
          createElementVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "content", {}, void 0, true)
          ])
        ], 4), [
          [vShow, showPopper.value]
        ])
      ], 544);
    };
  }
});
export {
  _sfc_main as default
};
