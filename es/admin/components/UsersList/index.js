import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import withProps from 'recompose/withProps'; // eslint-disable-next-line

import Table, { TableBody, TableHead, TableCell, TableRow } from "material-ui/es/Table";
import UserRow from './Row';
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
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx("span", {}, void 0, "Managing Users:");

var _ref3 =
/*#__PURE__*/
_jsx(Filter, {});

var _ref4 =
/*#__PURE__*/
_jsx(TableCell, {});

var _ref5 =
/*#__PURE__*/
_jsx(TableCell, {});

var UsersList = function UsersList(_ref) {
  var t = _ref.t,
      users = _ref.users;
  return _jsx(React.Fragment, {}, void 0, _jsx(Header, {}, void 0, _ref2, _jsx("span", {
    style: {
      float: 'right'
    }
  }, void 0, "Filter User:", _ref3)), _jsx(Table, {}, void 0, _jsx(TableHead, {}, void 0, _jsx(TableRow, {}, void 0, _ref4, _jsx(TableCell, {}, void 0, t('admin.users.user')), _jsx(TableCell, {}, void 0, t('admin.users.joinedAt')), _jsx(TableCell, {}, void 0, t('admin.users.email')), _jsx(TableCell, {}, void 0, t('admin.users.roles')), _ref5)), _jsx(TableBody, {}, void 0, users.map(function (user) {
    return _jsx(UserRow, {
      user: user
    });
  }))));
};

UsersList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
} : {};
export default enhance(UsersList);
//# sourceMappingURL=index.js.map
