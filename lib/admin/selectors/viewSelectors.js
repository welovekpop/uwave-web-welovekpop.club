'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentViewSelector = undefined;

var _reselect = require('reselect');

var _baseSelector = require('./baseSelector');

var _baseSelector2 = _interopRequireDefault(_baseSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
var currentViewSelector = exports.currentViewSelector = (0, _reselect.createSelector)(_baseSelector2.default, function (base) {
  return base.view;
});
//# sourceMappingURL=viewSelectors.js.map
//# sourceMappingURL=viewSelectors.js.map
