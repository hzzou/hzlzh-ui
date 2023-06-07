import { defineComponent as e, openBlock as n, createElementBlock as o, renderSlot as l, createElementVNode as r } from "vue";
const a = /* @__PURE__ */ r("div", null, "按钮组件测试", -1), s = e({
  name: "basicButton"
}), p = /* @__PURE__ */ e({
  ...s,
  props: {
    name: { type: String, default: "hzlzh" }
  },
  setup(c) {
    return (t, _) => (n(), o("div", null, [
      a,
      l(t.$slots, "default")
    ]));
  }
});
export {
  p as default
};
