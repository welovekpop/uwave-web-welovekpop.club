import { createSelector } from 'reselect';
import baseSelector from './baseSelector';

export var pageSelector = createSelector(baseSelector, function (base) {
  return base.users.currentPage;
});

export var usersSelector = createSelector(baseSelector, function (base) {
  return base.users.users;
});
//# sourceMappingURL=userSelectors.js.map
