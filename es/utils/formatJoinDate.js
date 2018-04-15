import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
var formatters = {
  date: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  },
  time: {
    hour: 'numeric',
    minute: 'numeric'
  }
};

var all = _objectSpread({}, formatters.date, formatters.time);

export default function formatJoinDate(date, only) {
  var format = only ? formatters[only] : all;
  return new Date(date).toLocaleString([], format);
}
//# sourceMappingURL=formatJoinDate.js.map
