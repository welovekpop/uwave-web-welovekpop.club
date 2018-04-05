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

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Username = require('../../../components/Username');

var _Username2 = _interopRequireDefault(_Username);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRow = function UserRow(_ref) {
  var user = _ref.user,
      icon = _ref.icon;
  return (0, _jsx3.default)(_List.ListItem, {}, void 0, (0, _jsx3.default)(_List.ListItemAvatar, {}, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'Avatar',
    src: user.avatar || 'https://sigil.u-wave.net/' + user._id
  })), (0, _jsx3.default)(_List.ListItemText, {}, void 0, (0, _jsx3.default)(_Username2.default, {
    user: user
  })), icon && (0, _jsx3.default)(_List.ListItemIcon, {}, void 0, icon));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  icon: _propTypes2.default.node
} : {};

exports.default = UserRow;
//# sourceMappingURL=UserRow.js.map
//# sourceMappingURL=UserRow.js.map
