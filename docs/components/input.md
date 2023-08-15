----
# **测试input**
<hz-input></hz-input>

```vue
<template>
    <hz-input :model="cusName"></hz-input>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const cusName = reactive('hzlzh');
</script>
```
