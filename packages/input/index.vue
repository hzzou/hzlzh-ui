<template>
    <div class="hz-input">
        <input :value="modelValue" @input="handleInput"  />
        <slot></slot>
    </div>
</template>
<script lang="ts" name="hz-input" setup>
    // 全局指令v-model vue官方定义的props是modelValue
    const props = defineProps({
        modelValue: {
            type: [String, Number],
            default: ""
        }
    });
    // 全局指令v-model vue官方定义的emit是update:modelValue
    const emitEvent = defineEmits(["update:modelValue"]);

    const handleInput = (e) => {
        emitEvent("update:modelValue", e.target.value);
    }

</script>

<style lang="scss" scoped>
    .hz-input{
        input{
            border: 1px solid #dedede;
            font-size: 20px;
        }
    }
</style>
