<template>
	<div>
		<hz-virtual-select :list-data="selectData"></hz-virtual-select>
	</div>
</template>
<script name="virtualSelect" setup lang="ts">

    import { ref } from "vue";

    const selectData = ref([]);

    for(let i = 0; i < 100; i++){
        selectData.value.push({
            name: "name_" + (i + 1),
            value: "value_" + (i + 1)
        });
    }
</script>

<style scoped>

</style>

