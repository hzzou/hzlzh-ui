<template>
    <div>
        <hz-row>
            <hz-button @click="handleClick" type="primary" round size="large">按钮</hz-button>
            <hz-button @click="handleClick" type="primary" round size="large">按钮</hz-button>
            <hz-button type="primary" :loading="loading" >加载</hz-button>
        </hz-row>

    </div>
</template>
<script name="button" setup>
    import { ref } from "vue";

    const loading = ref(true);

    setTimeout(()=>{
        loading.value = false;
    }, 3000);
    const handleClick = (event)=>{
        console.log(event);
    };
</script>

<style scoped>

</style>
