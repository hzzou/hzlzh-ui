define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const RenderTableHeader = vue.defineComponent({
    name: "RenderTableHeader",
    render(context) {
      const { headKey, fixHead, headerAlign, itemHeight } = context.$attrs;
      const thHead = headKey.map((item, idx) => {
        return vue.h("li", {
          key: idx + Math.random(),
          class: "th",
          style: {
            width: 1 / headKey.length * 100 + "%",
            height: itemHeight + "px"
          }
        }, `${item}`);
      });
      return vue.h(
        "header",
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
  exports.default = RenderTableHeader;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});