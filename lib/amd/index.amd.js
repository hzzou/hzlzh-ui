define(["exports", "./button/index.vue.amd", "./input/index.vue.amd", "./dialog/index.vue.amd", "./popper/index.vue.amd", "./icon/index.vue.amd", "./virtualTable/index.vue.amd", "./layout/row/index.vue.amd", "./layout/row/index.vue.amd2"], function(exports, index$1, index$2, index$3, index$4, index$5, index$6, index_vue_vue_type_script_lang, index_vue_vue_type_style_index_0_lang) {
  "use strict";
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
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
