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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupMention = function GroupMention(_ref) {
  var className = _ref.className,
      group = _ref.group;
  return (0, _jsx3.default)('span', {
    className: (0, _classnames2.default)('ChatMention', 'ChatMention--' + group, className)
  }, void 0, '@', group);
};

GroupMention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  group: _propTypes2.default.string.isRequired
} : {};

exports.default = GroupMention;
//# sourceMappingURL=GroupMention.js.map
//# sourceMappingURL=GroupMention.js.map
