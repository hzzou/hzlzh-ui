
# **Dialog 弹窗**
::: tip 说明
在保留当前页面状态的情况下，告知用户并承载相关操作
:::

## **基本用法**
::: preview
demo-preview=../demo/dialog/base.vue
:::

<style>
@import url("../css/style.scss");
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
| 名称    | 说明          | 类型       |
|-------|-------------|----------|
| open  | 打开Dialog的会掉 | Function |
| close | 关闭Dialog的会掉 | Function |

### **Dialog Slots**
| 插槽名称    | 说明                          |
|---------|-----------------------------|
| default | 	自定义默认内容                    |
| header  | 	对话框标题的内容,会替换标题部分，但不会移除关闭按钮 |
| footer  | 	弹窗按钮操作区的内容                 |
