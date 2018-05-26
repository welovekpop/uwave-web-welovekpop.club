import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/es/Paper";
import List from "@material-ui/core/es/List";

var SuggestionsList = function SuggestionsList(_ref) {
  var children = _ref.children;
  return _jsx("div", {
    className: "ChatInput-suggestions"
  }, void 0, _jsx(Paper, {}, void 0, _jsx(List, {}, void 0, children)));
};

SuggestionsList.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired
} : {};
export default SuggestionsList;
//# sourceMappingURL=SuggestionsList.js.map
