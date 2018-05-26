"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _lifecycle = _interopRequireDefault(require("recompose/lifecycle"));

var _UsersList = _interopRequireDefault(require("../components/UsersList"));

var _users = require("../actions/users");

var _userSelectors = require("../selectors/userSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  currentPage: _userSelectors.pageSelector,
  pageSize: _userSelectors.pageSizeSelector,
  totalUsers: _userSelectors.totalUsersSelector,
  users: _userSelectors.usersSelector
});
var mapDispatchToProps = {
  onLoadUsers: _users.loadUsers,
  onFilter: _users.setUsersFilter
};
var enhance = (0, _compose.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withProps.default)(function (props) {
  return {
    onChangePage: function onChangePage(event, page) {
      return props.onLoadUsers({
        offset: page * props.pageSize,
        limit: props.pageSize
      });
    },
    onFilter: function onFilter(filter) {
      props.onFilter(filter);
      props.onLoadUsers({
        offset: 0,
        limit: props.pageSize
      });
    }
  };
}), (0, _lifecycle.default)({
  componentDidMount: function componentDidMount() {
    this.props.onChangePage(null, 0);
  }
}));

var _default = enhance(_UsersList.default);

exports.default = _default;
//# sourceMappingURL=UsersList.js.map
