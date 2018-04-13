"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("material-ui/Progress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoProgressBar = function VideoProgressBar(_ref) {
  var media = _ref.media,
      seek = _ref.seek;
  return (0, _jsx2.default)("div", {
    className: "Video-overlay Video-progress"
  }, void 0, (0, _jsx2.default)(_Progress.LinearProgress, {
    variant: "determinate",
    color: "primary",
    value: (seek - media.start) / (media.end - media.start) * 100
  }));
};

VideoProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.shape({
    start: _propTypes.default.number.isRequired,
    end: _propTypes.default.number.isRequired
  }).isRequired,
  seek: _propTypes.default.number.isRequired
} : {};
var _default = VideoProgressBar; //# sourceMappingURL=VideoProgressBar.js.map

exports.default = _default;
//# sourceMappingURL=VideoProgressBar.js.map
