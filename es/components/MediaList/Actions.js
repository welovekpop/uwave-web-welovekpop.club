import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var dontBubble = function dontBubble(event) {
  return event.stopPropagation();
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
var Actions = function Actions(_ref) {
  var className = _ref.className,
      makeActions = _ref.makeActions,
      media = _ref.media;
  return _jsx('div', {
    className: cx('MediaActions', className),
    onClick: dontBubble
  }, void 0, makeActions(media));
};
/* eslint-enable jsx-a11y/no-static-element-interactions */

Actions.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  media: PropTypes.object,
  makeActions: PropTypes.func
} : {};

export default Actions;
//# sourceMappingURL=Actions.js.map
