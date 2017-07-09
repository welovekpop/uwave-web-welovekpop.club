'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _nest = require('recompose/nest');

var _nest2 = _interopRequireDefault(_nest);

var _SettingsActionCreators = require('../actions/SettingsActionCreators');

var _UserActionCreators = require('../actions/UserActionCreators');

var _LoginActionCreators = require('../actions/LoginActionCreators');

var _userSelectors = require('../selectors/userSelectors');

var _settingSelectors = require('../selectors/settingSelectors');

var _Overlay = require('../components/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _SettingsManager = require('../components/SettingsManager');

var _SettingsManager2 = _interopRequireDefault(_SettingsManager);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _nest2.default)(_Overlay2.default, _SettingsManager2.default));
//# sourceMappingURL=SettingsManager.js.map
//# sourceMappingURL=SettingsManager.js.map
