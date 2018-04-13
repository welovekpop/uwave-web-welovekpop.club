"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatJoinDate;

function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
} //# sourceMappingURL=formatJoinDate.js.map
//# sourceMappingURL=formatJoinDate.js.map
