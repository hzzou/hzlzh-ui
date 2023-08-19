
# **input输入框**
通过鼠标或键盘输入字符
##
<hz-input model="hzlzh"></hz-input>

```vue
<template>
    <hz-input :model="cusName"></hz-input>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const cusName = reactive('hzlzh');
</script>
```
## **Input API**
### **Input Attributes**
<style>
@import url("../common/style.css");
</style>

| 属性名     | 说明   | 类型             | 默认值  |
|---------|------|----------------|------|
| v-model | 绑定的值 | String, Number | null |

### **Input Event**
| 名称                | 说明         | 类型       |
|-------------------|------------|----------|
| update:modelValue | model值更新事件 | Function |
