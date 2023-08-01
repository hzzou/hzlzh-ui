<template>
    <div>
        <hz-button :name="custName"></hz-button>
        <hz-input @update:model="handleValue" :value="custValue">12212</hz-input>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    const custName = ref("hgg"),
    custValue = ref("tets");

    const handleValue = (val)=> {
        console.log(val);
        custValue.value = val;
    }

</script>


