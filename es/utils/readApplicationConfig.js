export default function readApplicationConfig(container) {
  if (container === void 0) {
    container = '#u-wave-config';
  }

  try {
    return JSON.parse(document.querySelector(container).textContent);
  } catch (e) {
    return {};
  }
}
//# sourceMappingURL=readApplicationConfig.js.map
