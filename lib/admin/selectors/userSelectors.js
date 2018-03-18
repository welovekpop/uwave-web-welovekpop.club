'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersSelector = exports.pageSelector = undefined;

var _reselect = require('reselect');

var _baseSelector = require('./baseSelector');

var _baseSelector2 = _interopRequireDefault(_baseSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageSelector = exports.pageSelector = (0, _reselect.createSelector)(_baseSelector2.default, function (base) {
  return base.users.currentPage;
});

var usersSelector = exports.usersSelector = (0, _reselect.createSelector)(_baseSelector2.default, function (base) {
  return base.users.users;
});
//# sourceMappingURL=userSelectors.js.map
//# sourceMappingURL=userSelectors.js.map
