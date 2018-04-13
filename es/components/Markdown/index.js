import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import BaseMarkdown from 'react-markdown';

var Markdown = function Markdown(_ref) {
  var source = _ref.source;
  return _jsx(BaseMarkdown, {
    escapeHtml: false,
    source: source
  });
};

Markdown.propTypes = process.env.NODE_ENV !== "production" ? {
  source: PropTypes.string.isRequired
} : {};
export default Markdown;
//# sourceMappingURL=index.js.map
