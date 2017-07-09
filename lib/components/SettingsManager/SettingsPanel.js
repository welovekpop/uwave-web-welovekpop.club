'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _LabeledControl = require('./LabeledControl');

var _LabeledControl2 = _interopRequireDefault(_LabeledControl);

var _LanguagePicker = require('./LanguagePicker');

var _LanguagePicker2 = _interopRequireDefault(_LanguagePicker);

var _LogoutButton = require('./LogoutButton');

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

var _NotificationSettings = require('./NotificationSettings');

var _NotificationSettings2 = _interopRequireDefault(_NotificationSettings);

var _Links = require('./Links');

var _Links2 = _interopRequireDefault(_Links);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)('hr', {
  className: 'SettingsPanel-divider'
});

var _ref2 = (0, _jsx3.default)('hr', {
  className: 'SettingsPanel-divider'
});

var _ref3 = (0, _jsx3.default)(_Links2.default, {});

var SettingsPanel = function (_React$Component) {
  (0, _inherits3.default)(SettingsPanel, _React$Component);

  function SettingsPanel() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SettingsPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleVideoEnabledChange = function (e, value) {
      _this.props.onSettingChange('videoEnabled', value);
    }, _this.handleVideoSizeChange = function (e, value) {
      _this.props.onSettingChange('videoSize', value ? 'large' : 'small');
    }, _this.handleMentionSoundChange = function (e, value) {
      _this.props.onSettingChange('mentionSound', value);
    }, _this.handleLanguageChange = function (e, index, value) {
      _this.props.onChangeLanguage(value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SettingsPanel.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className,
        settings = _props.settings,
        user = _props.user,
        onChangeUsername = _props.onChangeUsername,
        onLogout = _props.onLogout;

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('SettingsPanel', className)
    }, void 0, user && (0, _jsx3.default)(_Profile2.default, {
      user: user,
      onChangeUsername: onChangeUsername
    }), user && _ref, (0, _jsx3.default)('div', {
      className: 'SettingsPanel-column SettingsPanel-column--left'
    }, void 0, (0, _jsx3.default)('h2', {
      className: 'SettingsPanel-header'
    }, void 0, t('settings.title')), (0, _jsx3.default)(_Toggle2.default, {
      label: t('settings.videoEnabled'),
      toggled: settings.videoEnabled,
      onToggle: this.handleVideoEnabledChange
    }), (0, _jsx3.default)(_Toggle2.default, {
      label: t('settings.videoSize'),
      toggled: settings.videoSize === 'large',
      onToggle: this.handleVideoSizeChange
    }), (0, _jsx3.default)(_Toggle2.default, {
      label: t('settings.mentionSound'),
      toggled: settings.mentionSound,
      onToggle: this.handleMentionSoundChange
    }), (0, _jsx3.default)('div', {
      className: 'SettingsPanel-toggle'
    }, void 0, (0, _jsx3.default)(_LabeledControl2.default, {
      id: 'uw-setting-language',
      label: t('settings.language')
    }, void 0, (0, _jsx3.default)(_LanguagePicker2.default, {
      id: 'uw-setting-language',
      value: settings.language,
      onChange: this.handleLanguageChange
    }))), (0, _jsx3.default)(_LogoutButton2.default, {
      onLogout: onLogout
    })), (0, _jsx3.default)('div', {
      className: 'SettingsPanel-column SettingsPanel-column--right'
    }, void 0, (0, _jsx3.default)(_NotificationSettings2.default, {
      settings: settings,
      onSettingChange: this.props.onSettingChange
    }), _ref2, _ref3));
  };

  return SettingsPanel;
}(_react2.default.Component);

SettingsPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  settings: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object,
  onSettingChange: _propTypes2.default.func.isRequired,
  onChangeUsername: _propTypes2.default.func.isRequired,
  onChangeLanguage: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SettingsPanel);
//# sourceMappingURL=SettingsPanel.js.map
//# sourceMappingURL=SettingsPanel.js.map
