<template>
    <div>
        <hz-row gutter="10" align="center">
            <hz-col span="8">
                <hz-input v-model="input1" size="small"></hz-input>
            </hz-col>
            <hz-col span="8">
                <hz-input v-model="input2" size="medium"></hz-input>
            </hz-col>
            <hz-col span="8">
                <hz-input v-model="input3" size="large"></hz-input>
            </hz-col>
        </hz-row>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const input1 = ref(""),
          input2 = ref(""),
          input3 = ref("");
</script>


