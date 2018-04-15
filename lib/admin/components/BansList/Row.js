"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _ms = _interopRequireDefault(require("ms"));

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _Table = require("material-ui/Table");

var _Avatar = _interopRequireDefault(require("../../../components/Avatar"));

var _WithCard = _interopRequireDefault(require("../../../components/Username/WithCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();
var avatarStyle = {
  width: 48,
  paddingRight: 0
};

var BanRow = function BanRow(_ref) {
  var t = _ref.t,
      ban = _ref.ban,
      onUnbanUser = _ref.onUnbanUser;
  return (0, _jsx2.default)(_Table.TableRow, {}, void 0, (0, _jsx2.default)(_Table.TableCell, {
    style: avatarStyle
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    user: ban.user
  })), (0, _jsx2.default)(_Table.TableCell, {}, void 0, (0, _jsx2.default)(_WithCard.default, {
    user: ban.user
  })), (0, _jsx2.default)(_Table.TableCell, {}, void 0, (0, _ms.default)(ban.duration, {
    long: true
  })), (0, _jsx2.default)(_Table.TableCell, {}, void 0, ban.reason || (0, _jsx2.default)("em", {}, void 0, t('admin.bans.noReason'))), (0, _jsx2.default)(_Table.TableCell, {}, void 0, (0, _jsx2.default)(_WithCard.default, {
    user: ban.moderator
  })), (0, _jsx2.default)(_Table.TableCell, {}, void 0, (0, _jsx2.default)(_Button.default, {
    variant: "raised",
    onClick: onUnbanUser
  }, void 0, t('admin.bans.unban'))));
};

BanRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  ban: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    duration: _propTypes.default.number.isRequired,
    reason: _propTypes.default.string,
    moderator: _propTypes.default.object.isRequired
  }).isRequired,
  onUnbanUser: _propTypes.default.func.isRequired
} : {};

var _default = enhance(BanRow); //# sourceMappingURL=Row.js.map


exports.default = _default;
//# sourceMappingURL=Row.js.map
