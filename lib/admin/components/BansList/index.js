"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactI18next = require("react-i18next");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Row = _interopRequireDefault(require("./Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();
var Header = (0, _withProps.default)({
  style: {
    background: '#9d2053',
    padding: '12px 24px',
    lineHeight: '35px'
  }
})('div');
var Filter = (0, _withProps.default)({
  style: {
    background: '#631032',
    color: '#ffffff',
    border: 0,
    marginLeft: 12,
    paddingLeft: 12,
    height: 35
  },
  type: 'text'
})('input');

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("span", {}, void 0, "Managing Bans:");

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(Filter, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_TableCell.default, {});

var BansList = function BansList(_ref) {
  var t = _ref.t,
      bans = _ref.bans,
      _onUnbanUser = _ref.onUnbanUser;
  return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(Header, {}, void 0, _ref2, (0, _jsx2.default)("span", {
    style: {
      float: 'right'
    }
  }, void 0, "Filter User:", _ref3)), (0, _jsx2.default)(_Table.default, {}, void 0, (0, _jsx2.default)(_TableHead.default, {}, void 0, (0, _jsx2.default)(_TableRow.default, {}, void 0, _ref4, (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.bans.user')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.bans.duration')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.bans.reason')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.bans.bannedBy')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.bans.actions')))), (0, _jsx2.default)(_TableBody.default, {}, void 0, bans.map(function (ban) {
    return (0, _jsx2.default)(_Row.default, {
      ban: ban,
      onUnbanUser: function onUnbanUser() {
        return _onUnbanUser(ban.user);
      }
    }, ban.user._id);
  }))));
};

BansList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  bans: _propTypes.default.array.isRequired,
  onUnbanUser: _propTypes.default.func.isRequired
} : {};

var _default = enhance(BansList);

exports.default = _default;
//# sourceMappingURL=index.js.map
