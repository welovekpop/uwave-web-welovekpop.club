"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThumbDown = _interopRequireDefault(require("@material-ui/icons/ThumbDown"));

var _ThumbUp = _interopRequireDefault(require("@material-ui/icons/ThumbUp"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _FavoriteBorder = _interopRequireDefault(require("@material-ui/icons/FavoriteBorder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;
  var CurrentFavoriteIcon = isFavorite ? _Favorite.default : _FavoriteBorder.default;
  return (0, _jsx2.default)("div", {
    className: "MobileHistoryVotes"
  }, void 0, (0, _jsx2.default)("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, (0, _jsx2.default)(_ThumbUp.default, {
    className: (0, _classnames.default)('MobileHistoryVotes-icon', isUpvote && 'ResponseButton-icon--upvoted')
  }), (0, _jsx2.default)("span", {}, void 0, upvotes.length)), (0, _jsx2.default)("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, (0, _jsx2.default)(CurrentFavoriteIcon, {
    className: "MobileHistoryVotes-icon ResponseButton-icon--favorite"
  }), (0, _jsx2.default)("span", {}, void 0, favorites.length)), (0, _jsx2.default)("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, (0, _jsx2.default)(_ThumbDown.default, {
    className: (0, _classnames.default)('MobileHistoryVotes-icon', isDownvote && 'ResponseButton-icon--downvoted')
  }), (0, _jsx2.default)("span", {}, void 0, downvotes.length)));
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvotes: _propTypes.default.array.isRequired,
  favorites: _propTypes.default.array.isRequired,
  downvotes: _propTypes.default.array.isRequired,
  isUpvote: _propTypes.default.bool.isRequired,
  isFavorite: _propTypes.default.bool.isRequired,
  isDownvote: _propTypes.default.bool.isRequired
} : {};
var _default = Votes; //# sourceMappingURL=Votes.js.map

exports.default = _default;
//# sourceMappingURL=Votes.js.map
