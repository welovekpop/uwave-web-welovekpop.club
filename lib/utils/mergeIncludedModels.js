'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeIncludedModels;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeIncludedModels(_ref) {
  var data = _ref.data,
      meta = _ref.meta,
      included = _ref.included;

  Object.keys(meta.included || {}).forEach(function (type) {
    meta.included[type].forEach(function (path) {
      data.forEach(function (item) {
        var id = (0, _get2.default)(item, path);
        var model = (0, _find2.default)(included[type], function (m) {
          return m._id === id;
        });
        (0, _set2.default)(item, path, model);
      });
    });
  });
  return data;
}
//# sourceMappingURL=mergeIncludedModels.js.map
//# sourceMappingURL=mergeIncludedModels.js.map
