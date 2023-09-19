<template>
    <div>
        <hz-input :clearable="true" v-model="cusName"></hz-input>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const cusName = ref("");
</script>

<style scoped>

</style>
