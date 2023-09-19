<template>
    <div>
        <hz-virtual-table align="center" headerAlign="center" :table-data="tableData">

        </hz-virtual-table>
    </div>
</template>
<script name="virtualTable" setup>

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
</script>

<style scoped>

</style>
