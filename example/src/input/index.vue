<template>
    <div>
        <hz-row gutter="10" justify="center" align="center">
            <div>属性方式:</div>
            <hz-input v-model="input1" prefixIcon="user"></hz-input>
            <hz-input v-model="input2" type="textarea" @change="handleChange" ></hz-input>
        </hz-row>
    </div>
</template>
<script name="input" setup>
    import { ref } from "vue";

    const input1 = ref("test"),
          input2 = ref("");

    const handleClick = (event)=>{
        console.log(event);
    };

    const handleChange = (value)=>{
        console.log(value);
    };
</script>

<style scoped>

</style>
