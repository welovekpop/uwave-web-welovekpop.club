import _extends from "@babel/runtime/helpers/builtin/extends";
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

var all = _extends({}, formatters.date, formatters.time);

export default function formatJoinDate(date, only) {
  var format = only ? formatters[only] : all;
  return new Date(date).toLocaleString([], format);
}
//# sourceMappingURL=formatJoinDate.js.map
