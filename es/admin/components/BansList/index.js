import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import { translate } from 'react-i18next';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from '../../../components/Table';
import BanRow from './Row';

var enhance = translate();
var avatarStyle = {
  width: 48,
  paddingRight: 0
};

var Header = withProps({
  style: {
    background: '#9d2053',
    padding: '12px 24px',
    lineHeight: '35px'
  }
})('div');

var Filter = withProps({
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

var _ref2 = _jsx('span', {}, void 0, 'Managing Bans:');

var _ref3 = _jsx(Filter, {});

var _ref4 = _jsx(TableHeaderColumn, {
  style: avatarStyle
});

var BansList = function BansList(_ref) {
  var t = _ref.t,
      bans = _ref.bans,
      _onUnbanUser = _ref.onUnbanUser;
  return _jsx(React.Fragment, {}, void 0, _jsx(Header, {}, void 0, _ref2, _jsx('span', {
    style: { float: 'right' }
  }, void 0, 'Filter User:', _ref3)), _jsx(Table, {
    selectable: false
  }, void 0, _jsx(TableHeader, {
    displaySelectAll: false,
    adjustForCheckbox: false
  }, void 0, _jsx(TableRow, {}, void 0, _ref4, _jsx(TableHeaderColumn, {}, void 0, t('admin.bans.user')), _jsx(TableHeaderColumn, {}, void 0, t('admin.bans.duration')), _jsx(TableHeaderColumn, {}, void 0, t('admin.bans.reason')), _jsx(TableHeaderColumn, {}, void 0, t('admin.bans.bannedBy')), _jsx(TableHeaderColumn, {}, void 0, t('admin.bans.actions')))), _jsx(TableBody, {
    stripedRows: true
  }, void 0, bans.map(function (ban) {
    return _jsx(BanRow, {
      ban: ban,
      onUnbanUser: function onUnbanUser() {
        return _onUnbanUser(ban.user);
      }
    }, ban.user._id);
  }))));
};

BansList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  bans: PropTypes.array.isRequired,
  onUnbanUser: PropTypes.func.isRequired
} : {};

export default enhance(BansList);
//# sourceMappingURL=index.js.map
