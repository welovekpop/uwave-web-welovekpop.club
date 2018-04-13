"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _nest = _interopRequireDefault(require("recompose/nest"));

var _SettingsActionCreators = require("../actions/SettingsActionCreators");

var _UserActionCreators = require("../actions/UserActionCreators");

var _LoginActionCreators = require("../actions/LoginActionCreators");

var _userSelectors = require("../selectors/userSelectors");

var _settingSelectors = require("../selectors/settingSelectors");

var _Overlay = _interopRequireDefault(require("../components/Overlay"));

var _SettingsManager = _interopRequireDefault(require("../components/SettingsManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  settings: _settingSelectors.settingsSelector,
  user: _userSelectors.currentUserSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onSettingChange: _SettingsActionCreators.set,
    onChangeUsername: _UserActionCreators.doChangeUsername,
    onChangeLanguage: _SettingsActionCreators.setLanguage,
    onLogout: _LoginActionCreators.logout
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _nest.default)(_Overlay.default, _SettingsManager.default)); //# sourceMappingURL=SettingsManager.js.map


exports.default = _default;
//# sourceMappingURL=SettingsManager.js.map
