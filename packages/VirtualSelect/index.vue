<template>
    <div class="hz-virtual-select" :style="{width: width+'px'}">
        <input class="input" v-model="inputValue" @blur="handleBlur" @focus="handleOption" :style="{width: width+'px', height: itemHeight+'px'}" type="text">
        <div class="icon" @click="handleOption">
            <Icon v-if="showOption" name="arrow-up-bold"></Icon>
            <Icon v-else name="arrow-down-bold"></Icon>
        </div>
        <div class="tip" :style="{display: showOption ? 'block' : 'none', top: itemHeight+'px'}"></div>
        <div class="tip-cover" :style="{display: showOption ? 'block': 'none', top: (itemHeight+1)+'px'}"></div>
        <div class="option"
             :style="{
                display: showOption ? 'block' : 'none',
                width: width+'px',
                height: height+'px',
                top: (itemHeight+10)+'px'
            }"
        >
	        <RenderSelectList @scroll="handleScroll" @select="handleSelect"  v-bind="{width, itemHeight, height, selected, itemData}"></RenderSelectList>
        </div>
    </div>
</template>
<script name="hz-virtual-select" setup lang="ts">
    import Icon from "../icon";
    import RenderSelectList from "./renderSelectList";
    import { onBeforeMount, ref } from "vue";

    export interface ItemObj{
        name: string;
        value?: string | number;
        [key: string]: string | number | boolean | null | undefined | symbol | object | unknown;
    }
    export interface ListObj{
        data?: ItemObj;
        top?: number;
        index?: number;
    }
    export interface SelectProps{
        height?: number;
        itemHeight?: number;
        width?: number;
        listData: Array<ItemObj>;
    }

    const props = withDefaults(defineProps<SelectProps>(), {
        height: 200,
        itemHeight: 40,
        width: 300,
        listData: ()=>[]
    });

    const showOption = ref(false),
          inputValue = ref(""),
          selected = ref(-1), // 有索引为0的
          scrollOffset = ref(0),
          itemData = ref<ListObj[]>([]);

    const emitEvent = defineEmits(["scroll", "select"]);

    onBeforeMount(()=>{
        getClientData();
    });

    // 图标控制下拉框显隐控制
    const handleOption = ()=>{
        showOption.value = !showOption.value;
    };

    // 选择事件
    const handleSelect = (data: ItemObj, index: number)=>{
        emitEvent("select", data);
        inputValue.value = data.name;
        selected.value = index;

        setTimeout(()=>{
            showOption.value = false;
        }, 500);
    };
    // 滚动事件
    const handleScroll = (event: any)=>{
        emitEvent("scroll", event);
        const {scrollTop} = event!.target;

        scrollOffset.value = scrollTop;
        getClientData();
    };

    //
    const handleBlur = (event: any)=>{
        const {value} = event!.target;

        setTimeout(()=>{
            // 第一次没进行选择
            if(inputValue.value === value){
                showOption.value = false;
            }
        }, 500);

    };

    // 获取可视区元素数据
    const getClientData = ()=>{
        const startIdx = Math.floor(scrollOffset.value/props.itemHeight),
              finialStart = Math.max(0, startIdx - 2),
              numVisible = Math.ceil(props.height/props.itemHeight),
              endIdx = Math.min(props.listData.length, startIdx + numVisible + 2);

        // 每次扔之前清空，确保只渲染当前区间的数据
        itemData.value = [];
        for(let i = finialStart; i < endIdx; i++){
            itemData.value.push({
                index: i,
                data:props.listData[i],
                top: props.itemHeight * i
            });
        }
    };

</script>

<style scoped lang="scss">
	  @import "../../assets/common/css/var.scss";
    .hz-virtual-select{
        position: relative;
        .input{
            border: 1px solid #dedede;
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 16px;
            padding-left: 10px;
        }
        .icon{
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
        .tip, .tip-cover{
            width: 0;
            height: 0;
            border: 5px solid transparent;
            position: absolute;
            left: 10px;
            z-index: 100;
        }
        .tip{
            border-bottom-color: #dedede;
        }
        .top-cover{
            border-bottom-color: #fff;
        }
        .option{
            position: absolute;
            border: 1px solid #dedede;
            border-radius: 5px;
            box-sizing: border-box;
            max-height: 300px;
            z-index: 10000;
            background-color: #fff;
            .list{
                margin: 0;
                padding: 0;
                width: 100%;
                position: relative;
	            overflow: auto;
	            // 子组件上的, 需要v-deep穿透
                ::v-deep(.item){
                    list-style: none;
                    border-bottom: 1px solid #dedede;
	                position: absolute;
	                padding: 0 10px;
	                &:hover{
		                background: #ddd;
		                color: $-color-primary;
	                }
	                &:last-of-type{
		                border-bottom: none;
	                }
                }
	            ::v-deep(.selected){
		            background-color: $-color-primary !important;
		            color: $-color-white !important;
	            }
            }
        }
    }
</style>
