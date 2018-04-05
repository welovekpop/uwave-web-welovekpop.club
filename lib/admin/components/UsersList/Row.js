'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MoreVert = require('material-ui-icons/MoreVert');

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _Table = require('material-ui/Table');

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

var TableCell = (0, _withProps2.default)({
  className: 'AdminUserRow-cell'
})(_Table.TableCell);

var _ref = (0, _jsx3.default)(TableCell, {}, void 0, 'Email');

var _ref2 = (0, _jsx3.default)(_MoreVert2.default, {});

var _ref3 = (0, _jsx3.default)(_Menu.MenuItem, {}, void 0, 'Ban');

var UserRow = function (_React$Component) {
  (0, _inherits3.default)(UserRow, _React$Component);

  function UserRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false,
      anchorEl: null
    }, _this.menu = (0, _uniqueId2.default)('menu'), _this.handleOpenMenu = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    }, _this.handleCloseMenu = function () {
      _this.setState({ open: false, anchorEl: null });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  UserRow.prototype.render = function render() {
    var user = this.props.user;
    var _state = this.state,
        open = _state.open,
        anchorEl = _state.anchorEl;

    return (0, _jsx3.default)(_Table.TableRow, {
      className: 'AdminUserRow'
    }, void 0, (0, _jsx3.default)(TableCell, {
      style: avatarStyle
    }, void 0, (0, _jsx3.default)(_Avatar2.default, {
      user: user
    })), (0, _jsx3.default)(TableCell, {}, void 0, (0, _jsx3.default)(_WithCard2.default, {
      user: user
    })), (0, _jsx3.default)(TableCell, {}, void 0, (0, _formatJoinDate2.default)(user.createdAt)), _ref, (0, _jsx3.default)(TableCell, {}, void 0, user.roles.join(', ')), (0, _jsx3.default)(TableCell, {
      style: actionsStyle
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      onClick: this.handleOpenMenu,
      'aria-haspopup': 'true',
      'aria-owns': open ? this.menu : null
    }, void 0, _ref2), (0, _jsx3.default)(_Menu2.default, {
      id: this.menu,
      open: open,
      anchorEl: anchorEl,
      onClose: this.handleCloseMenu
    }, void 0, _ref3)));
  };

  return UserRow;
}(_react2.default.Component);

exports.default = UserRow;

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired
} : {};
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
