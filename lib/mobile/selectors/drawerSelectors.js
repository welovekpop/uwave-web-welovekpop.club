"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersDrawerIsOpenSelector = exports.drawerIsOpenSelector = void 0;

var _reselect = require("reselect");

var baseSelector = function baseSelector(state) {
  return state.mobile;
};

var drawerIsOpenSelector = (0, _reselect.createSelector)(baseSelector, function (base) {
  return base.drawer;
});
exports.drawerIsOpenSelector = drawerIsOpenSelector;
var usersDrawerIsOpenSelector = (0, _reselect.createSelector)(baseSelector, function (base) {
  return base.usersDrawer;
});
exports.usersDrawerIsOpenSelector = usersDrawerIsOpenSelector;
//# sourceMappingURL=drawerSelectors.js.map
