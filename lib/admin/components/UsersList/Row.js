"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Avatar = _interopRequireDefault(require("../../../components/Avatar"));

var _WithCard = _interopRequireDefault(require("../../../components/Username/WithCard"));

var _UserRole = _interopRequireDefault(require("../../../components/UserRole"));

var _formatJoinDate = _interopRequireDefault(require("../../../utils/formatJoinDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionsStyle = {
  width: 48,
  paddingLeft: 0,
  paddingRight: 0
};
var TableCell = (0, _withProps.default)(function (props) {
  return {
    className: (0, _classnames.default)('AdminUserRow-cell', props.className)
  };
})(_TableCell.default);

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(TableCell, {}, void 0, "Email");

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MoreVert.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_MenuItem.default, {}, void 0, "Ban");

var UserRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(UserRow, _React$Component);

  function UserRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      open: false,
      anchorEl: null
    }, _this.menu = (0, _uniqueId.default)('menu'), _this.handleOpenMenu = function (event) {
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }, _this.handleCloseMenu = function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = UserRow.prototype;

  _proto.render = function render() {
    var user = this.props.user;
    var _this$state = this.state,
        open = _this$state.open,
        anchorEl = _this$state.anchorEl;
    return (0, _jsx2.default)(_TableRow.default, {
      className: "AdminUserRow"
    }, void 0, (0, _jsx2.default)(TableCell, {
      className: "AdminUserRow-avatar"
    }, void 0, (0, _jsx2.default)(_Avatar.default, {
      user: user
    })), (0, _jsx2.default)(TableCell, {}, void 0, (0, _jsx2.default)(_WithCard.default, {
      user: user
    })), (0, _jsx2.default)(TableCell, {}, void 0, (0, _formatJoinDate.default)(user.createdAt, 'date')), _ref, (0, _jsx2.default)(TableCell, {}, void 0, user.roles.length > 0 &&
    /* Only show the primary role here for space reasons. */
    (0, _jsx2.default)(_UserRole.default, {
      roleName: user.roles[0]
    })), (0, _jsx2.default)(TableCell, {
      style: actionsStyle
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      onClick: this.handleOpenMenu,
      "aria-haspopup": "true",
      "aria-owns": open ? this.menu : null
    }, void 0, _ref2), (0, _jsx2.default)(_Menu.default, {
      id: this.menu,
      open: open,
      anchorEl: anchorEl,
      onClose: this.handleCloseMenu
    }, void 0, _ref3)));
  };

  return UserRow;
}(_react.default.Component);

exports.default = UserRow;
UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired
} : {};
//# sourceMappingURL=Row.js.map
