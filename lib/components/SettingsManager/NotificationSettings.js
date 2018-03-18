'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactI18next = require('react-i18next');

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _withProps2.default)(function (props) {
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
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h2', {
    className: 'SettingsPanel-header'
  }, void 0, t('settings.notifications.title')), (0, _jsx3.default)('p', {
    className: 'SettingsPanel-helpText'
  }, void 0, t('settings.notifications.help')), (0, _jsx3.default)(_Toggle2.default, {
    label: t('settings.notifications.userJoin'),
    labelPosition: 'left',
    toggled: settings.notifications.userJoin,
    onToggle: onToggleUserJoin
  }), (0, _jsx3.default)(_Toggle2.default, {
    label: t('settings.notifications.userLeave'),
    labelPosition: 'left',
    toggled: settings.notifications.userLeave,
    onToggle: onToggleUserLeave
  }), (0, _jsx3.default)(_Toggle2.default, {
    label: t('settings.notifications.userNameChanged'),
    labelPosition: 'left',
    toggled: settings.notifications.userNameChanged,
    onToggle: onToggleUserNameChanged
  }), (0, _jsx3.default)(_Toggle2.default, {
    label: t('settings.notifications.skip'),
    labelPosition: 'left',
    toggled: settings.notifications.skip,
    onToggle: onToggleSkip
  }));
};

NotificationSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  settings: _propTypes2.default.object.isRequired,
  onSettingChange: _propTypes2.default.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  onToggleUserJoin: _propTypes2.default.func.isRequired,
  onToggleUserLeave: _propTypes2.default.func.isRequired,
  onToggleUserNameChanged: _propTypes2.default.func.isRequired,
  onToggleSkip: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(NotificationSettings);
//# sourceMappingURL=NotificationSettings.js.map
//# sourceMappingURL=NotificationSettings.js.map
