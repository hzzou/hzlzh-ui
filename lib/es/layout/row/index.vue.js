import { defineComponent, h } from "vue";
const _sfc_main = defineComponent({
  name: "hzRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    }
  },
  render(context) {
    const { tag, gutter, justify, align } = context.$props;
    const slotList = context.$slots.default(), slotEle = slotList.map((ele, idx) => {
      return h(ele, {
        key: idx,
        style: {
          marginLeft: `${gutter / 2}px`,
          marginRight: `${gutter / 2}px`
        }
      });
    });
    return h(
      `${tag}`,
      {
        class: [
          "hz-row"
        ],
        style: {
          justifyContent: justify,
          alignItems: align,
          marginBottom: gutter + "px"
        }
      },
      slotEle
    );
  }
});
export {
  _sfc_main as default
};
