<template>
    <div>
        <div>按钮组件测试</div>
        <slot></slot>
    </div>
</template>
<script name="basicButton" setup lang="ts">
const props = defineProps({
	name: { type: String, default: "hzlzh"}
});

</script>

<style scoped>

</style>
