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

var _ThumbDown = require('material-ui-icons/ThumbDown');

var _ThumbDown2 = _interopRequireDefault(_ThumbDown);

var _ThumbUp = require('material-ui-icons/ThumbUp');

var _ThumbUp2 = _interopRequireDefault(_ThumbUp);

var _Favorite = require('material-ui-icons/Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _FavoriteBorder = require('material-ui-icons/FavoriteBorder');

var _FavoriteBorder2 = _interopRequireDefault(_FavoriteBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;

  var CurrentFavoriteIcon = isFavorite ? _Favorite2.default : _FavoriteBorder2.default;
  return (0, _jsx3.default)('div', {
    className: 'MobileHistoryVotes'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'MobileHistoryVotes-vote'
  }, void 0, (0, _jsx3.default)(_ThumbUp2.default, {
    className: (0, _classnames2.default)('MobileHistoryVotes-icon', isUpvote && 'ResponseButton-icon--upvoted')
  }), (0, _jsx3.default)('span', {}, void 0, upvotes.length)), (0, _jsx3.default)('div', {
    className: 'MobileHistoryVotes-vote'
  }, void 0, (0, _jsx3.default)(CurrentFavoriteIcon, {
    className: 'MobileHistoryVotes-icon ResponseButton-icon--favorite'
  }), (0, _jsx3.default)('span', {}, void 0, favorites.length)), (0, _jsx3.default)('div', {
    className: 'MobileHistoryVotes-vote'
  }, void 0, (0, _jsx3.default)(_ThumbDown2.default, {
    className: (0, _classnames2.default)('MobileHistoryVotes-icon', isDownvote && 'ResponseButton-icon--downvoted')
  }), (0, _jsx3.default)('span', {}, void 0, downvotes.length)));
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvotes: _propTypes2.default.array.isRequired,
  favorites: _propTypes2.default.array.isRequired,
  downvotes: _propTypes2.default.array.isRequired,
  isUpvote: _propTypes2.default.bool.isRequired,
  isFavorite: _propTypes2.default.bool.isRequired,
  isDownvote: _propTypes2.default.bool.isRequired
} : {};

exports.default = Votes;
//# sourceMappingURL=Votes.js.map
//# sourceMappingURL=Votes.js.map
