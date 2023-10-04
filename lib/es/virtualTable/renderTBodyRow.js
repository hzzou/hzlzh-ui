import { defineComponent, h } from "vue";
const RenderTBodyRow = defineComponent({
  name: "RenderBodyRow",
  emits: ["select"],
  setup(props, context) {
    const handleSelect = (item) => {
      context.emit("select", item);
    };
    return {
      handleSelect
    };
  },
  render(context) {
    const { stripe, item, itemHeight, align, openSelect, multiSelect, currentIdx, selected } = context.$attrs;
    const listItem = Object.keys(item.data), list = listItem.map((ele) => {
      return h("li", {
        key: ele,
        class: "td",
        style: {
          width: 1 / listItem.length * 100 + "%"
        }
      }, `${item.data[ele]}`);
    });
    let checkInput = null;
    if (openSelect) {
      if (multiSelect) {
        checkInput = h("li", {
          class: "td",
          height: itemHeight + "px"
        }, [
          h("input", {
            class: "checkbox",
            type: "checkbox",
            checked: selected.includes(item.index) ? true : false
          })
        ]);
      } else {
        checkInput = h("li", {
          class: "td",
          height: itemHeight + "px"
        }, [
          h("input", {
            class: "checkbox",
            type: "checkbox",
            checked: currentIdx === item.index ? true : false
          })
        ]);
      }
    }
    return h("ul", {
      class: stripe ? item.index % 2 ? "tr item-even" : "tr item-odd" : "tr",
      style: {
        height: itemHeight + "px",
        top: item.top + "px",
        textAlign: align
      },
      onClick: () => {
        openSelect && this.handleSelect(item);
      }
    }, [checkInput, list]);
  }
});
export {
  RenderTBodyRow as default
};
