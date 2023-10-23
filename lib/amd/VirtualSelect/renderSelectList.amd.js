define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const RenderSelectList = vue.defineComponent({
    name: "RenderSelectList",
    emits: ["scroll", "select"],
    setup(props, context) {
      const handleSelect = (data, index) => {
        context.emit("select", data, index);
      };
      const handleScroll = (event) => {
        context.emit("scroll", event);
      };
      return {
        handleSelect,
        handleScroll
      };
    },
    render(context) {
      const { width, itemHeight, height, selected, itemData } = context.$attrs;
      const list = itemData.map((ele) => {
        return vue.h("li", {
          class: { "item": true, "selected": ele.index === selected },
          style: {
            width: width + "px",
            height: itemHeight + "px",
            lineHeight: itemHeight + "px",
            top: ele.top + "px"
          },
          onClick: () => {
            this.handleSelect(ele.data, ele.index);
          }
        }, ele.data.name);
      });
      return vue.h("ul", {
        class: "list",
        style: {
          height: height + "px"
        },
        onScroll: (event) => {
          this.handleScroll(event);
        }
      }, list);
    }
  });
  exports.default = RenderSelectList;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
