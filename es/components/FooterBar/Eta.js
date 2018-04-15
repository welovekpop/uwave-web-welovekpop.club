import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import formatDuration from 'format-duration';
import timed from '../../utils/timed';

var Eta = function Eta(_ref) {
  var className = _ref.className,
      base = _ref.base,
      currentTime = _ref.currentTime,
      endTime = _ref.endTime;
  var currentRemaining = endTime - currentTime;
  return _jsx("span", {
    className: cx('Eta', className)
  }, void 0, formatDuration(base + currentRemaining));
};

Eta.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  currentTime: PropTypes.number.isRequired,
  endTime: PropTypes.number,
  base: PropTypes.number
} : {};
export default compose(timed(), pure)(Eta);
//# sourceMappingURL=Eta.js.map
