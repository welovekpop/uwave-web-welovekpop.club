"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _transformStyle = _interopRequireDefault(require("../../utils/transformStyle"));

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
    if (!el) return; // Set the width to the current progress without animating

    Object.assign(el.style, {
      transitionDuration: '0s'
    }, (0, _transformStyle.default)("scaleX(" + currentProgress + ")")); // Force browser to rerender the bar immediately

    forceReflow(el); // Set up the actual animation. Progress bar goes to 100% full
    // in $timeRemaining seconds.

    Object.assign(el.style, {
      transitionDuration: timeRemaining + "s"
    }, (0, _transformStyle.default)('scaleX(1)'));
  }

  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('Progress', className)
  }, void 0, _react.default.createElement("div", {
    className: "Progress-fill",
    ref: animate
  }));
};

Progress.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  currentProgress: _propTypes.default.number.isRequired,
  timeRemaining: _propTypes.default.number.isRequired
} : {};
var _default = Progress; //# sourceMappingURL=Progress.js.map

exports.default = _default;
//# sourceMappingURL=Progress.js.map
