"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Row = _interopRequireDefault(require("./Row"));

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_TableCell.default, {
  className: "AdminUserRow-avatar"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_TableCell.default, {});

var UsersList = function UsersList(_ref) {
  var t = _ref.t,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      totalUsers = _ref.totalUsers,
      users = _ref.users,
      onChangePage = _ref.onChangePage,
      onFilter = _ref.onFilter;
  return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Header.default, {
    onFilter: onFilter
  }), (0, _jsx2.default)(_Table.default, {}, void 0, (0, _jsx2.default)(_TableHead.default, {}, void 0, (0, _jsx2.default)(_TableRow.default, {
    className: "AdminUserRow"
  }, void 0, _ref2, (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.users.user')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.users.joinedAt')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.users.email')), (0, _jsx2.default)(_TableCell.default, {}, void 0, t('admin.users.roles')), _ref3)), (0, _jsx2.default)(_TableBody.default, {}, void 0, users.map(function (user) {
    return (0, _jsx2.default)(_Row.default, {
      user: user
    });
  })), (0, _jsx2.default)(_TableFooter.default, {}, void 0, (0, _jsx2.default)(_TableRow.default, {}, void 0, (0, _jsx2.default)(_TablePagination.default, {
    count: totalUsers,
    rowsPerPage: pageSize,
    rowsPerPageOptions: [pageSize],
    page: currentPage,
    onChangePage: onChangePage
  })))));
};

UsersList.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  totalUsers: _propTypes.default.number.isRequired,
  users: _propTypes.default.array.isRequired,
  onChangePage: _propTypes.default.func.isRequired,
  onFilter: _propTypes.default.func.isRequired
} : {};

var _default = enhance(UsersList);

exports.default = _default;
//# sourceMappingURL=index.js.map
