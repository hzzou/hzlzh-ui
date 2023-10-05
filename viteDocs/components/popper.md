
# **Popper 气泡卡片**
::: tip 说明
默认hover过相关元素时进行tooltip提示
:::

## **基本用法**
::: preview
demo-preview=../demo/popper/base.vue
:::

<style>
@import url("../css/style.scss");
</style>

## **Popper API**
### **Popper Attributes**
| 属性名   | 说明   | 类型             | 默认值    | 可选值                                                                                                                  |
|-------|------|----------------|--------|----------------------------------------------------------------------------------------------------------------------|
| place | 显示位置 | String         | bottom | bottom, bottom-start, bottom-end, top, top-start, top-end, left, left-start, left-end, right, right-start, right-end |
| width | 宽度   | String, Number | 150    |                                                                                                                      |
| title | 标题   | String         | ""     |                                                                                                                      |

### **Popper Events**
| 名称   | 说明    | 类型       | 参数          |
|------|-------|----------|-------------|
| show | 显示时触发 | Function | show, event |
| hide | 隐藏时触发 | Function | hide, event |

### **Popper Slots**
| 插槽名称    | 说明        |
|---------|-----------|
| default | 自定义默认包裹内容 |
| title   | popper标题  |
| content | popper内容  |
