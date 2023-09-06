import Button from "./button/index.vue.js";
import Input from "./input/index.vue.js";
import Dialog from "./dialog/index.vue.js";
import Popper from "./popper/index.vue.js";
import Icon from "./icon/index.vue.js";
import VirtualTable from "./virtualTable/index.vue.js";
const prefix = "hz-";
const components = [
  { name: prefix + "button", value: Button },
  { name: prefix + "input", value: Input },
  { name: prefix + "dialog", value: Dialog },
  { name: prefix + "popper", value: Popper },
  { name: prefix + "icon", value: Icon },
  { name: prefix + "virtual-table", value: VirtualTable }
];
const index = {
  install(app) {
    components.map((item) => {
      app.component(item.name, item.value);
    });
  }
};
export {
  Button,
  Dialog,
  Icon,
  Input,
  Popper,
  VirtualTable,
  index as default
};
