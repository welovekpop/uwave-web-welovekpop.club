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

var _compile = require('./Markup/compile');

var _compile2 = _interopRequireDefault(_compile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Motd = function Motd(_ref) {
  var children = _ref.children,
      compileOptions = _ref.compileOptions;
  return (0, _jsx3.default)('div', {
    className: 'ChatMessage ChatMessage--motd'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessage-content'
  }, void 0, (0, _compile2.default)(children, compileOptions)));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.array.isRequired,
  compileOptions: _propTypes2.default.shape({
    availableEmoji: _propTypes2.default.array,
    emojiImages: _propTypes2.default.object
  })
} : {};

exports.default = (0, _pure2.default)(Motd);
//# sourceMappingURL=Motd.js.map
//# sourceMappingURL=Motd.js.map
