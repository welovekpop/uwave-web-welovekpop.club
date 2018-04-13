import { createSelector } from 'reselect';

var baseSelector = function baseSelector(state) {
  return state.mobile;
};

export var drawerIsOpenSelector = createSelector(baseSelector, function (base) {
  return base.drawer;
});
export var usersDrawerIsOpenSelector = createSelector(baseSelector, function (base) {
  return base.usersDrawer;
});
//# sourceMappingURL=drawerSelectors.js.map
