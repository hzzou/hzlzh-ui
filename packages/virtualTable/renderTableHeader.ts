import { defineComponent, h, defineEmits, ref } from "vue";

export default defineComponent({
    name: "RenderTableHeader",
    emits: ["headerSelect"],
    setup(props, { emit, attrs, slots }){

        const handleSelect = ()=>{
            emit("headerSelect");
        };

        return{
            handleSelect
        };
    },
    render(context){
        const {headKey, fixHead, headerAlign, itemHeight,
            openSelect, multiSelect, checkHeader, selected, itemCount} = context.$attrs;

        // 头部
        const thHead = headKey.map((item, idx)=>{
            return h("li", {
                key: idx,
                class: "th",
                style: {
                    width: (1 / headKey.length) * 100 + "%",
                    height: itemHeight+"px"
                }
            }, `${item}`);
        });

        // 开启选择
        let checkInput = null;
        const inputRef = ref(null);
        if(openSelect){
            if(multiSelect){
                checkInput = h("li", {
                    class: "th",
                    height: itemHeight+"px"
                }, [
                    h("input", {
                        class: "checkbox",
                        type: "checkbox",
                        checked: selected.length === itemCount ? true : false,
                        indeterminate: selected.length > 0 && selected.length < itemCount ? true : false,
                        ref: inputRef,
                        onClick: ()=>{
                            if(selected.length > 0 && selected.length < itemCount){
                                inputRef.value.checked = false;
                            }
                        }
                    })
                ]);
            }
            else{
                checkInput = h("li", {
                    class: "th",
                    height: itemHeight+"px"
                }, [
                    h("input", {
                        class: "checkbox",
                        type: "checkbox",
                        indeterminate: checkHeader,
                        ref: inputRef,
                        onClick: ()=>{
                            // 点击表头时，单选避免全选
                            if(checkHeader){
                                inputRef.value.checked = false;
                            }
                        }
                    })
                ]);
            }
        }

        return h(
            "header",
            {
                class: "thead",
                style: {
                    position: fixHead ? "sticky" : "relative",
                    "pointer-events": !multiSelect && !checkHeader ? "none" : "auto"
                },
                onClick: ()=>{
                    openSelect && this.handleSelect();
                }
            },
            [
                h("ul", {
                    class: "tr",
                    style: {
                        textAlign: headerAlign
                    }
                }, [checkInput,thHead])
            ]
        );
    }
});
