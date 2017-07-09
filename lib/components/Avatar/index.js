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

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('Avatar', className)
  }, void 0, (0, _jsx3.default)('img', {
    className: 'Avatar-image',
    src: user.avatar || '/a/' + encodeURIComponent(user._id),
    alt: user.username
  }));
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired
} : {};

exports.default = Avatar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
