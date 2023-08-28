define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const _hoisted_1 = { class: "title" };
  const _hoisted_2 = { class: "content" };
  const __default__ = vue.defineComponent({
    name: "hz-popper"
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    emits: ["show", "hide"],
    setup(__props, { emit: emitEvent }) {
      const props = __props;
      const showPopper = vue.ref(false), popperStyle = vue.ref(null), tipColor = vue.ref(null), tipCoverColor = vue.ref(null), popperRef = vue.ref(null);
      const handleEnter = (event) => {
        showPopper.value = true;
        emitEvent("show", { show: true, event });
        const rect = document.querySelector("#hzPopper").getClientRects()[0];
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
      const handleLeave = (event) => {
        showPopper.value = false;
        emitEvent("hide", { hide: true, event });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "hz-popper",
          ref_key: "popperRef",
          ref: popperRef,
          id: "hzPopper",
          onMouseenter: handleEnter,
          onMouseleave: handleLeave
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "hz-content",
            style: vue.normalizeStyle({ width: __props.width + "px", ...popperStyle.value })
          }, [
            vue.createElementVNode("div", {
              class: "tip",
              style: vue.normalizeStyle(tipColor.value)
            }, null, 4),
            vue.createElementVNode("div", {
              class: "tip-cover",
              style: vue.normalizeStyle(tipCoverColor.value)
            }, null, 4),
            vue.createElementVNode("div", _hoisted_1, [
              vue.renderSlot(_ctx.$slots, "title", {}, () => [
                vue.createTextVNode(vue.toDisplayString(__props.title), 1)
              ], true)
            ]),
            vue.createElementVNode("div", _hoisted_2, [
              vue.renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ])
          ], 4), [
            [vue.vShow, showPopper.value]
          ])
        ], 544);
      };
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
