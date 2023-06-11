<template>
    <div class="basicInput">
        <input v-model="props.inputValue" />
        <slot></slot>
    </div>
</template>
<script lang="ts" name="hz-input" setup>
const props = defineProps({
	inputValue: {type: [String, Number], default: 123}
});
</script>

<style lang="scss" scoped>
    .basicInput{
        background-color: #f0f;
        input{
            font-size: 20px;
        }
    }
</style>
