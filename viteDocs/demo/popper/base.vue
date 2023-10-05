<template>
    <div>
        <hz-popper @show="handleShow" place="top-start" width="160">
            <hz-icon  name="help" color="#999" size="20"></hz-icon>
            <template #content>small, default, large</template>
        </hz-popper>
    </div>
</template>
<script setup name="popper">
    const handleShow = (data)=> {
        console.log(data);
    };
</script>
