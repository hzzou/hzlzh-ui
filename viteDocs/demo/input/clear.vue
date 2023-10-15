<template>
    <div>
        <hz-input :clearable="true" @clear="handleClear" v-model="cusName"></hz-input>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const cusName = ref("");

    const handleClear = (e)=>{
        console.log(e);
    };
</script>

<style scoped>

</style>
