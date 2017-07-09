import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import Toggle from './Toggle';

var enhance = compose(withProps(function (props) {
  return {
    onToggleUserJoin: function onToggleUserJoin(e, value) {
      props.onSettingChange('notifications.userJoin', value);
    },
    onToggleUserLeave: function onToggleUserLeave(e, value) {
      props.onSettingChange('notifications.userLeave', value);
    },
    onToggleUserNameChanged: function onToggleUserNameChanged(e, value) {
      props.onSettingChange('notifications.userNameChanged', value);
    }
  };
}), translate());

var NotificationSettings = function NotificationSettings(_ref) {
  var t = _ref.t,
      settings = _ref.settings,
      onToggleUserJoin = _ref.onToggleUserJoin,
      onToggleUserLeave = _ref.onToggleUserLeave,
      onToggleUserNameChanged = _ref.onToggleUserNameChanged;
  return _jsx('div', {}, void 0, _jsx('h2', {
    className: 'SettingsPanel-header'
  }, void 0, t('settings.notifications.title')), _jsx('p', {
    className: 'SettingsPanel-helpText'
  }, void 0, t('settings.notifications.help')), _jsx(Toggle, {
    label: t('settings.notifications.userJoin'),
    labelPosition: 'left',
    toggled: settings.notifications.userJoin,
    onToggle: onToggleUserJoin
  }), _jsx(Toggle, {
    label: t('settings.notifications.userLeave'),
    labelPosition: 'left',
    toggled: settings.notifications.userLeave,
    onToggle: onToggleUserLeave
  }), _jsx(Toggle, {
    label: t('settings.notifications.userNameChanged'),
    labelPosition: 'left',
    toggled: settings.notifications.userNameChanged,
    onToggle: onToggleUserNameChanged
  }));
};

NotificationSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  onSettingChange: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  onToggleUserJoin: PropTypes.func.isRequired,
  onToggleUserLeave: PropTypes.func.isRequired,
  onToggleUserNameChanged: PropTypes.func.isRequired
} : {};

export default enhance(NotificationSettings);
//# sourceMappingURL=NotificationSettings.js.map
