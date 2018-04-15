import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var dontBubble = function dontBubble(event) {
  return event.stopPropagation();
};
/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */


var Actions = function Actions(_ref) {
  var className = _ref.className,
      makeActions = _ref.makeActions,
      media = _ref.media;
  return _jsx("div", {
    className: cx('MediaActions', className),
    onClick: dontBubble
  }, void 0, makeActions(media));
};
/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */


Actions.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  media: PropTypes.object,
  makeActions: PropTypes.func
} : {};
export default Actions;
//# sourceMappingURL=Actions.js.map
