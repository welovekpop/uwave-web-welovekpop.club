'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThumbDown = require('material-ui-icons/ThumbDown');

var _ThumbDown2 = _interopRequireDefault(_ThumbDown);

var _Favorite = require('material-ui-icons/Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _ThumbUp = require('material-ui-icons/ThumbUp');

var _ThumbUp2 = _interopRequireDefault(_ThumbUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_Favorite2.default, {
  className: 'UserRow-voteIcon UserRow-voteIcon--favorite'
});

var _ref3 = (0, _jsx3.default)(_ThumbUp2.default, {
  className: 'UserRow-voteIcon UserRow-voteIcon--upvote'
});

var _ref4 = (0, _jsx3.default)(_ThumbDown2.default, {
  className: 'UserRow-voteIcon UserRow-voteIcon--downvote'
});

var Votes = function Votes(_ref) {
  var upvote = _ref.upvote,
      downvote = _ref.downvote,
      favorite = _ref.favorite,
      props = (0, _objectWithoutProperties3.default)(_ref, ['upvote', 'downvote', 'favorite']);

  return _react2.default.createElement('div', props, favorite && _ref2, upvote && _ref3, downvote && _ref4);
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvote: _propTypes2.default.bool,
  downvote: _propTypes2.default.bool,
  favorite: _propTypes2.default.bool
} : {};

exports.default = Votes;
//# sourceMappingURL=Votes.js.map
//# sourceMappingURL=Votes.js.map
