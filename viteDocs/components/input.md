
# **input输入框**
::: tip 说明
通过鼠标或键盘输入字符
:::

## **基础用法**
::: preview
demo-preview=../demo/input/base.vue
:::

## **禁用状态**
::: preview  || 通过 disabled 属性指定是否禁用 input 组件
demo-preview=../demo/input/disabled.vue
:::

## **可以清空**
::: preview  || 使用clearable属性即可得到一个可清空的输入框
demo-preview=../demo/input/clear.vue
:::

## **带icon的输入框**
::: preview  带有图标标记输入类型
demo-preview=../demo/input/icon.vue
:::

## **尺寸**
::: preview
demo-preview=../demo/input/size.vue
:::

## **Input API**
### **Input Attributes**
<style>
@import url("../css/style.scss");
</style>

| 属性名                 | 说明     | 类型             | 默认值                            |
|---------------------|--------|----------------|--------------------------------|
| model-value/v-model | 绑定的值   | String, Number | null                           |
| type                | 类型     | String         | text(textarea或其他原生input的type值) |
| max                 | 最大值    | String, Number | 100                            |
| min                 | 最小值    | String, Number | 0                              |
| step                | 步长     | String, Number | 1                              |
| max-length          | 最大输入长度 | String, Number | 100                            |
| min-length          | 最小输入长度 | String, Number | 1                              |

### **Input Events**
| 名称     | 说明                | 类型       | 参数    |
|--------|-------------------|----------|-------|
| focus  | 当选择器的输入框获得焦点时触发   | Function | event |
| blur   | 当选择器的输入框失去焦点时触发   | Function | event |
| change | 仅当 modelValue 改变时 | Function | event |
| input  | 在 Input 值改变时触发    | Function | event |

### **Input Slots**
| 插槽名称    | 说明       |
|---------|----------|
| default | 	自定义默认内容 |
