"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$1 = require("./button/index.vue.cjs");
const index$2 = require("./input/index.vue.cjs");
const index$3 = require("./dialog/index.vue.cjs");
const index$4 = require("./popper/index.vue.cjs");
const index$5 = require("./icon/index.vue.cjs");
const prefix = "hz-";
const components = [
  { name: prefix + "button", value: index$1.default },
  { name: prefix + "input", value: index$2.default },
  { name: prefix + "dialog", value: index$3.default },
  { name: prefix + "popper", value: index$4.default },
  { name: prefix + "icon", value: index$5.default }
];
const index = {
  install(app) {
    components.map((item) => {
      app.component(item.name, item.value);
    });
  }
};
exports.Button = index$1.default;
exports.Input = index$2.default;
exports.Dialog = index$3.default;
exports.Popper = index$4.default;
exports.Icon = index$5.default;
exports.default = index;
