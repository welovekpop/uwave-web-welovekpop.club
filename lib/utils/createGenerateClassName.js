"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

function createGenerateClassName() {
  var counter = 0;

  function getNextUnknownName() {
    counter += 1;
    return "Component" + counter;
  }

  function generateClassName(rule, styleSheet) {
    var componentName = styleSheet.options.name || getNextUnknownName();

    if (rule.key === 'root') {
      return componentName;
    }

    return componentName + "-" + rule.key;
  }

  return generateClassName;
}
//# sourceMappingURL=createGenerateClassName.js.map
