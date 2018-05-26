import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import Switch from "@material-ui/core/es/Switch";
import LabeledControl from './LabeledControl';
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
    },
    onToggleSkip: function onToggleSkip(e, value) {
      props.onSettingChange('notifications.skip', value);
    }
  };
}), translate());

var NotificationSettings = function NotificationSettings(_ref) {
  var t = _ref.t,
      settings = _ref.settings,
      onToggleUserJoin = _ref.onToggleUserJoin,
      onToggleUserLeave = _ref.onToggleUserLeave,
      onToggleUserNameChanged = _ref.onToggleUserNameChanged,
      onToggleSkip = _ref.onToggleSkip;
  return _jsx("div", {}, void 0, _jsx("h2", {
    className: "SettingsPanel-header"
  }, void 0, t('settings.notifications.title')), _jsx("p", {
    className: "SettingsPanel-helpText"
  }, void 0, t('settings.notifications.help')), _jsx(LabeledControl, {
    label: t('settings.notifications.userJoin'),
    id: "uw-setting-userjoin"
  }, void 0, _jsx(Switch, {
    color: "primary",
    checked: settings.notifications.userJoin,
    onChange: onToggleUserJoin
  })), _jsx(LabeledControl, {
    label: t('settings.notifications.userLeave'),
    id: "uw-setting-userleave"
  }, void 0, _jsx(Switch, {
    color: "primary",
    checked: settings.notifications.userLeave,
    onChange: onToggleUserLeave
  })), _jsx(LabeledControl, {
    label: t('settings.notifications.userNameChanged'),
    id: "uw-setting-usernamechanged"
  }, void 0, _jsx(Switch, {
    color: "primary",
    checked: settings.notifications.userNameChanged,
    onChange: onToggleUserNameChanged
  })), _jsx(LabeledControl, {
    label: t('settings.notifications.skip'),
    id: "uw-setting-skip"
  }, void 0, _jsx(Switch, {
    color: "primary",
    checked: settings.notifications.skip,
    onChange: onToggleSkip
  })));
};

NotificationSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  onSettingChange: PropTypes.func.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  onToggleUserJoin: PropTypes.func.isRequired,
  onToggleUserLeave: PropTypes.func.isRequired,
  onToggleUserNameChanged: PropTypes.func.isRequired,
  onToggleSkip: PropTypes.func.isRequired
} : {};
export default enhance(NotificationSettings);
//# sourceMappingURL=NotificationSettings.js.map
