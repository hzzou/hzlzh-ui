<template>
    <div>
      <hz-dialog @open="handleOpen" v-model="showDialog" width="400px" height="500px" >
            <template #header>
                3223434
            </template>
            <template #default>
                中间
            </template>
            <template #footer>
                地下
            </template>
      </hz-dialog>
        <hz-button @click="showDialog = true">按钮</hz-button>
    </div>
</template>
<script name="dialog" setup>
    import { ref } from "vue";

    const showDialog = ref(false);

    const handleOpen = (data)=>{
        console.log(data);
    };

</script>

<style scoped>

</style>
