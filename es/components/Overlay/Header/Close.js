import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CloseBottomIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import CloseTopIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

var icons = {
  bottom: CloseBottomIcon,
  top: CloseTopIcon
};

var fullSizeStyle = {
  height: '100%',
  width: '100%'
};

var Close = function Close(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      direction = _ref.direction;

  var CloseIcon = icons[direction];
  return _jsx('button', {
    className: cx('OverlayHeaderClose', className),
    onClick: onClose
  }, void 0, _jsx(CloseIcon, {
    color: '#fff',
    style: fullSizeStyle,
    className: 'OverlayHeaderClose-icon'
  }));
};

Close.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  direction: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
} : {};

export default Close;
//# sourceMappingURL=Close.js.map
