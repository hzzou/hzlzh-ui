
# **Dialog 弹窗**
::: tip
在保留当前页面状态的情况下，告知用户并承载相关操作
:::

##
<hz-button type="primary" @click="showModal = true">展示弹窗</hz-button>
<hz-dialog v-model="showModal" title="标题">
    <template #default>
            内容
    </template>
    <template #footer>
        <hz-button @click="showModal = false">取消</hz-button>
        <hz-button type="primary" @click="showModal = false">确定</hz-button>
    </template>
</hz-dialog>

<script lang="ts" setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
<style lang="scss">
    .hz-dialog .footer{
        .hz-button{
            margin-left: 10px;
        }
    }
</style>
```vue
<template>
    <hz-button type="primary" @click="showModal = true">展示弹窗</hz-button>
    <hz-dialog v-model="showModal" title="2121">
        <template #default>
            内容
        </template>
        <template #footer>
            <hz-button @click="showModal = false">取消</hz-button>
            <hz-button type="primary" @click="showModal = false">确定</hz-button>
        </template>
    </hz-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
```
<style>
@import url("../common/style.scss");
</style>
## **Dialog API**
### **Dialog Attributes**
| 属性名                 | 说明   | 类型            | 默认值   |
|---------------------|------|---------------|-------|
| model-value/v-model | 绑定的值 | Boolean       | false |
| modal               | 弹窗蒙层 | Boolean       | true  |
| title               | 弹窗标题 | String        | ''    |
| width               | 弹窗宽度 | String,Number | ''    |
| height              | 弹窗高度 | String,Number | ''    |

### **Dialog Events**
| 名称    | 说明            | 类型       |
|-------|---------------|----------|
| click | 弹窗暂时还没添加自定义事件 | Function |

### **Dialog Slots**
| 插槽名称    | 说明                          |
|---------|-----------------------------|
| default | 	自定义默认内容                    |
| header  | 	对话框标题的内容,会替换标题部分，但不会移除关闭按钮 |
| footer  | 	弹窗按钮操作区的内容                 |
