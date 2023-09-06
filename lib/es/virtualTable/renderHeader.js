import { defineComponent, h } from "vue";
const RenderHeader = defineComponent({
  name: "RenderHeader",
  render(context) {
    console.log(context.$attrs);
    const { headKey, fixHead, headerAlign, itemHeight } = context.$attrs;
    const thHead = headKey.map((item, idx) => {
      return h("li", {
        key: idx + Math.random(),
        style: {
          width: 1 / headKey.length * 100 + "%",
          height: itemHeight
        }
      }, `${item}`);
    });
    return h(
      "div",
      {
        class: "thead",
        style: {
          position: fixHead ? "sticky" : "relative"
        }
      },
      [
        h("ul", {
          class: "tr",
          style: {
            textAlign: headerAlign
          }
        }, [thHead])
      ]
    );
  }
});
export {
  RenderHeader as default
};
