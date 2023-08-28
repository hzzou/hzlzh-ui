
# **Popper 气泡卡片**
::: tip
默认hover过相关元素时进行tooltip提示
:::

##
<hz-popper width="160">
    <hz-icon name="help" color="#999" size="20"></hz-icon>
    <template #content>small, default, large</template>
</hz-popper>

```vue
<template>
    <hz-popper width="160">
        <hz-icon name="help" color="#999" size="20"></hz-icon>
        <template #content>small, default, large</template>
    </hz-popper>
</template>
```
<style>
@import url("../common/style.scss");
</style>
## **Popper API**
### **Popper Attributes**
| 属性名   | 说明   | 类型             | 默认值                                                                                                                                                                                                                                                                           |
|-------|------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| place | 显示位置 | String         | bottom <hz-popper width="250" place="bottom-start"><hz-icon name="help" color="#999" size="20"></hz-icon><template v-slot:content>bottom, bottom-start, bottom-end, top, top-start, top-end, left, left-start, left-end, right, right-start, right-end</template></hz-popper> |
| width | 宽度   | String, Number | 150                                                                                                                                                                                                                                                                           |
| title | 标题   | String         | ""                                                                                                                                                                                                                                                                            |

### **Popper Events**
| 名称   | 说明    | 类型       |
|------|-------|----------|
| show | 显示时触发 | Function |
| hide | 隐藏时触发 | Function |

### **Popper Slots**
| 插槽名称    | 说明        |
|---------|-----------|
| default | 自定义默认包裹内容 |
| title   | popper标题  |
| content | popper内容  |
