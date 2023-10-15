define(["exports", "vue"], function(exports, vue) {
  "use strict";
  const _sfc_main = vue.defineComponent({
    name: "hzCol",
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: "div"
      },
      offset: {
        type: Number,
        default: 0
      },
      pull: {
        type: Number,
        default: 0
      },
      push: {
        type: Number,
        default: 0
      }
    },
    render(context) {
      let classList = [];
      ["span", "offset", "pull", "push"].map((ele) => {
        classList.push(ele != "span" ? `hz-col-${ele}-${context[ele]}` : `hz-col-${context[ele]}`);
      });
      ["xs", "sm", "md", "lg", "xl"].map((ele) => {
        if (typeof context[ele] === "number") {
          classList.push(`hz-col-${ele}-${context[ele]}`);
        } else if (typeof context[ele] === "object") {
          let obj = context[ele];
          Object.keys(obj).map((prop) => {
            classList.push(
              prop !== "span" ? `hz-col-${ele}-${prop}-${obj[prop]}` : `hz-col-${ele}-${obj[prop]}`
            );
          });
        }
      });
      return vue.h(
        this.tag,
        {
          class: ["hz-col", classList]
        },
        vue.h(context.$slots.default)
      );
    }
  });
  exports.default = _sfc_main;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
