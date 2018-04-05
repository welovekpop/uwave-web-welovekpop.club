'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersDrawerIsOpenSelector = exports.drawerIsOpenSelector = undefined;

var _reselect = require('reselect');

var baseSelector = function baseSelector(state) {
  return state.mobile;
};

var drawerIsOpenSelector = exports.drawerIsOpenSelector = (0, _reselect.createSelector)(baseSelector, function (base) {
  return base.drawer;
});

var usersDrawerIsOpenSelector = exports.usersDrawerIsOpenSelector = (0, _reselect.createSelector)(baseSelector, function (base) {
  return base.usersDrawer;
});
//# sourceMappingURL=drawerSelectors.js.map
//# sourceMappingURL=drawerSelectors.js.map
