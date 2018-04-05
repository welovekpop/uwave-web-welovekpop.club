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

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Settings = require('material-ui-icons/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = _pure2.default;

var _ref2 = (0, _jsx3.default)('div', {
  className: 'UserInfo-settings'
}, void 0, (0, _jsx3.default)(_Settings2.default, {
  className: 'UserInfo-settingsIcon'
}));

var UserInfo = function UserInfo(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onClick = _ref.onClick;
  return (0, _jsx3.default)('button', {
    className: (0, _classnames2.default)('UserInfo', className),
    onClick: onClick
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'UserInfo-avatar',
    user: user
  }), _ref2);
};

UserInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired,
  onClick: _propTypes2.default.func
} : {};

exports.default = enhance(UserInfo);
//# sourceMappingURL=UserInfo.js.map
//# sourceMappingURL=UserInfo.js.map
