<template>
    <div class="app">
<!--        <hz-button type="primary" size="large">1221</hz-button>
        <hz-input type="text" max-length="2"  ></hz-input>-->
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

<!--        <hz-popper @show="handleShow">
            <hz-icon name="help" color="#999" size="20"></hz-icon>
            <template #content>small, default, large</template>
        </hz-popper>-->
        <hz-virtual-table align="center" headerAlign="center" :table-data="tableData">

        </hz-virtual-table>

    </div>
</template>
<script setup lang="ts">
    import { ref, watchEffect } from "vue";
    const custName = ref(""),
          custValue = ref("test"),
          showDialog = ref(true);

    const tableData = [],
          len = 10000;
    for (let i = 0; i < len; i++) {
        tableData.push({
            name: "name_" + (i + 1),
            date: "date_" + (i + 1),
            address: "address_" + (i + 1),
            state: "state_" + (i + 1),
        });
    }

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
    margin-top: 100px;
    padding: 10px;
}
</style>


