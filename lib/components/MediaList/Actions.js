'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dontBubble = function dontBubble(event) {
  return event.stopPropagation();
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
var Actions = function Actions(_ref) {
  var className = _ref.className,
      makeActions = _ref.makeActions,
      media = _ref.media;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('MediaActions', className),
    onClick: dontBubble
  }, void 0, makeActions(media));
};
/* eslint-enable jsx-a11y/no-static-element-interactions */

Actions.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  media: _propTypes2.default.object,
  makeActions: _propTypes2.default.func
} : {};

exports.default = Actions;
//# sourceMappingURL=Actions.js.map
//# sourceMappingURL=Actions.js.map
