import { bindActionCreators } from 'redux';
import { debugApplyTheme, debugResetTheme } from './actions/ThemeActionCreators';
export default function experimentalThemePlugin(instance) {
  // `.store` will not yet be available when this is .use()d.
  function dispatchProxy() {
    var _instance$store;

    return (_instance$store = instance.store).dispatch.apply(_instance$store, arguments);
  }

  Object.assign(instance, bindActionCreators({
    debugApplyTheme: debugApplyTheme,
    debugResetTheme: debugResetTheme
  }, dispatchProxy));
}
//# sourceMappingURL=experimentalThemePlugin.js.map
