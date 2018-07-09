import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import Tooltip from "@material-ui/core/es/Tooltip";
import IconButton from "@material-ui/core/es/IconButton";
import SettingsIcon from "@material-ui/icons/es/Settings";
var enhance = compose(translate(), pure);

var _ref2 =
/*#__PURE__*/
_jsx(SettingsIcon, {});

var SettingsButton = function SettingsButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return _jsx("span", {}, void 0, _jsx(Tooltip, {
    title: t('settings.title')
  }, void 0, _jsx(IconButton, {
    className: "SettingsButton",
    onClick: onClick
  }, void 0, _ref2)));
};

SettingsButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
} : {};
export default enhance(SettingsButton);
//# sourceMappingURL=SettingsButton.js.map
