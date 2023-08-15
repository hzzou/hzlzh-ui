import Button from "./button";
import Input from "./input";
import { App } from "vue";

// 添加组件前缀(全局引入时使用)
const prefix = "hz-";
const components = [
    {name: prefix+"button", value: Button},
    {name: prefix+"input", value: Input}
];

// 作单独引入或者配套插件自动引入
export {
	Button,
	Input
};

// 使用app.use的方式全局注册
export default {
    install(app: App){
        components.map(item => {
            app.component(item.name, item.value)
        })
    }
}
