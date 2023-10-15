
<template>
    <div>
        <hz-input v-model="cusName" @input="handleInput" @change="handleChange"></hz-input>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const cusName = ref("");

    const handleChange = (value)=>{
        console.log(value);
    };

    // @input事件是v-model时触发的
    const handleInput = (event)=>{
        console.log(event);
    };
</script>


