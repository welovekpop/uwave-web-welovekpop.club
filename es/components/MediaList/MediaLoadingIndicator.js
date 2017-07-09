import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

var _ref2 = _jsx(Loader, {
  size: 'tiny',
  className: 'MediaLoadingIndicator-spinner'
});

var MediaLoadingIndicator = function MediaLoadingIndicator(_ref) {
  var className = _ref.className;
  return _jsx('div', {
    className: cx('MediaLoadingIndicator', className)
  }, void 0, _ref2);
};

MediaLoadingIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string
} : {};

export default MediaLoadingIndicator;
//# sourceMappingURL=MediaLoadingIndicator.js.map
