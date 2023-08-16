import Button from "./button/index.vue.js";
import Input from "./input/index.vue.js";
const prefix = "hz-";
const components = [
  { name: prefix + "button", value: Button },
  { name: prefix + "input", value: Input }
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
  Input,
  index as default
};
