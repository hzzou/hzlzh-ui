
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

## **密码显隐**
::: preview  || 使用show-password属性即可得到一个可控制显隐的密码框
demo-preview=../demo/input/password.vue
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

| 属性名                    | 说明                                    | 类型             | 默认值                                     |
|------------------------|---------------------------------------|----------------|-----------------------------------------|
| model-value/v-model    | 绑定的值                                  | String, Number | null                                    |
| type                   | 类型                                    | String         | text(textarea或其他原生input的type值)          |
| size                   | 输入框尺寸,除开textarea类型时有效                 | String         | medium (可选值small/medium/large)          |
| resize                 | textarea类型的拉伸控制                       | string         | both (可选值none/both/horizontal/vertical) |
| prefixIcon/prefix-icon | 输入框前缀图标                               | string         | 无(可选值为icon组件的所有name)                    |
| suffixIcon/suffix-icon | 输入框后缀图标                               | string         | 无(可选值为icon组件的所有name)                    |
| clearable              | 是否可以清空                                | Boolean        | false                                   |
| show-word-limit        | 是否显示输入字数统计, 只在text类型和textarea类型时有效    | Boolean        | false                                   |
| placeholder            | 输入框占位文本                               | String         | 请输入                                     |
| show-password          | 是否显示切换密码展示类型图标                        | Boolean        | false                                   |
| cols                   | 输入框列数,只对textarea类型有效                  | Number         | 30                                      |
| rows                   | 输入框行数,只对textarea类型有效                  | Number         | 5                                       |
| max                    | 设置最大值(原生属性)                           | String, Number | 100                                     |
| min                    | 设置最小值(原生属性)                           | String, Number | 0                                       |
| step                   | 设置步长(原生属性)                            | String, Number | 1                                       |
| maxlength              | 最大输入长度(原生属性)                          | String, Number | 100                                     |
| minlength              | 最小输入长度(原生属性,除开textarea类型,需submit事件触发) | String, Number | 1                                       |
| disabled               | 禁用(原生属性)                              | Boolean        | false                                   |
| autofocus              | 自动获取焦点(原生属性)                          | Boolean        | false                                   |
| autocomplete           | 自动补全(原生属性)                            | String         | off(可选值on, off)                         |
| readonly               | 是否只读(原生属性)                            | Boolean        | false                                   |

### **Input Events**
| 名称     | 说明                          | 类型       | 参数    |
|--------|-----------------------------|----------|-------|
| focus  | 当选择器的输入框获得焦点时触发             | Function | event |
| blur   | 当选择器的输入框失去焦点时触发             | Function | event |
| change | 仅当 modelValue 改变时           | Function | value |
| input  | 在 Input 值改变时触发              | Function | event |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发 | Function | event |

### **Input Slots**
| 插槽名称    | 说明                             |
|---------|--------------------------------|
| prefix  | 	输入框头部内容(在input框内),只对text类型有效  |
| suffix  | 	输入框尾部内容(在input框内),只对text类型有效  |
| prepend | 	输入框前置内容(不在input框内),只对text类型有效 |
| append  | 	输入框后置内容(不在input框内),只对text类型有效 |
