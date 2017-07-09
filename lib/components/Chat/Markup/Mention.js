'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(_ref) {
  var className = _ref.className,
      user = _ref.user,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'user']);

  return _react2.default.createElement('span', (0, _extends3.default)({ className: (0, _classnames2.default)('ChatMention', className) }, props), '@', user.username);
};

Mention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.shape({
    username: _propTypes2.default.string.isRequired
  }).isRequired
} : {};

exports.default = Mention;
//# sourceMappingURL=Mention.js.map
//# sourceMappingURL=Mention.js.map
