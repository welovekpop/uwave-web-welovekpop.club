import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from './CircularProgress';

var Loader = function Loader(_ref) {
  var className = _ref.className,
      size = _ref.size;
  return _jsx('div', {
    className: cx('Loader', className)
  }, void 0, _jsx(CircularProgress, {
    size: size
  }));
};

Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  size: PropTypes.string.isRequired
} : {};

export default Loader;
//# sourceMappingURL=index.js.map
