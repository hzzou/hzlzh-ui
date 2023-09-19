"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$1 = require("./button/index.vue.cjs");
const index$2 = require("./input/index.vue.cjs");
const index$3 = require("./dialog/index.vue.cjs");
const index$4 = require("./popper/index.vue.cjs");
const index$5 = require("./icon/index.vue.cjs");
const index$6 = require("./virtualTable/index.vue.cjs");
const index_vue_vue_type_script_lang = require("./layout/row/index.vue.cjs");
require("./layout/row/index.vue2.cjs");
const prefix = "hz-";
const components = [
  { name: prefix + "row", value: index_vue_vue_type_script_lang.default },
  { name: prefix + "button", value: index$1.default },
  { name: prefix + "input", value: index$2.default },
  { name: prefix + "dialog", value: index$3.default },
  { name: prefix + "popper", value: index$4.default },
  { name: prefix + "icon", value: index$5.default },
  { name: prefix + "virtual-table", value: index$6.default }
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
exports.VirtualTable = index$6.default;
exports.Row = index_vue_vue_type_script_lang.default;
exports.default = index;
