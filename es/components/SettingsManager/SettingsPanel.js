import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { FormGroup } from 'material-ui/es/Form';
import Switch from 'material-ui/es/Switch';
import Profile from './Profile';
import LabeledControl from './LabeledControl';
import LanguagePicker from './LanguagePicker';
import LogoutButton from './LogoutButton';
import NotificationSettings from './NotificationSettings';
import Links from './Links';

var enhance = translate();

var _ref = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

var _ref2 = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

var _ref3 = _jsx(Links, {});

var _ref4 = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

var _ref5 = _jsx('hr', {
  className: 'SettingsPanel-divider'
});

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
    }, _this.handleLanguageChange = function (event) {
      _this.props.onChangeLanguage(event.target.value);
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
    }, void 0, t('settings.title')), _jsx(FormGroup, {}, void 0, _jsx(LabeledControl, {
      label: t('settings.videoEnabled'),
      id: 'uw-setting-videoenabled'
    }, void 0, _jsx(Switch, {
      color: 'primary',
      checked: settings.videoEnabled,
      onChange: this.handleVideoEnabledChange
    })), _jsx(LabeledControl, {
      label: t('settings.videoSize'),
      id: 'uw-setting-videosize'
    }, void 0, _jsx(Switch, {
      color: 'primary',
      checked: settings.videoSize === 'large',
      onChange: this.handleVideoSizeChange
    })), _jsx(LabeledControl, {
      label: t('settings.mentionSound'),
      id: 'uw-setting-mentionsound'
    }, void 0, _jsx(Switch, {
      color: 'primary',
      checked: settings.mentionSound,
      onChange: this.handleMentionSoundChange
    })), _jsx(LabeledControl, {
      label: t('settings.language'),
      id: 'uw-setting-language'
    }, void 0, _jsx(LanguagePicker, {
      value: settings.language,
      onChange: this.handleLanguageChange
    }))), _ref2, _ref3, _ref4, _jsx(LogoutButton, {
      onLogout: onLogout
    })), _jsx('div', {
      className: 'SettingsPanel-column SettingsPanel-column--right'
    }, void 0, _jsx(NotificationSettings, {
      settings: settings,
      onSettingChange: this.props.onSettingChange
    }), _ref5));
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
