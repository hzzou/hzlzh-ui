<template>
    <div v-if="modelValue" class="hz-dialog" @click="hideDialog" >
        <div v-if="modal" :class="{'hz-modal': modal}">
            <div class="hz-content" @click.stop :style="{width, height}" >
                <div class="header">
                    <slot name="header">{{title}}</slot>
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
            <div class="hz-content" :style="{width, height}" >
                <div class="header">
                    <slot name="header">{{title}}</slot>
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
            default: ''
        },
        width: {
            type: [String, Number],
            default: ""
        },
        height: {
            type: [String, Number],
            default: ""
        }
    });


    const emitEvent = defineEmits(["update:modelValue"]);

    // 隐藏dialog
    const hideDialog = () => {
        emitEvent("update:modelValue");
    }

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
                box-shadow: 0 0 5px 2px #aaa;
                width: 50%;
                height: 50%;
                display: flex;
                flex-direction: column;
                padding: 10px;
                .header, .footer{
                    flex: 0 1 10%;
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
