
# **Button 按钮**
::: tip
常用的操作按钮
:::

##
<hz-button type="primary" size="large" >hzlzh</hz-button>

```vue
<template>
    <hz-button size="large" type="primary"></hz-button>
</template>
```
<style>
@import url("../common/style.scss");
</style>
## **Button API**
### **Button Attributes**
| 属性名  | 说明   | 类型     | 默认值     |
|------|------|--------|---------|
| name | 按钮名字 | String | 按钮      |
 | size | 按钮大小 | String | default |
 | type | 按钮类型 | String | default |

### **Button Events**
| 名称    | 说明   | 类型       |
|-------|------|----------|
| click | 点击事件 | Function |

### **Button Slots**
| 插槽名称    | 说明       |
|---------|----------|
| default | 	自定义默认内容 |

