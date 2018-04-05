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

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _userSelectors = require('../../selectors/userSelectors');

var _ChatMessages = require('../../containers/ChatMessages');

var _ChatMessages2 = _interopRequireDefault(_ChatMessages);

var _ChatInput = require('../../containers/ChatInput');

var _ChatInput2 = _interopRequireDefault(_ChatInput);

var _LoginButtons = require('./LoginButtons');

var _LoginButtons2 = _interopRequireDefault(_LoginButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  isLoggedIn: _userSelectors.isLoggedInSelector
});

var _ref2 = (0, _jsx3.default)('div', {
  className: 'ChatContainer-messages'
}, void 0, (0, _jsx3.default)(_ChatMessages2.default, {}));

var _ref3 = (0, _jsx3.default)(_ChatInput2.default, {});

var _ref4 = (0, _jsx3.default)(_LoginButtons2.default, {});

var ChatContainer = function ChatContainer(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return (0, _jsx3.default)('div', {
    className: 'ChatContainer'
  }, void 0, _ref2, (0, _jsx3.default)('div', {
    className: 'ChatContainer-input ChatInputWrapper'
  }, void 0, isLoggedIn ? _ref3 : _ref4));
};

ChatContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: _propTypes2.default.bool.isRequired
} : {};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ChatContainer);
//# sourceMappingURL=Chat.js.map
//# sourceMappingURL=Chat.js.map
