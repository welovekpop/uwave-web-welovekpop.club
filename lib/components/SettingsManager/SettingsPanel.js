"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Form = require("material-ui/Form");

var _Switch = _interopRequireDefault(require("material-ui/Switch"));

var _Profile = _interopRequireDefault(require("./Profile"));

var _LabeledControl = _interopRequireDefault(require("./LabeledControl"));

var _LanguagePicker = _interopRequireDefault(require("./LanguagePicker"));

var _LogoutButton = _interopRequireDefault(require("./LogoutButton"));

var _NotificationSettings = _interopRequireDefault(require("./NotificationSettings"));

var _Links = _interopRequireDefault(require("./Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("hr", {
  className: "SettingsPanel-divider"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("hr", {
  className: "SettingsPanel-divider"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Links.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)("hr", {
  className: "SettingsPanel-divider"
});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)("hr", {
  className: "SettingsPanel-divider"
});

var SettingsPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SettingsPanel, _React$Component);

  function SettingsPanel() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleVideoEnabledChange = function (e, value) {
      _this.props.onSettingChange('videoEnabled', value);
    }, _this.handleVideoSizeChange = function (e, value) {
      _this.props.onSettingChange('videoSize', value ? 'large' : 'small');
    }, _this.handleMentionSoundChange = function (e, value) {
      _this.props.onSettingChange('mentionSound', value);
    }, _this.handleLanguageChange = function (event) {
      _this.props.onChangeLanguage(event.target.value);
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = SettingsPanel.prototype;

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className,
        settings = _props.settings,
        user = _props.user,
        onChangeUsername = _props.onChangeUsername,
        onLogout = _props.onLogout;
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('SettingsPanel', className)
    }, void 0, user && (0, _jsx2.default)(_Profile.default, {
      user: user,
      onChangeUsername: onChangeUsername
    }), user && _ref, (0, _jsx2.default)("div", {
      className: "SettingsPanel-column SettingsPanel-column--left"
    }, void 0, (0, _jsx2.default)("h2", {
      className: "SettingsPanel-header"
    }, void 0, t('settings.title')), (0, _jsx2.default)(_Form.FormGroup, {}, void 0, (0, _jsx2.default)(_LabeledControl.default, {
      label: t('settings.videoEnabled'),
      id: "uw-setting-videoenabled"
    }, void 0, (0, _jsx2.default)(_Switch.default, {
      color: "primary",
      checked: settings.videoEnabled,
      onChange: this.handleVideoEnabledChange
    })), (0, _jsx2.default)(_LabeledControl.default, {
      label: t('settings.videoSize'),
      id: "uw-setting-videosize"
    }, void 0, (0, _jsx2.default)(_Switch.default, {
      color: "primary",
      checked: settings.videoSize === 'large',
      onChange: this.handleVideoSizeChange
    })), (0, _jsx2.default)(_LabeledControl.default, {
      label: t('settings.mentionSound'),
      id: "uw-setting-mentionsound"
    }, void 0, (0, _jsx2.default)(_Switch.default, {
      color: "primary",
      checked: settings.mentionSound,
      onChange: this.handleMentionSoundChange
    })), (0, _jsx2.default)(_LabeledControl.default, {
      label: t('settings.language'),
      id: "uw-setting-language"
    }, void 0, (0, _jsx2.default)(_LanguagePicker.default, {
      value: settings.language,
      onChange: this.handleLanguageChange
    }))), _ref2, _ref3, _ref4, (0, _jsx2.default)(_LogoutButton.default, {
      onLogout: onLogout
    })), (0, _jsx2.default)("div", {
      className: "SettingsPanel-column SettingsPanel-column--right"
    }, void 0, (0, _jsx2.default)(_NotificationSettings.default, {
      settings: settings,
      onSettingChange: this.props.onSettingChange
    }), _ref5));
  };

  return SettingsPanel;
}(_react.default.Component);

SettingsPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  settings: _propTypes.default.object.isRequired,
  user: _propTypes.default.object,
  onSettingChange: _propTypes.default.func.isRequired,
  onChangeUsername: _propTypes.default.func.isRequired,
  onChangeLanguage: _propTypes.default.func.isRequired,
  onLogout: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SettingsPanel); //# sourceMappingURL=SettingsPanel.js.map


exports.default = _default;
//# sourceMappingURL=SettingsPanel.js.map
