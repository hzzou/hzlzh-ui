<template>
    <div>
       <hz-popper @show="handleShow">
            <hz-icon name="help" color="#999" size="20"></hz-icon>
            <template #content>small, default, large</template>
        </hz-popper>
    </div>
</template>
<script name="popper" setup>
    const handleShow = (data)=> {
        console.log(data);
    };
</script>

<style scoped>

</style>
