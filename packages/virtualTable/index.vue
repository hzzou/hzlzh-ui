<template>
    <div class="hz-virtual-table">
        <article class="table"
             @scroll="handleScroll"
             :style="{height: height+'px'}">
            <RenderTableHeader v-if="showHeader" v-bind="{headKey, itemHeight, headerAlign, fixHead}" />
            <section class="tbody" :style="{height: showHeader ? (height - itemHeight)+'px' : height+'px'}">
                <div v-if="itemData.length" >
                    <template v-for="item in itemData" :key="item.index">
                        <RenderTBodyRow v-bind="{item, stripe, itemHeight, align}" />
                    </template>
                </div>
                <div v-else class="default">
                    <slot name="empty">暂无数据</slot>
                </div>
            </section>
        </article>
    </div>
</template>
<script name="hz-virtual-table" setup lang="ts">
    import { onBeforeMount, ref } from "vue";
    import RenderTableHeader from "./renderTableHeader";
    import RenderTBodyRow from "./renderTBodyRow";

    const props = defineProps({
        itemHeight: {
            type: Number,
            default: 40
        },
        height: {
            type: Number,
            default: 400
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        stripe: {
            type: Boolean,
            default: false
        },
        tableData: {
            type: Array,
            default: ()=>[]
        },
        fixHead: {
            type: Boolean,
            default: true
        },
        style: {
            type: Object,
            default: ()=> {
                return {};
            }
        },
        headerAlign: {
            type: String,
            default: "left"
        },
        align: {
            type: String,
            default: "left"
        }
    });


    let scrollOffset = ref(0),
        itemCount = ref(0),
        headKey =  ref([]),
        itemData = ref([]);

    const emitEvent = defineEmits(["scroll"]);

    // 刚进来时调用一次
    onBeforeMount(()=>{
        if(props.tableData.length){
            itemCount.value = props.tableData.length;
            headKey.value = Object.keys(props.tableData[0]);
        }
        getClientChildren();
    });

    // 获取距离顶部的滚动距离
    // 滚动事件不能添加到tbody,会影响fixHead固定头部的设置
    const handleScroll = (event)=>{
        emitEvent("scroll",{event: event});
        const {scrollTop} = event.target;
        scrollOffset.value = scrollTop;

        getClientChildren();
    };

    // 获取可视区元素的数据
    const getClientChildren = ()=>{
        const startIdx = Math.floor(scrollOffset.value / props.itemHeight),
              finialStartIdx = Math.max(0, startIdx - 2),
              numVisible = Math.ceil(props.height / props.itemHeight),
              endIdx = Math.min(itemCount.value, startIdx + numVisible + 2);

        // 每次扔之前先清空,确保只渲染选定区间的数据
        itemData.value = [];
        for(let i = finialStartIdx; i < endIdx; i++){
            const item = {
                index: i,
                data: props.tableData[i],
                top: props.showHeader ? props.itemHeight + props.itemHeight * i : props.itemHeight * i
            };
            itemData.value.push(item);
        }
    };
</script>

<style lang="scss" scoped>
    .hz-virtual-table{
        border: 1px solid #dedede;
        color: #333;
        width: 100%;
        .table{
            position: relative;
            overflow: auto;
            display: flex;
            flex-direction: column;
            width: 100%;
            ::v-deep(.thead), ::v-deep(.tbody){
                width: 100%;
                .tr{
                    display: flex;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    .th,.td{
                        padding: 10px;
                        box-sizing: border-box;
                        border-right: 1px solid #999;
                        line-height: 1em;
                        margin: 0;
                        &:last-of-type{
                            border-right: none;
                        }
                    }
                }
            }
            ::v-deep(.thead){
                top: 0;
                z-index: 10000;
                .tr{
                    background: #dedede;
                    .th{
                        font-weight: bold;
                        list-style: none;
                    }
                }
            }
            ::v-deep(.tbody){
                .default{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #999;
                }
                .tr {
                    list-style: none;
                    position: absolute;
                    border-bottom: 1px solid #dedede;
                    &:last-of-type {
                        border-bottom: none;
                    }
                    .td {
                        border-color: #dedede;
                    }
                }
                .item-odd {
                    background-color: #fff;
                }
                .item-even {
                    background-color: #eee;
                }
            }
        }
    }
</style>
