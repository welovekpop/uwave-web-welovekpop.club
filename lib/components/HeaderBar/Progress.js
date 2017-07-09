'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transformStyle = require('../../utils/transformStyle');

var _transformStyle2 = _interopRequireDefault(_transformStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forceReflow(el) {
  // Hopefully the minifier won't optimise this away!
  el.getBoundingClientRect();
}

var Progress = function Progress(_ref) {
  var className = _ref.className,
      currentProgress = _ref.currentProgress,
      timeRemaining = _ref.timeRemaining;

  function animate(el) {
    if (!el) return;

    // Set the width to the current progress without animating
    Object.assign(el.style, {
      transitionDuration: '0s'
    }, (0, _transformStyle2.default)('scaleX(' + currentProgress + ')'));

    // Force browser to rerender the bar immediately
    forceReflow(el);

    // Set up the actual animation. Progress bar goes to 100% full
    // in $timeRemaining seconds.
    Object.assign(el.style, {
      transitionDuration: timeRemaining + 's'
    }, (0, _transformStyle2.default)('scaleX(1)'));
  }

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('Progress', className)
  }, void 0, _react2.default.createElement('div', { className: 'Progress-fill', ref: animate }));
};

Progress.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  currentProgress: _propTypes2.default.number.isRequired,
  timeRemaining: _propTypes2.default.number.isRequired
} : {};

exports.default = Progress;
//# sourceMappingURL=Progress.js.map
//# sourceMappingURL=Progress.js.map
