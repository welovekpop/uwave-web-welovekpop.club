import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
var timeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric'
};

var MessageTimestamp = function MessageTimestamp(_ref) {
  var date = _ref.date;
  return _jsx("time", {
    className: "ChatMessage-timestamp",
    dateTime: date.toISOString()
  }, void 0, date.toLocaleTimeString([], timeFormatOptions));
};

MessageTimestamp.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date).isRequired
} : {};
export default MessageTimestamp;
//# sourceMappingURL=MessageTimestamp.js.map
