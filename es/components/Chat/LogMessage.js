import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

var LogMessage = function LogMessage(_ref) {
  var text = _ref.text;
  return _jsx("div", {
    className: "ChatMessage ChatMessage--log"
  }, void 0, _jsx("div", {
    className: "ChatMessage-content"
  }, void 0, _jsx("span", {
    className: "ChatMessage-text"
  }, void 0, text)));
};

LogMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  text: PropTypes.string.isRequired
} : {};
export default pure(LogMessage);
//# sourceMappingURL=LogMessage.js.map
