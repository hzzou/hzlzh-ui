define(["exports", "./button/index.vue.amd", "./input/index.vue.amd", "./dialog/index.vue.amd", "./popper/index.vue.amd", "./icon/index.vue.amd", "./virtualTable/index.vue.amd", "../assets/common/css/var.scss.amd", "./layout/row/index.vue.amd", "./layout/row/index.vue.amd2", "./layout/col/index.vue.amd"], function(exports, index$2, index$3, index$4, index$5, index$6, index$7, _var, index_vue_vue_type_script_lang, index_vue_vue_type_style_index_0_lang, index$1) {
  "use strict";
  const prefix = "hz-";
  const components = [
    { name: prefix + "row", value: index_vue_vue_type_script_lang.default },
    { name: prefix + "col", value: index$1.default },
    { name: prefix + "button", value: index$2.default },
    { name: prefix + "input", value: index$3.default },
    { name: prefix + "dialog", value: index$4.default },
    { name: prefix + "popper", value: index$5.default },
    { name: prefix + "icon", value: index$6.default },
    { name: prefix + "virtual-table", value: index$7.default }
  ];
  const index = {
    install(app) {
      components.map((item) => {
        app.component(item.name, item.value);
      });
    }
  };
  exports.Button = index$2.default;
  exports.Input = index$3.default;
  exports.Dialog = index$4.default;
  exports.Popper = index$5.default;
  exports.Icon = index$6.default;
  exports.VirtualTable = index$7.default;
  exports.Row = index_vue_vue_type_script_lang.default;
  exports.Col = index$1.default;
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
