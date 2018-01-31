import _jsx from 'babel-runtime/helpers/jsx';
/**
 * The CircularProgress component from material-ui v1.0. We use this one instead
 * of the one from v0.x, because this one is CSS-only!
 *
 * Adapted from:
 * https://github.com/callemall/material-ui/blob/next/src/Progress/CircularProgress.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

var THICKNESS = {
  large: 1.6,
  tiny: 2.6
};

var CircularProgress = function CircularProgress(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 'large' : _ref$size;
  return _jsx('div', {
    className: cx('MuiCircularProgress', 'MuiCircularProgress--' + size),
    role: 'progressbar'
  }, void 0, _jsx('svg', {
    className: 'MuiCircularProgress-svg',
    viewBox: '0 0 50 50'
  }, void 0, _jsx('circle', {
    className: 'MuiCircularProgress-circle',
    cx: 25,
    cy: 25,
    r: 20,
    fill: 'none',
    strokeWidth: THICKNESS[size]
  })));
};

CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  size: PropTypes.string
} : {};

export default CircularProgress;
//# sourceMappingURL=CircularProgress.js.map
