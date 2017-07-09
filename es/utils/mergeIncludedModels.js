import getPath from 'lodash/get';
import setPath from 'lodash/set';
import find from 'lodash/find';

export default function mergeIncludedModels(_ref) {
  var data = _ref.data,
      meta = _ref.meta,
      included = _ref.included;

  Object.keys(meta.included || {}).forEach(function (type) {
    meta.included[type].forEach(function (path) {
      data.forEach(function (item) {
        var id = getPath(item, path);
        var model = find(included[type], function (m) {
          return m._id === id;
        });
        setPath(item, path, model);
      });
    });
  });
  return data;
}
//# sourceMappingURL=mergeIncludedModels.js.map
