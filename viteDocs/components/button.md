
# **Button 按钮**
::: tip 说明
常用的操作按钮
:::

## **基础用法**
::: preview 基础的按钮用法 || 使用type、plain、round和circle属性来定义Button的样式
demo-preview=../demo/button/base.vue
:::

## **禁用状态**
::: preview 按钮不可用状态 || 使用disabled属性来定义按钮是否可用,接受一个Boolean值
demo-preview=../demo/button/disabled.vue
:::

## **图标按钮**
::: preview  || 传入icon-name属性即可,参考icon组件的name属性
demo-preview=../demo/button/icon.vue
:::

## **加载中**
::: preview 点击按钮后进行数据加载，按钮显示加载中的状态 || 只需设置loading属性为true即可
demo-preview=../demo/button/load.vue
:::

## **不同尺寸**
::: preview 默认尺寸是medium，还有small和large || 通过size属性设置
demo-preview=../demo/button/size.vue
:::

<style>
@import url("../css/style.scss");
</style>

## **Button API**
### **Button Attributes**

| 属性名         | 说明        | 类型      | 默认值     | 可选值                                        |
|-------------|-----------|---------|---------|--------------------------------------------|
| size        | 按钮大小      | String  | medium  | small, default, large                      |
| type        | 按钮类型      | String  | default | default, primary, success, warning, danger |
| native-type | 原生type属性  | String  | button  | button, submit, reset                      |
| icon-name   | 图标组件的中文名  | String  | ""      | 看Icon组件的name值                              |
| loading     | 是否为加载中状态  | Boolean | false   |                                            |
| round       | 是否为圆角按钮   | Boolean | false   |                                            |
| circle      | 是否为圆形按钮   | Boolean | false   |                                            |
| plain       | 是否为朴素按钮   | Boolean | false   |                                            |
| disabled    | 按钮是否为禁用状态 | Boolean | false   |                                            |

### **Button Events**
| 名称    | 说明   | 类型       | 参数    |
|-------|------|----------|-------|
| click | 点击事件 | Function | event |

### **Button Slots**
| 插槽名称    | 说明      |
|---------|---------|
| default | 自定义默认内容 |

