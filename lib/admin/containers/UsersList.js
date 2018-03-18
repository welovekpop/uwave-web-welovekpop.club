'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _UsersList = require('../components/UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _users = require('../actions/users');

var _userSelectors = require('../selectors/userSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  currentPage: _userSelectors.pageSelector,
  users: _userSelectors.usersSelector
});

var mapDispatchToProps = {
  onLoadUsers: _users.loadUsers
};

exports.default = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _lifecycle2.default)({
  componentDidMount: function componentDidMount() {
    this.props.onLoadUsers();
  }
}))(_UsersList2.default);
//# sourceMappingURL=UsersList.js.map
//# sourceMappingURL=UsersList.js.map
