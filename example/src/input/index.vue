<template>
    <div>
<!--        <hz-input type="text" :disabled="true" v-model="custValue" clearable max-length="23">-->
<!--            &lt;!&ndash;            <template #prepend>hzlzh</template>&ndash;&gt;-->
<!--            &lt;!&ndash;            <template #append>1232</template>&ndash;&gt;-->
<!--            &lt;!&ndash;            <template #prefix>3232</template>&ndash;&gt;-->
<!--            &lt;!&ndash;            <template #suffix>3232</template>&ndash;&gt;-->
<!--        </hz-input>-->

        <hz-row gutter="10" align="center">
            <div>属性方式:</div>
            <hz-input v-model="input1" prefixIcon="user"></hz-input>
            <hz-input v-model="input2" suffixIcon="search"></hz-input>
        </hz-row>
    </div>
</template>
<script name="input" setup>
    import { ref } from "vue";

    const custValue = ref("test");

    const handleClick = (event)=>{
        console.log(event);
    };
</script>

<style scoped>

</style>
