import { defineComponent, h } from "vue";

export default defineComponent({
    name: "RenderBodyRow",
    render(context){
        // 没有明确在props中声明的但又要传递给子组件，则通过attrs
        const {stripe, item, itemHeight, align} = context.$attrs;

        const listItem = Object.keys(item.data),
            list = listItem.map((ele, idx)=>{
            return h("li", {
                key: idx,
                class: "td",
                style: {
                    width: (1 / listItem.length) * 100 + "%",
                    textAlign: align
                }
            }, `${item.data[ele]}`);
        });

        return h("ul", {
            class: stripe ? (item.index % 2 ? "tr item-even" : "tr item-odd") : "tr",
            style: {
                height: itemHeight+"px",
                top: item.top+"px"
            }
        }, [list]);
    }
});
