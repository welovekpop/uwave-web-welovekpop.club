"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelector = exports.pageSelector = void 0;

var _reselect = require("reselect");

var _baseSelector = _interopRequireDefault(require("./baseSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.currentPage;
});
exports.pageSelector = pageSelector;
var usersSelector = (0, _reselect.createSelector)(_baseSelector.default, function (base) {
  return base.users.users;
}); //# sourceMappingURL=userSelectors.js.map

exports.usersSelector = usersSelector;
//# sourceMappingURL=userSelectors.js.map
