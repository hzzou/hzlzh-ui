<template>
    <div class="app">
<!--        <hz-button type="primary" size="large">1221</hz-button>
        <hz-input v-model="custValue" ></hz-input>-->
<!--        <hz-dialog v-model="showDialog" width="400px" height="500px" >
            <template #header>
                3223434
            </template>
            <template #default>
                中间
            </template>
            <template #footer>
                地下
            </template>
        </hz-dialog>-->
<!--        <hz-popper>-->
<!--&lt;!&ndash;            <hz-icon name="help" color="#999" size="20"></hz-icon>&ndash;&gt;-->
<!--            <hz-button type="primary" size="large">1221</hz-button>-->
<!--            <template #content>hover的内容322324244422332322332</template>-->
<!--        </hz-popper>-->

        <hz-popper @show="handleShow">
            <hz-icon name="help" color="#999" size="20"></hz-icon>
            <template #content>small, default, large</template>
        </hz-popper>

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
    };

    watchEffect(()=>{
        console.log(custValue);
    });

    // let m = 100_123_234_223;
    // console.log(m)

    const handleShow = (data)=> {
        console.log(data);
    };

</script>
<style>
.app{
    padding: 100px;
}
</style>


