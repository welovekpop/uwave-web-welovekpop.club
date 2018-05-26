import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/es/IconButton";
import CloseBottomIcon from "@material-ui/icons/es/KeyboardArrowDown";
import CloseTopIcon from "@material-ui/icons/es/KeyboardArrowUp";
var icons = {
  bottom: CloseBottomIcon,
  top: CloseTopIcon
};

var Close = function Close(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      direction = _ref.direction;
  var CloseIcon = icons[direction];
  return _jsx(IconButton, {
    className: cx('OverlayHeaderClose', className),
    onClick: onClose
  }, void 0, _jsx(CloseIcon, {
    className: "OverlayHeaderClose-icon"
  }));
};

Close.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  direction: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
} : {};
export default Close;
//# sourceMappingURL=Close.js.map
