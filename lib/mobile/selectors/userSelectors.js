'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenersSelector = undefined;

var _userSelectors = require('../../selectors/userSelectors');

Object.keys(_userSelectors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _userSelectors[key];
    }
  });
});

var _reselect = require('reselect');

var _waitlistSelectors = require('../../selectors/waitlistSelectors');

var listenersSelector = exports.listenersSelector = (0, _reselect.createSelector)(_userSelectors.userListSelector, _waitlistSelectors.djAndWaitlistUsersSelector, function (users, waitlist) {
  return users.filter(function (user) {
    return !waitlist.some(function (waiting) {
      return waiting._id === user._id;
    });
  });
});
//# sourceMappingURL=userSelectors.js.map
//# sourceMappingURL=userSelectors.js.map
