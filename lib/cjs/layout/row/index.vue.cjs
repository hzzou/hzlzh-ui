"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _sfc_main = vue.defineComponent({
  name: "hzRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    }
  },
  render(context) {
    const { tag, gutter, justify, align } = context.$props;
    const slotList = context.$slots.default(), slotEle = slotList.map((ele, idx) => {
      return vue.h(ele, {
        key: idx,
        style: {
          marginLeft: `${gutter / 2}px`,
          marginRight: `${gutter / 2}px`
        }
      });
    });
    return vue.h(
      `${tag}`,
      {
        class: [
          "hz-row"
        ],
        style: {
          justifyContent: justify,
          alignItems: align,
          marginBottom: gutter + "px"
        }
      },
      slotEle
    );
  }
});
exports.default = _sfc_main;
