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

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Table = require('../../../components/Table');

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

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

var enhance = (0, _reactI18next.translate)();

var _ref2 = (0, _jsx3.default)('span', {}, void 0, 'Managing Users:');

var _ref3 = (0, _jsx3.default)(Filter, {});

var _ref4 = (0, _jsx3.default)(_Table.TableHeaderColumn, {
  style: avatarStyle
});

var _ref5 = (0, _jsx3.default)(_Table.TableHeaderColumn, {
  style: actionsStyle
});

var UsersList = function UsersList(_ref) {
  var t = _ref.t,
      users = _ref.users;
  return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(Header, {}, void 0, _ref2, (0, _jsx3.default)('span', {
    style: { float: 'right' }
  }, void 0, 'Filter User:', _ref3)), (0, _jsx3.default)(_Table.Table, {
    selectable: false
  }, void 0, (0, _jsx3.default)(_Table.TableHeader, {
    displaySelectAll: false,
    adjustForCheckbox: false
  }, void 0, (0, _jsx3.default)(_Table.TableRow, {}, void 0, _ref4, (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, t('admin.users.user')), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, t('admin.users.joinedAt')), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, t('admin.users.email')), (0, _jsx3.default)(_Table.TableHeaderColumn, {}, void 0, t('admin.users.roles')), _ref5)), (0, _jsx3.default)(_Table.TableBody, {
    stripedRows: true
  }, void 0, users.map(function (user) {
    return (0, _jsx3.default)(_Row2.default, {
      user: user
    });
  }))));
};

UsersList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  users: _propTypes2.default.array.isRequired
} : {};

exports.default = enhance(UsersList);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
