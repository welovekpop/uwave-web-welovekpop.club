import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import compile from './Markup/compile';

var Motd = function Motd(_ref) {
  var children = _ref.children,
      compileOptions = _ref.compileOptions;
  return _jsx("div", {
    className: "ChatMessage ChatMessage--motd"
  }, void 0, _jsx("div", {
    className: "ChatMessage-content"
  }, void 0, compile(children, compileOptions)));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.array.isRequired,
  compileOptions: PropTypes.shape({
    availableEmoji: PropTypes.array,
    emojiImages: PropTypes.object
  })
} : {};
export default pure(Motd);
//# sourceMappingURL=Motd.js.map
