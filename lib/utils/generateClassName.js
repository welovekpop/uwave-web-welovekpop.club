"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateClassName;

function generateClassName(rule, styleSheet) {
  var componentName = styleSheet.options.name;

  if (rule.key === 'root') {
    return componentName;
  }

  return componentName + "-" + rule.key;
}
//# sourceMappingURL=generateClassName.js.map
