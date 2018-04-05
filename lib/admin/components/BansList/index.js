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

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactI18next = require('react-i18next');

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
var enhance = (0, _reactI18next.translate)();

var Header = (0, _withProps2.default)({
  style: {
    background: '#9d2053',
    padding: '12px 24px',
    lineHeight: '35px'
  }
})('div');

var Filter = (0, _withProps2.default)({
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

var _ref2 = (0, _jsx3.default)('span', {}, void 0, 'Managing Bans:');

var _ref3 = (0, _jsx3.default)(Filter, {});

var _ref4 = (0, _jsx3.default)(_Table.TableCell, {});

var BansList = function BansList(_ref) {
  var t = _ref.t,
      bans = _ref.bans,
      _onUnbanUser = _ref.onUnbanUser;
  return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(Header, {}, void 0, _ref2, (0, _jsx3.default)('span', {
    style: { float: 'right' }
  }, void 0, 'Filter User:', _ref3)), (0, _jsx3.default)(_Table2.default, {}, void 0, (0, _jsx3.default)(_Table.TableHead, {}, void 0, (0, _jsx3.default)(_Table.TableRow, {}, void 0, _ref4, (0, _jsx3.default)(_Table.TableCell, {}, void 0, t('admin.bans.user')), (0, _jsx3.default)(_Table.TableCell, {}, void 0, t('admin.bans.duration')), (0, _jsx3.default)(_Table.TableCell, {}, void 0, t('admin.bans.reason')), (0, _jsx3.default)(_Table.TableCell, {}, void 0, t('admin.bans.bannedBy')), (0, _jsx3.default)(_Table.TableCell, {}, void 0, t('admin.bans.actions')))), (0, _jsx3.default)(_Table.TableBody, {}, void 0, bans.map(function (ban) {
    return (0, _jsx3.default)(_Row2.default, {
      ban: ban,
      onUnbanUser: function onUnbanUser() {
        return _onUnbanUser(ban.user);
      }
    }, ban.user._id);
  }))));
};

BansList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  bans: _propTypes2.default.array.isRequired,
  onUnbanUser: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(BansList);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
