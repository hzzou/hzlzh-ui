import { defineComponent, h } from "vue";
const _sfc_main = defineComponent({
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
    return h(
      this.tag,
      {
        class: ["hz-col", classList]
      },
      h(context.$slots.default)
    );
  }
});
export {
  _sfc_main as default
};
