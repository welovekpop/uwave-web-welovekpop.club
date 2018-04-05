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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Favorite = require('material-ui-icons/Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _FavoriteBorder = require('material-ui-icons/FavoriteBorder');

var _FavoriteBorder2 = _interopRequireDefault(_FavoriteBorder);

var _ThumbDown = require('material-ui-icons/ThumbDown');

var _ThumbDown2 = _interopRequireDefault(_ThumbDown);

var _ThumbUp = require('material-ui-icons/ThumbUp');

var _ThumbUp2 = _interopRequireDefault(_ThumbUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_Favorite2.default, {
  className: 'ResponseButton-icon--favorite'
});

var _ref3 = (0, _jsx3.default)(_FavoriteBorder2.default, {});

var VoteButtons = function VoteButtons(_ref) {
  var isUpvote = _ref.isUpvote,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      onFavorite = _ref.onFavorite;
  return (0, _jsx3.default)('div', {
    className: 'VoteButtons'
  }, void 0, (0, _jsx3.default)(_IconButton2.default, {
    onClick: onUpvote,
    className: 'VoteButtons-button'
  }, void 0, (0, _jsx3.default)(_ThumbUp2.default, {
    className: (0, _classnames2.default)(isUpvote && 'ResponseButton-icon--upvoted')
  })), (0, _jsx3.default)(_IconButton2.default, {
    onClick: onFavorite,
    className: 'VoteButtons-button'
  }, void 0, isFavorite ? _ref2 : _ref3), (0, _jsx3.default)(_IconButton2.default, {
    onClick: onDownvote,
    className: 'VoteButtons-button'
  }, void 0, (0, _jsx3.default)(_ThumbDown2.default, {
    className: (0, _classnames2.default)(isDownvote && 'ResponseButton-icon--downvoted')
  })));
};

VoteButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  isUpvote: _propTypes2.default.bool,
  isFavorite: _propTypes2.default.bool,
  isDownvote: _propTypes2.default.bool,
  onUpvote: _propTypes2.default.func.isRequired,
  onDownvote: _propTypes2.default.func.isRequired,
  onFavorite: _propTypes2.default.func.isRequired
} : {};

exports.default = VoteButtons;
//# sourceMappingURL=VoteButtons.js.map
//# sourceMappingURL=VoteButtons.js.map
