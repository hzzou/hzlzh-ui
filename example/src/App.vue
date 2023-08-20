<template>
    <div>
        <hz-button type="primary" size="large">1221</hz-button>
        <hz-input v-model="custValue" ></hz-input>
        <hz-dialog v-model="showDialog" width="400px" height="500px" >
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
    </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
    const custName = ref(""),
    custValue = ref("test"),
    showDialog = ref(true);

    const handleValue = (val)=> {
        console.log(val);
        custValue.value = val;
    }

    watchEffect(()=>{
        console.log(custValue);
    })

    // let m = 100_123_234_223;
    // console.log(m)

</script>


