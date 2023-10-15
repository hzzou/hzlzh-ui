<template>
    <div>
        <hz-row gutter="10" align="center">
            <hz-col span="4">
                <div>属性方式:</div>
            </hz-col>
            <hz-col span="10">
                <hz-input v-model="input1" prefix-icon="user"></hz-input>
            </hz-col>
            <hz-col span="10">
                <hz-input v-model="input2" suffixIcon="search"></hz-input>
            </hz-col>
        </hz-row>
        <hz-row gutter="10" align="center">
            <hz-col span="4">
                <div>slot方式:</div>
            </hz-col>
            <hz-col span="10">
                <hz-input v-model="input3">
                    <template #prefix>
                        <hz-icon name="search"></hz-icon>
                    </template>
                </hz-input>
            </hz-col>
            <hz-col span="10">
                <hz-input v-model="input4">
                    <template #suffix>
                        <hz-icon name="user"></hz-icon>
                    </template>
                </hz-input>
            </hz-col>
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

