
# **input输入框**
::: tip
通过鼠标或键盘输入字符
:::

##
<hz-input v-model="cusName"></hz-input>

<script setup>
import {ref} from "vue";
let cusName = "hzlzh";
</script>
```vue
<template>
    <hz-input v-model="cusName"></hz-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const cusName = ref('hzlzh');
</script>
```
## **Input API**
### **Input Attributes**
<style>
@import url("../common/style.scss");
</style>

| 属性名                 | 说明   | 类型             | 默认值  |
|---------------------|------|----------------|------|
| model-value/v-model | 绑定的值 | String, Number | null |

### **Input Events**
| 名称     | 说明                                     | 类型       |
|--------|----------------------------------------|----------|
| focus  | 当选择器的输入框获得焦点时触发                        | Function |
| blur   | 当选择器的输入框失去焦点时触发                        | Function |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | Function |
| input  | 在 Input 值改变时触发                         | Function |

### **Input Slots**
| 插槽名称    | 说明       |
|---------|----------|
| default | 	自定义默认内容 |
