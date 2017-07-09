import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from './Close';

var Header = function Header(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      onCloseOverlay = _ref.onCloseOverlay,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'bottom' : _ref$direction;
  return _jsx('div', {
    className: cx('OverlayHeader', className)
  }, void 0, _jsx('div', {
    className: 'OverlayHeader-title'
  }, void 0, title.toUpperCase()), _jsx('div', {
    className: 'OverlayHeader-content'
  }, void 0, children), _jsx(CloseButton, {
    direction: direction,
    className: 'OverlayHeader-close',
    onClose: onCloseOverlay
  }));
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  direction: PropTypes.string,
  onCloseOverlay: PropTypes.func.isRequired
} : {};

export default Header;
//# sourceMappingURL=index.js.map
