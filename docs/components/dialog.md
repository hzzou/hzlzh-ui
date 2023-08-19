
# **Dialog 弹窗**
在保留当前页面状态的情况下，告知用户并承载相关操作
##
<hz-dialog :modal="true" :model="true"></hz-dialog>


```vue
<template>
    <hz-button :name="custName" type="primary"></hz-button>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const custName = reactive('hzlzh');
</script>
```
