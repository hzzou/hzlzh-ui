"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const RenderTableHeader = vue.defineComponent({
  name: "RenderTableHeader",
  emits: ["headerSelect"],
  setup(props, { emit, attrs, slots }) {
    const handleSelect = () => {
      emit("headerSelect");
    };
    return {
      handleSelect
    };
  },
  render(context) {
    const {
      headKey,
      fixHead,
      headerAlign,
      itemHeight,
      openSelect,
      multiSelect,
      checkHeader,
      selected,
      itemCount
    } = context.$attrs;
    const thHead = headKey.map((item, idx) => {
      return vue.h("li", {
        key: idx,
        class: "th",
        style: {
          width: 1 / headKey.length * 100 + "%",
          height: itemHeight + "px"
        }
      }, `${item}`);
    });
    let checkInput = null;
    const inputRef = vue.ref(null);
    if (openSelect) {
      if (multiSelect) {
        checkInput = vue.h("li", {
          class: "th",
          height: itemHeight + "px"
        }, [
          vue.h("input", {
            class: "checkbox",
            type: "checkbox",
            checked: selected.length === itemCount ? true : false,
            indeterminate: selected.length > 0 && selected.length < itemCount ? true : false,
            ref: inputRef,
            onClick: () => {
              if (selected.length > 0 && selected.length < itemCount) {
                inputRef.value.checked = false;
              }
            }
          })
        ]);
      } else {
        checkInput = vue.h("li", {
          class: "th",
          height: itemHeight + "px"
        }, [
          vue.h("input", {
            class: "checkbox",
            type: "checkbox",
            indeterminate: checkHeader,
            ref: inputRef,
            onClick: () => {
              if (checkHeader) {
                inputRef.value.checked = false;
              }
            }
          })
        ]);
      }
    }
    return vue.h(
      "header",
      {
        class: "thead",
        style: {
          position: fixHead ? "sticky" : "relative",
          "pointer-events": !multiSelect && !checkHeader ? "none" : "auto"
        },
        onClick: () => {
          openSelect && this.handleSelect();
        }
      },
      [
        vue.h("ul", {
          class: "tr",
          style: {
            textAlign: headerAlign
          }
        }, [checkInput, thHead])
      ]
    );
  }
});
exports.default = RenderTableHeader;
