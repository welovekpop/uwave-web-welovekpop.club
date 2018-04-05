'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Progress = require('material-ui/Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoProgressBar = function VideoProgressBar(_ref) {
  var media = _ref.media,
      seek = _ref.seek;
  return (0, _jsx3.default)('div', {
    className: 'Video-overlay Video-progress'
  }, void 0, (0, _jsx3.default)(_Progress.LinearProgress, {
    variant: 'determinate',
    color: 'primary',
    value: (seek - media.start) / (media.end - media.start) * 100
  }));
};

VideoProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.shape({
    start: _propTypes2.default.number.isRequired,
    end: _propTypes2.default.number.isRequired
  }).isRequired,
  seek: _propTypes2.default.number.isRequired
} : {};

exports.default = VideoProgressBar;
//# sourceMappingURL=VideoProgressBar.js.map
//# sourceMappingURL=VideoProgressBar.js.map
