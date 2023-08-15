<template>
    <div>
        <hz-button type="primary" size="large"></hz-button>
        <hz-input @updateModel="handleValue" :model="custValue"></hz-input>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    const custName = ref(""),
    custValue = ref("test");

    const handleValue = (val)=> {
        console.log(val);
        custValue.value = val;
    }

    // let m = 100_123_234_223;
    // console.log(m)

</script>


