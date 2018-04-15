import { createSelector } from 'reselect';
import baseSelector from './baseSelector';
export var pageSizeSelector = function pageSizeSelector() {
  return 25;
};
export var pageSelector = createSelector(baseSelector, function (base) {
  return base.users.currentPage;
});
export var totalUsersSelector = createSelector(baseSelector, function (base) {
  return base.users.totalUsers;
});
export var filterSelector = createSelector(baseSelector, function (base) {
  return base.users.filter;
});
export var usersSelector = createSelector(baseSelector, function (base) {
  return base.users.users;
});
//# sourceMappingURL=userSelectors.js.map
