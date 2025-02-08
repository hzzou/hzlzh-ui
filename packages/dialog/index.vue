<template>
    <div v-if="modelValue" class="hz-dialog" @click="hideDialog" >
        <div v-if="modal" :class="{'hz-modal': modal}">
            <div class="hz-content" @click.stop :style="{width: width+'px', height: height+'px'}" >
                <div class="header">
                    <slot name="header">{{title}}</slot>
                    <Icon class="close" name="close" @click.stop="hideDialog" />
                </div>
                <div class="main">
                    <slot></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        <div v-else class="hz-wrap" @click.stop>
            <div class="hz-content" :style="{width: width+'px', height: height+'px'}" >
                <div class="header">
                    <slot name="header">{{title}}</slot>
                    <Icon class="close" name="close" @click.stop="hideDialog" />
                </div>
                <div class="main">
                    <slot></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script name="hz-dialog" setup lang="ts">
    import Icon from "../icon";
    import { watch } from "vue";
    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        modal: { // 蒙层
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: ""
        },
        width: {
            type: [String, Number],
            default: "500"
        },
        height: {
            type: [String, Number],
            default: "300"
        }
    });

    // 事件
    const emitEvent = defineEmits(["open", "close", "update:modelValue"]);

    watch(()=>props.modelValue, (newVal)=>{
        if(newVal){
            // 触发打开事件
            emitEvent("open", {show: true});
        }
        else{
            // 触发关闭事件
            emitEvent("close", {show: false});
        }
    }, {immediate: true});

    // 隐藏dialog
    const hideDialog = () => {
        emitEvent("update:modelValue");
    };

</script>

<style scoped lang="scss">
    .hz-dialog{
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        .hz-wrap, .hz-modal{
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .hz-content{
                background: #fff;
                border-radius: 3px;
                box-sizing: border-box;
                box-shadow: 0 0 5px 2px #aaa;
                width: 50%;
                height: 50%;
                display: flex;
                flex-direction: column;
                padding: 10px;
                .header, .footer{
                    flex: 0 1 10%;
                }
                .header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .close{
                        cursor: pointer;
                    }
                }
                .main{
                    flex: 1 1 80%;
                    padding: 10px 0;
                }
                .footer{
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
        .hz-modal{
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
</style>
