import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Profile from './Profile';
import LabeledControl from './LabeledControl';
import LanguagePicker from './LanguagePicker';
import LogoutButton from './LogoutButton';
import NotificationSettings from './NotificationSettings';
import Links from './Links';
import Toggle from './Toggle';

var enhance = translate();

var _ref = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

var _ref2 = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

var _ref3 = _jsx(Links, {});

var SettingsPanel = function (_React$Component) {
  _inherits(SettingsPanel, _React$Component);

  function SettingsPanel() {
    var _temp, _this, _ret;

    _classCallCheck(this, SettingsPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleVideoEnabledChange = function (e, value) {
      _this.props.onSettingChange('videoEnabled', value);
    }, _this.handleVideoSizeChange = function (e, value) {
      _this.props.onSettingChange('videoSize', value ? 'large' : 'small');
    }, _this.handleMentionSoundChange = function (e, value) {
      _this.props.onSettingChange('mentionSound', value);
    }, _this.handleLanguageChange = function (e, index, value) {
      _this.props.onChangeLanguage(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SettingsPanel.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className,
        settings = _props.settings,
        user = _props.user,
        onChangeUsername = _props.onChangeUsername,
        onLogout = _props.onLogout;


    return _jsx('div', {
      className: cx('SettingsPanel', className)
    }, void 0, user && _jsx(Profile, {
      user: user,
      onChangeUsername: onChangeUsername
    }), user && _ref, _jsx('div', {
      className: 'SettingsPanel-column SettingsPanel-column--left'
    }, void 0, _jsx('h2', {
      className: 'SettingsPanel-header'
    }, void 0, t('settings.title')), _jsx(Toggle, {
      label: t('settings.videoEnabled'),
      toggled: settings.videoEnabled,
      onToggle: this.handleVideoEnabledChange
    }), _jsx(Toggle, {
      label: t('settings.videoSize'),
      toggled: settings.videoSize === 'large',
      onToggle: this.handleVideoSizeChange
    }), _jsx(Toggle, {
      label: t('settings.mentionSound'),
      toggled: settings.mentionSound,
      onToggle: this.handleMentionSoundChange
    }), _jsx('div', {
      className: 'SettingsPanel-toggle'
    }, void 0, _jsx(LabeledControl, {
      id: 'uw-setting-language',
      label: t('settings.language')
    }, void 0, _jsx(LanguagePicker, {
      id: 'uw-setting-language',
      value: settings.language,
      onChange: this.handleLanguageChange
    }))), _jsx(LogoutButton, {
      onLogout: onLogout
    })), _jsx('div', {
      className: 'SettingsPanel-column SettingsPanel-column--right'
    }, void 0, _jsx(NotificationSettings, {
      settings: settings,
      onSettingChange: this.props.onSettingChange
    }), _ref2, _ref3));
  };

  return SettingsPanel;
}(React.Component);

SettingsPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  settings: PropTypes.object.isRequired,
  user: PropTypes.object,
  onSettingChange: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
} : {};


export default enhance(SettingsPanel);
//# sourceMappingURL=SettingsPanel.js.map
