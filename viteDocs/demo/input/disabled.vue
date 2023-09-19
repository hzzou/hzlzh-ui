<template>
    <div>
        <hz-input :disabled="true" v-model="cusName"></hz-input>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const cusName = ref("hzzou");
</script>

<style scoped>

</style>
