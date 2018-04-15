import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import Tooltip from "material-ui/es/Tooltip";
import IconButton from "material-ui/es/IconButton";
import HistoryIcon from '@material-ui/icons/History';

var _ref2 =
/*#__PURE__*/
_jsx(HistoryIcon, {
  className: "HeaderHistoryButton-icon"
});

var HistoryButton = function HistoryButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return _jsx(Tooltip, {
    title: t('history.title'),
    position: "bottom"
  }, void 0, _jsx(IconButton, {
    "aria-label": t('history.title'),
    className: "HeaderHistoryButton",
    onClick: onClick
  }, void 0, _ref2));
};

HistoryButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
} : {};
export default compose(translate(), pure)(HistoryButton);
//# sourceMappingURL=HistoryButton.js.map
