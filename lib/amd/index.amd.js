define(["exports", "./button/index.vue.amd", "./input/index.vue.amd"], function(exports, index$1, index$2) {
  "use strict";
  const prefix = "hz-";
  const components = [
    { name: prefix + "button", value: index$1.default },
    { name: prefix + "input", value: index$2.default }
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
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
