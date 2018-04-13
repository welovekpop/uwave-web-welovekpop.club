"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Menu = _interopRequireWildcard(require("material-ui/Menu"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _Table = require("material-ui/Table");

var _Avatar = _interopRequireDefault(require("../../../components/Avatar"));

var _WithCard = _interopRequireDefault(require("../../../components/Username/WithCard"));

var _formatJoinDate = _interopRequireDefault(require("../../../utils/formatJoinDate"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
var TableCell = (0, _withProps.default)({
  className: 'AdminUserRow-cell'
})(_Table.TableCell);

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(TableCell, {}, void 0, "Email");

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MoreVert.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Menu.MenuItem, {}, void 0, "Ban");

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
    var _state = this.state,
        open = _state.open,
        anchorEl = _state.anchorEl;
    return (0, _jsx2.default)(_Table.TableRow, {
      className: "AdminUserRow"
    }, void 0, (0, _jsx2.default)(TableCell, {
      style: avatarStyle
    }, void 0, (0, _jsx2.default)(_Avatar.default, {
      user: user
    })), (0, _jsx2.default)(TableCell, {}, void 0, (0, _jsx2.default)(_WithCard.default, {
      user: user
    })), (0, _jsx2.default)(TableCell, {}, void 0, (0, _formatJoinDate.default)(user.createdAt)), _ref, (0, _jsx2.default)(TableCell, {}, void 0, user.roles.join(', ')), (0, _jsx2.default)(TableCell, {
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
} : {}; //# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
