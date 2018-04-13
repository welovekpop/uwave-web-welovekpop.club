"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _lifecycle = _interopRequireDefault(require("recompose/lifecycle"));

var _UsersList = _interopRequireDefault(require("../components/UsersList"));

var _users = require("../actions/users");

var _userSelectors = require("../selectors/userSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  currentPage: _userSelectors.pageSelector,
  users: _userSelectors.usersSelector
});
var mapDispatchToProps = {
  onLoadUsers: _users.loadUsers
};

var _default = (0, _compose.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _lifecycle.default)({
  componentDidMount: function componentDidMount() {
    this.props.onLoadUsers();
  }
}))(_UsersList.default); //# sourceMappingURL=UsersList.js.map


exports.default = _default;
//# sourceMappingURL=UsersList.js.map
