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

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _Table = require('../../../components/Table');

var _Avatar = require('../../../components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _WithCard = require('../../../components/Username/WithCard');

var _WithCard2 = _interopRequireDefault(_WithCard);

var _formatJoinDate = require('../../../utils/formatJoinDate');

var _formatJoinDate2 = _interopRequireDefault(_formatJoinDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avatarStyle = {
  width: 48,
  paddingRight: 0
};
var actionsStyle = {
  width: 48,
  paddingLeft: 0,
  paddingRight: 0
};

var anchorOrigin = { horizontal: 'right', vertical: 'top' };
var targetOrigin = { horizontal: 'right', vertical: 'top' };

var _ref2 = (0, _jsx3.default)(_Table.TableCell, {}, void 0, 'Email');

var _ref3 = (0, _jsx3.default)(_Table.TableCell, {
  style: actionsStyle
}, void 0, (0, _jsx3.default)(_IconMenu2.default, {
  iconButtonElement: (0, _jsx3.default)(_IconButton2.default, {}, void 0, (0, _jsx3.default)(_moreVert2.default, {})),
  anchorOrigin: anchorOrigin,
  targetOrigin: targetOrigin
}, void 0, (0, _jsx3.default)(_MenuItem2.default, {
  primaryText: 'Ban'
})));

var UserRow = function UserRow(_ref) {
  var user = _ref.user;
  return (0, _jsx3.default)(_Table.TableRow, {}, void 0, (0, _jsx3.default)(_Table.TableCell, {
    style: avatarStyle
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    user: user
  })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _jsx3.default)(_WithCard2.default, {
    user: user
  })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _formatJoinDate2.default)(user.createdAt)), _ref2, (0, _jsx3.default)(_Table.TableCell, {}, void 0, user.roles.join(', ')), _ref3);
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired
} : {};

exports.default = UserRow;
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
