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

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogMessage = function LogMessage(_ref) {
  var text = _ref.text;
  return (0, _jsx3.default)('div', {
    className: 'ChatMessage ChatMessage--log'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessage-content'
  }, void 0, (0, _jsx3.default)('span', {
    className: 'ChatMessage-text'
  }, void 0, text)));
};

LogMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes2.default.string.isRequired
} : {};

exports.default = (0, _pure2.default)(LogMessage);
//# sourceMappingURL=LogMessage.js.map
//# sourceMappingURL=LogMessage.js.map
