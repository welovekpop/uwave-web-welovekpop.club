import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Table from "@material-ui/core/es/Table";
import TableHead from "@material-ui/core/es/TableHead";
import TableBody from "@material-ui/core/es/TableBody";
import TableFooter from "@material-ui/core/es/TableFooter";
import TablePagination from "@material-ui/core/es/TablePagination";
import TableRow from "@material-ui/core/es/TableRow";
import TableCell from "@material-ui/core/es/TableCell";
import UserRow from './Row';
import Header from './Header';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(TableCell, {
  className: "AdminUserRow-avatar"
});

var _ref3 =
/*#__PURE__*/
_jsx(TableCell, {});

var UsersList = function UsersList(_ref) {
  var t = _ref.t,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      totalUsers = _ref.totalUsers,
      users = _ref.users,
      onChangePage = _ref.onChangePage,
      onFilter = _ref.onFilter;
  return _jsx(React.Fragment, {}, void 0, _jsx(Header, {
    onFilter: onFilter
  }), _jsx(Table, {}, void 0, _jsx(TableHead, {}, void 0, _jsx(TableRow, {
    className: "AdminUserRow"
  }, void 0, _ref2, _jsx(TableCell, {}, void 0, t('admin.users.user')), _jsx(TableCell, {}, void 0, t('admin.users.joinedAt')), _jsx(TableCell, {}, void 0, t('admin.users.email')), _jsx(TableCell, {}, void 0, t('admin.users.roles')), _ref3)), _jsx(TableBody, {}, void 0, users.map(function (user) {
    return _jsx(UserRow, {
      user: user
    });
  })), _jsx(TableFooter, {}, void 0, _jsx(TableRow, {}, void 0, _jsx(TablePagination, {
    count: totalUsers,
    rowsPerPage: pageSize,
    rowsPerPageOptions: [pageSize],
    page: currentPage,
    onChangePage: onChangePage
  })))));
};

UsersList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired
} : {};
export default enhance(UsersList);
//# sourceMappingURL=index.js.map
