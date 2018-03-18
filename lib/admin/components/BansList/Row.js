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

var _reactI18next = require('react-i18next');

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Table = require('../../../components/Table');

var _Avatar = require('../../../components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _WithCard = require('../../../components/Username/WithCard');

var _WithCard2 = _interopRequireDefault(_WithCard);

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
  return (0, _jsx3.default)(_Table.TableRow, {}, void 0, (0, _jsx3.default)(_Table.TableCell, {
    style: avatarStyle
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    user: ban.user
  })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _jsx3.default)(_WithCard2.default, {
    user: ban.user
  })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _ms2.default)(ban.duration, { long: true })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, ban.reason || (0, _jsx3.default)('em', {}, void 0, t('admin.bans.noReason'))), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _jsx3.default)(_WithCard2.default, {
    user: ban.moderator
  })), (0, _jsx3.default)(_Table.TableCell, {}, void 0, (0, _jsx3.default)(_RaisedButton2.default, {
    onClick: onUnbanUser,
    label: t('admin.bans.unban')
  })));
};

BanRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  ban: _propTypes2.default.shape({
    user: _propTypes2.default.object.isRequired,
    duration: _propTypes2.default.number.isRequired,
    reason: _propTypes2.default.string,
    moderator: _propTypes2.default.object.isRequired
  }).isRequired,
  onUnbanUser: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(BanRow);
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
