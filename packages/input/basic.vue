<template>
    <div>
        <input v-model="props.inputValue" />
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
	name: "basicInput"
};
</script>
<script lang="ts" setup>
const props = defineProps({
	inputValue: {type: [String, Number], default: 123}
});
</script>

<style lang="scss" scoped>

</style>
