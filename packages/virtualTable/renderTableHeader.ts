import { defineComponent, h } from "vue";

export default defineComponent({
    name: "RenderTableHeader",
    render(context){
        const {headKey, fixHead, headerAlign, itemHeight} = context.$attrs;

        // 头部
        const thHead = headKey.map((item, idx)=>{
            return h("li", {
                key: idx+Math.random(),
                class: "th",
                style: {
                    width: (1 / headKey.length) * 100 + "%",
                    height: itemHeight+"px"
                }
            }, `${item}`);
        });

        return h(
            "header",
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
