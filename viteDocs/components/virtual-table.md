
# **VirtualTable 虚拟表格**
:::tip
虚拟表格，主要用于数据量过多的渲染
:::

##
<hz-virtual-table @scroll="handleScroll" align="center" headerAlign="center" :table-data="tableData"></hz-virtual-table>

<script lang="ts" setup>
    const tableData = [], len = 10000;
    for(let i = 0; i < len; i++){
      tableData.push({
          name: "name_"+(i+1),
          date: "date_"+(i+1),
          address: "adddress_"+(i+1),
          state: "state_"+(i+1)
      });
    };

    const handleScroll = (data)=>{
        console.log(data);
    };
</script>

```vue
<hz-virtual-table @scroll="handleScroll" align="center" headerAlign="center" :table-data="tableData"></hz-virtual-table>
<script lang="ts" setup>
    const tableData = [], len = 10000;
    for(let i = 0; i < len; i++) {
      tableData.push({
        name: 'name_' + (i + 1),
        date: 'date_' + (i + 1),
        address: 'adddress_' + (i + 1),
        state: 'state_' + (i + 1)
      });
    }

    const handleScroll = (data)=>{
        console.log(data);
    };
}
</script>
```
<style>
@import "../common/style.scss";
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
