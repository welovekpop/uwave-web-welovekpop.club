"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelector = exports.filterSelector = exports.totalUsersSelector = exports.pageSelector = exports.pageSizeSelector = void 0;

var _reselect = require("reselect");

var _baseSelector = _interopRequireDefault(require("./baseSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageSizeSelector = function pageSizeSelector() {
  return 25;
};

exports.pageSizeSelector = pageSizeSelector;
var pageSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.currentPage;
});
exports.pageSelector = pageSelector;
var totalUsersSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.totalUsers;
});
exports.totalUsersSelector = totalUsersSelector;
var filterSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.filter;
});
exports.filterSelector = filterSelector;
var usersSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.users;
});
exports.usersSelector = usersSelector;
//# sourceMappingURL=userSelectors.js.map
