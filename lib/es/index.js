import Button from "./button/index.vue.js";
import Input from "./input/index.vue.js";
import Dialog from "./dialog/index.vue.js";
const prefix = "hz-";
const components = [
  { name: prefix + "button", value: Button },
  { name: prefix + "input", value: Input },
  { name: prefix + "dialog", value: Dialog }
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
  Input,
  index as default
};
