'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatMessages = require('../../containers/ChatMessages');

var _ChatMessages2 = _interopRequireDefault(_ChatMessages);

var _ChatInput = require('../../containers/ChatInput');

var _ChatInput2 = _interopRequireDefault(_ChatInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'ChatContainer'
}, void 0, (0, _jsx3.default)('div', {
  className: 'ChatContainer-messages'
}, void 0, (0, _jsx3.default)(_ChatMessages2.default, {})), (0, _jsx3.default)('div', {
  className: 'ChatContainer-input ChatInputWrapper'
}, void 0, (0, _jsx3.default)(_ChatInput2.default, {})));

var Chat = function Chat() {
  return _ref;
};

exports.default = Chat;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
