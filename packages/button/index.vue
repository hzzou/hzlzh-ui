<template>
    <div class="hz-button">
        <button class="default" :class="classList">
            <slot>按钮</slot>
        </button>
    </div>
</template>
<script name="hz-button" setup lang="ts">
    import { computed } from "vue";

    const props = defineProps({
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: ""
        },
    });

    const classList = computed(()=>{
        if(props.size !== ""){
            return [props.type, props.size];
        }
        else{
            return [props.type];
        }
    });
</script>

<style scoped lang="scss">
    .hz-button{
        button{
            padding: 7px 14px;
            outline: none;
            border-width: 1px;
            border-radius: 5%;
            &.small{
                padding: 5px 10px;
            }
            &.large{
                padding: 8px 20px;
            }
            &.default{
                background: linear-gradient(#ccc, #eee 50%, #ccc);
                border-color: #ddd;
            }
            &.primary{
                background: linear-gradient(rgba(65, 154, 246, 0.9), #154ee6 50%, rgba(65, 154, 246, 0.9));;
                border-color: rgba(65, 154, 246, 0.8);
                color: #fff;
            }
        }
    }
</style>
