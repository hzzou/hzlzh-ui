
<template>
    <div>
        <hz-row gutter="10" align="center">
            <hz-input v-model="input1" size="small"></hz-input>
            <hz-input v-model="input2" size="medium"></hz-input>
            <hz-input v-model="input3" size="large"></hz-input>
        </hz-row>

    </div>
</template>
<script setup>
    import { ref } from "vue";

    const input1 = ref(""),
          input2 = ref(""),
          input3 = ref("");
</script>


