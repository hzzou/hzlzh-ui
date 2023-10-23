# **VirtualSelect 虚拟选择器**
:::tip 说明
虚拟选择器，主要用于数据量过多的下拉Select选择，只渲染下拉框可视区
:::

## **基本用法**
::: preview
demo-preview=../demo/virtualSelect/base.vue
:::

<style>
@import "../css/style.scss";
.vitepress-demo-preview__naive-ui__container{
    overflow: unset !important;
}
</style>

## **VirtualSelect API**
### **VirtualSelect Attributes**
| 属性名 | 说明               | 类型 | 默认值 |
|-------|------------------|------|-----|
| itemHeight | 虚拟Select高度和下拉框每行高度  | Number | 40  |
| height | 虚拟Select下拉框高度 | Number | 200 |
| width | 虚拟Select宽度和下拉框宽度 | Number | 300 |
| listData | 下拉框数据 | Array | [] |
