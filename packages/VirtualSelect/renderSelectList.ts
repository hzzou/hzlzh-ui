import {defineComponent, h} from "vue";
import { ItemObj } from "./index.vue";

export default defineComponent({
    name: "RenderSelectList",
    emits: ["scroll", "select"],
    setup(props, context){

        const handleSelect = (data: ItemObj, index: number)=>{
            context.emit("select", data, index);
        };

        const handleScroll = (event: any)=>{
            context.emit("scroll", event);
        };

        return{
            handleSelect,
            handleScroll,
        };
    },
    render(context){
        const {width, itemHeight, height, selected, itemData} = context.$attrs;

        const list = itemData.map(ele=>{
            return  h("li", {
                class: {"item": true, "selected": ele.index === selected},
                style:{
                    width: width+"px",
                    height: itemHeight+"px",
                    lineHeight: itemHeight+"px",
                    top: ele.top+"px"
                },
                onClick: ()=>{
                    this.handleSelect(ele.data, ele.index);
                },
            }, ele.data.name);
        });

        return h("ul", {
            class: "list",
            style: {
                height: height+"px"
            },
            onScroll: (event)=>{
                this.handleScroll(event);
            }
        }, list);
    }
});
