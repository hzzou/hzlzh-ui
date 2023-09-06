define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const RenderHeader = vue.defineComponent({
    name: "RenderHeader",
    render(context) {
      console.log(context.$attrs);
      const { headKey, fixHead, headerAlign, itemHeight } = context.$attrs;
      const thHead = headKey.map((item, idx) => {
        return vue.h("li", {
          key: idx + Math.random(),
          style: {
            width: 1 / headKey.length * 100 + "%",
            height: itemHeight
          }
        }, `${item}`);
      });
      return vue.h(
        "div",
        {
          class: "thead",
          style: {
            position: fixHead ? "sticky" : "relative"
          }
        },
        [
          vue.h("ul", {
            class: "tr",
            style: {
              textAlign: headerAlign
            }
          }, [thHead])
        ]
      );
    }
  });
  exports.default = RenderHeader;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
