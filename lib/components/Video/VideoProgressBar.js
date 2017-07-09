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

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoProgressBar = function VideoProgressBar(_ref) {
  var muiTheme = _ref.muiTheme,
      media = _ref.media,
      seek = _ref.seek;
  return (0, _jsx3.default)('div', {
    className: 'Video-overlay Video-progress'
  }, void 0, (0, _jsx3.default)(_LinearProgress2.default, {
    mode: 'determinate',
    color: muiTheme.palette.primary1Color,
    min: media.start,
    max: media.end,
    value: seek - media.start
  }));
};

VideoProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  media: _propTypes2.default.shape({
    start: _propTypes2.default.number.isRequired,
    end: _propTypes2.default.number.isRequired
  }).isRequired,
  seek: _propTypes2.default.number.isRequired
} : {};

exports.default = (0, _muiThemeable2.default)()(VideoProgressBar);
//# sourceMappingURL=VideoProgressBar.js.map
//# sourceMappingURL=VideoProgressBar.js.map
