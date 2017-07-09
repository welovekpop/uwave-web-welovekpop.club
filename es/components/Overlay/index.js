import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var Overlay = function Overlay(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'bottom' : _ref$direction,
      children = _ref.children,
      className = _ref.className;
  return _jsx('div', {
    className: cx('Overlay', 'Overlay--from-' + direction)
  }, void 0, _jsx('div', {
    className: cx('Overlay-body', className)
  }, void 0, children));
};

Overlay.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.string
} : {};

export default Overlay;
//# sourceMappingURL=index.js.map
