<template>
    <div class="basicButton">
        <div>按钮组件测试</div>
        <slot></slot>
    </div>
</template>
<script name="basicButton" setup lang="ts">
const props = defineProps({
	name: { type: String, default: "hzlzh"}
});

</script>

<style scoped lang="scss">
    .basicButton{
        background: #ff0;
        width: 100px;
        height: 100px;
    }
</style>
