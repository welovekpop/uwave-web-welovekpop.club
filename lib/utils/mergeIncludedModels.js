"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeIncludedModels;

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

var _find = _interopRequireDefault(require("lodash/find"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeIncludedModels(_ref) {
  var data = _ref.data,
      meta = _ref.meta,
      included = _ref.included;
  Object.keys(meta.included || {}).forEach(function (type) {
    meta.included[type].forEach(function (path) {
      data.forEach(function (item) {
        var id = (0, _get.default)(item, path);
        var model = (0, _find.default)(included[type], function (m) {
          return m._id === id;
        });
        (0, _set.default)(item, path, model);
      });
    });
  });
  return data;
}
//# sourceMappingURL=mergeIncludedModels.js.map
