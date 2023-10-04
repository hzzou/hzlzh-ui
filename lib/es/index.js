import Button from "./button/index.vue.js";
import Input from "./input/index.vue.js";
import Dialog from "./dialog/index.vue.js";
import Popper from "./popper/index.vue.js";
import Icon from "./icon/index.vue.js";
import VirtualTable from "./virtualTable/index.vue.js";
import _sfc_main from "./layout/row/index.vue.js";
import "./layout/row/index.vue2.js";
import Col from "./layout/col/index.vue.js";
const prefix = "hz-";
const components = [
  { name: prefix + "row", value: _sfc_main },
  { name: prefix + "col", value: Col },
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
  Col,
  Dialog,
  Icon,
  Input,
  Popper,
  _sfc_main as Row,
  VirtualTable,
  index as default
};
