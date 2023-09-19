
# **VirtualTable 虚拟表格**
:::tip 说明
虚拟表格，主要用于数据量过多的渲染,只渲染表格可视区
:::

## **基本用法**
::: preview
demo-preview=../demo/virtualTable/base.vue
:::

<style>
@import "../css/style.scss";
</style>

## **VirtualTable API**
### **VirtualTable Attributes**
| 属性名         | 说明              | 类型      | 默认值   |
|-------------|-----------------|---------|-------|
| itemHeight  | 虚拟表格每行高度        | Number  | 40    |
| height      | 虚拟表格高度 ｜ Number | 400     |
| showHeader  | 是否显示表头          | Boolean | true  |
| stripe      | 是否斑马纹           | Boolean | false |
| tableData   | 表格数据            | Array   | []    |
| fixHead     | 是否固定表头          | Boolean | true  |
| headerAlign | 表头对齐方式          | String  | left  |
| align       | 表格数据对齐方式        | String  | left  |

### **VirtualTable Events**
| 名称     | 说明        | 类型       |
|--------|-----------|----------|
| scroll | 表格数据滚动时触发 | Function |

### **VirtualTable Slots**
| 插槽名称  | 说明           |
|-------|--------------|
| empty | 没有数据时的插槽填写内容 |
