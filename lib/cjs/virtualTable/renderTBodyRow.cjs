"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const RenderTBodyRow = vue.defineComponent({
  name: "RenderBodyRow",
  render(context) {
    const { stripe, item, itemHeight, align } = context.$attrs;
    const listItem = Object.keys(item.data), list = listItem.map((ele, idx) => {
      return vue.h("li", {
        key: idx,
        class: "td",
        style: {
          width: 1 / listItem.length * 100 + "%",
          textAlign: align
        }
      }, `${item.data[ele]}`);
    });
    return vue.h("ul", {
      class: stripe ? item.index % 2 ? "tr item-even" : "tr item-odd" : "tr",
      style: {
        height: itemHeight + "px",
        top: item.top + "px"
      }
    }, [list]);
  }
});
exports.default = RenderTBodyRow;
