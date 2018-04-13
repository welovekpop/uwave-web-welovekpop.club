"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  listenersSelector: true
};
exports.listenersSelector = void 0;

var _reselect = require("reselect");

var _userSelectors = require("../../selectors/userSelectors");

Object.keys(_userSelectors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _userSelectors[key];
    }
  });
});

var _waitlistSelectors = require("../../selectors/waitlistSelectors");

var listenersSelector = (0, _reselect.createSelector)(_userSelectors.userListSelector, _waitlistSelectors.djAndWaitlistUsersSelector, function (users, waitlist) {
  return users.filter(function (user) {
    return !waitlist.some(function (waiting) {
      return waiting._id === user._id;
    });
  });
}); //# sourceMappingURL=userSelectors.js.map

exports.listenersSelector = listenersSelector;
//# sourceMappingURL=userSelectors.js.map
