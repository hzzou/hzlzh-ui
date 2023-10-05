<template>
    <div>
        <hz-input v-model="cusName" showPassword></hz-input>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const cusName = ref("");
</script>


