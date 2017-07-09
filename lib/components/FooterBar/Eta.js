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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _formatDuration = require('../../utils/formatDuration');

var _formatDuration2 = _interopRequireDefault(_formatDuration);

var _timed = require('../../utils/timed');

var _timed2 = _interopRequireDefault(_timed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Eta = function Eta(_ref) {
  var className = _ref.className,
      base = _ref.base,
      currentTime = _ref.currentTime,
      endTime = _ref.endTime;

  var currentRemaining = Math.floor((endTime - currentTime) / 1000);
  return (0, _jsx3.default)('span', {
    className: (0, _classnames2.default)('Eta', className)
  }, void 0, (0, _formatDuration2.default)(base + currentRemaining));
};

Eta.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  currentTime: _propTypes2.default.number.isRequired,
  endTime: _propTypes2.default.number,
  base: _propTypes2.default.number
} : {};

exports.default = (0, _compose2.default)((0, _timed2.default)(), _pure2.default)(Eta);
//# sourceMappingURL=Eta.js.map
//# sourceMappingURL=Eta.js.map
