
# **Button 按钮**
常用的操作按钮
##
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
## **Button API**
### **Button Attributes**
<style>
@import url("../common/style.css");
</style>
| 属性名  | 说明   | 类型     | 默认值     |
|------|------|--------|---------|
| name | 按钮名字 | String | 按钮      |
 | size | 按钮大小 | String | default |
 | type | 按钮类型 | String | default |

### **Button Event**
| 名称    | 说明   | 类型       |
|-------|------|----------|
| click | 点击事件 | Function |

