"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactI18next = require("react-i18next");

var _Switch = _interopRequireDefault(require("material-ui/Switch"));

var _LabeledControl = _interopRequireDefault(require("./LabeledControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _withProps.default)(function (props) {
  return {
    onToggleUserJoin: function onToggleUserJoin(e, value) {
      props.onSettingChange('notifications.userJoin', value);
    },
    onToggleUserLeave: function onToggleUserLeave(e, value) {
      props.onSettingChange('notifications.userLeave', value);
    },
    onToggleUserNameChanged: function onToggleUserNameChanged(e, value) {
      props.onSettingChange('notifications.userNameChanged', value);
    },
    onToggleSkip: function onToggleSkip(e, value) {
      props.onSettingChange('notifications.skip', value);
    }
  };
}), (0, _reactI18next.translate)());

var NotificationSettings = function NotificationSettings(_ref) {
  var t = _ref.t,
      settings = _ref.settings,
      onToggleUserJoin = _ref.onToggleUserJoin,
      onToggleUserLeave = _ref.onToggleUserLeave,
      onToggleUserNameChanged = _ref.onToggleUserNameChanged,
      onToggleSkip = _ref.onToggleSkip;
  return (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)("h2", {
    className: "SettingsPanel-header"
  }, void 0, t('settings.notifications.title')), (0, _jsx2.default)("p", {
    className: "SettingsPanel-helpText"
  }, void 0, t('settings.notifications.help')), (0, _jsx2.default)(_LabeledControl.default, {
    label: t('settings.notifications.userJoin'),
    id: "uw-setting-userjoin"
  }, void 0, (0, _jsx2.default)(_Switch.default, {
    color: "primary",
    checked: settings.notifications.userJoin,
    onChange: onToggleUserJoin
  })), (0, _jsx2.default)(_LabeledControl.default, {
    label: t('settings.notifications.userLeave'),
    id: "uw-setting-userleave"
  }, void 0, (0, _jsx2.default)(_Switch.default, {
    color: "primary",
    checked: settings.notifications.userLeave,
    onChange: onToggleUserLeave
  })), (0, _jsx2.default)(_LabeledControl.default, {
    label: t('settings.notifications.userNameChanged'),
    id: "uw-setting-usernamechanged"
  }, void 0, (0, _jsx2.default)(_Switch.default, {
    color: "primary",
    checked: settings.notifications.userNameChanged,
    onChange: onToggleUserNameChanged
  })), (0, _jsx2.default)(_LabeledControl.default, {
    label: t('settings.notifications.skip'),
    id: "uw-setting-skip"
  }, void 0, (0, _jsx2.default)(_Switch.default, {
    color: "primary",
    checked: settings.notifications.skip,
    onChange: onToggleSkip
  })));
};

NotificationSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  settings: _propTypes.default.object.isRequired,
  onSettingChange: _propTypes.default.func.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  onToggleUserJoin: _propTypes.default.func.isRequired,
  onToggleUserLeave: _propTypes.default.func.isRequired,
  onToggleUserNameChanged: _propTypes.default.func.isRequired,
  onToggleSkip: _propTypes.default.func.isRequired
} : {};

var _default = enhance(NotificationSettings); //# sourceMappingURL=NotificationSettings.js.map


exports.default = _default;
//# sourceMappingURL=NotificationSettings.js.map
