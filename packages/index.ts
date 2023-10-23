import Button from "./button";
import Input from "./input";
import Dialog from "./dialog";
import Popper from "./popper";
import Icon from "./icon";
import VirtualTable from "./virtualTable";
import VirtualSelect from "./VirtualSelect";

// 布局
import {Row, Col} from "./layout";

import { App } from "vue";

// 添加组件前缀(全局引入时使用)
const prefix = "hz-";
const components = [
	{name: prefix+"row", value: Row},
	{name: prefix+"col", value: Col},
	{name: prefix+"button", value: Button},
	{name: prefix+"input", value: Input},
	{name: prefix+"dialog", value: Dialog},
	{name: prefix+"popper", value: Popper},
	{name: prefix+"icon", value: Icon},
	{name: prefix+"virtual-table", value: VirtualTable},
	{name: prefix+"virtual-select", value: VirtualSelect},
];

// 作单独引入或者配套插件自动引入
export {
	Row,
	Col,
	Button,
	Input,
	Dialog,
	Popper,
	Icon,
	VirtualTable,
	VirtualSelect
};

// 使用app.use的方式全局注册
export default {
	install(app: App){
		components.map(item => {
			app.component(item.name, item.value);
		});
	}
};
