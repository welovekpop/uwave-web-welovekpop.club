'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desktop = exports.Mobile = undefined;

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mobile = exports.Mobile = (0, _withProps2.default)({ maxWidth: 767 })(_reactResponsive2.default);
var Desktop = exports.Desktop = (0, _withProps2.default)({ minWidth: 768 })(_reactResponsive2.default);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
