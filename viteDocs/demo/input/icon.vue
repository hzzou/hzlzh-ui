<template>
    <div>
        <hz-row gutter="10" align="center">
            <div>属性方式:</div>
            <hz-input v-model="input1" prefixIcon="user"></hz-input>
            <hz-input v-model="input2" suffixIcon="search"></hz-input>
        </hz-row>
        <hz-row gutter="10" align="center">
            <div>slot方式:</div>
            <hz-input v-model="input3">
                <template #prefix>
                    <hz-icon name="search"></hz-icon>
                </template>
            </hz-input>
            <hz-input v-model="input4">
                <template #suffix>
                    <hz-icon name="user"></hz-icon>
                </template>
            </hz-input>
        </hz-row>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const input1 = ref(""),
          input2 = ref(""),
          input3 = ref(""),
          input4 = ref("");
</script>

<style scoped>

</style>

