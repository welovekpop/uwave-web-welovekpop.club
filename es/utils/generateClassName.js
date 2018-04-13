export default function generateClassName(rule, styleSheet) {
  var componentName = styleSheet.options.name;

  if (rule.key === 'root') {
    return componentName;
  }

  return componentName + "-" + rule.key;
}
//# sourceMappingURL=generateClassName.js.map
