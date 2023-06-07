import { defineComponent as u, openBlock as p, createElementBlock as r, withDirectives as a, createElementVNode as i, vModelText as s, renderSlot as d } from "vue";
const m = {
  name: "basicInput"
}, f = /* @__PURE__ */ u({
  ...m,
  props: {
    inputValue: { type: [String, Number], default: 123 }
  },
  setup(n) {
    const e = n;
    return (l, t) => (p(), r("div", null, [
      a(i("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.inputValue = o)
      }, null, 512), [
        [s, e.inputValue]
      ]),
      d(l.$slots, "default")
    ]));
  }
});
export {
  f as default
};
