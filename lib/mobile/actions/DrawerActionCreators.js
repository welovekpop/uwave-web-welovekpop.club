"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDrawer = setDrawer;
exports.openDrawer = openDrawer;
exports.closeDrawer = closeDrawer;
exports.toggleDrawer = toggleDrawer;
exports.setUsersDrawer = setUsersDrawer;
exports.openUsersDrawer = openUsersDrawer;

var _ActionTypes = require("../constants/ActionTypes");

function setDrawer(val) {
  return {
    type: _ActionTypes.SET_DRAWER_OPEN,
    payload: val
  };
}

function openDrawer() {
  return setDrawer(true);
}

function closeDrawer() {
  return setDrawer(false);
}

function toggleDrawer() {
  return {
    type: _ActionTypes.TOGGLE_DRAWER_OPEN
  };
}

function setUsersDrawer(val) {
  return {
    type: _ActionTypes.SET_USERS_DRAWER_OPEN,
    payload: val
  };
}

function openUsersDrawer() {
  return setUsersDrawer(true);
}
//# sourceMappingURL=DrawerActionCreators.js.map
