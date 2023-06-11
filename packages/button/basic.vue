<template>
    <div class="basicButton">
        <button>121{{name}}</button>
        <slot></slot>
    </div>
</template>
<script name="hz-button" setup lang="ts">
const props = defineProps({
	name: { type: String, default: "按钮"},
    size: { type: String, default: "primary"}
});

</script>

<style scoped lang="scss">
    .basicButton{
        button{
            width: 100px;
            height: 50px;
        }
    }
</style>
