----
# **Button 按钮**
<hz-button name="hzlzh" type="primary" ></hz-button>

```vue
<template>
    <hz-button :name="custName" type="primary"></hz-button>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const custName = reactive('hzlzh');
</script>
```

| <div style="width: 100px">属性名</div> | <div style="width: 150px">说明</div> | <div style="width: 100px">类型</div> | <div style="width: 150px">默认值</div> |
|-------------------------------------|------------------------------------|------------------------------------|-------------------------------------|
| name                                | 按钮名字                               | String                             | 按钮                                  |

