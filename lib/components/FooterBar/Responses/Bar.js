"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Favorite = _interopRequireDefault(require("./Favorite"));

var _Upvote = _interopRequireDefault(require("./Upvote"));

var _Downvote = _interopRequireDefault(require("./Downvote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponseBar = function ResponseBar(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      isUpvote = _ref.isUpvote,
      upvotesCount = _ref.upvotesCount,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      downvotesCount = _ref.downvotesCount,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      favoritesCount = _ref.favoritesCount,
      onFavorite = _ref.onFavorite;
  return (0, _jsx2.default)("div", {
    className: "AudienceResponse"
  }, void 0, (0, _jsx2.default)(_Upvote.default, {
    disabled: disabled,
    onUpvote: onUpvote,
    count: upvotesCount,
    active: isUpvote
  }), (0, _jsx2.default)(_Favorite.default, {
    disabled: disabled,
    onFavorite: onFavorite,
    count: favoritesCount,
    active: isFavorite
  }), (0, _jsx2.default)(_Downvote.default, {
    disabled: disabled,
    onDownvote: onDownvote,
    count: downvotesCount,
    active: isDownvote
  }));
};

ResponseBar.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  isUpvote: _propTypes.default.bool,
  isFavorite: _propTypes.default.bool,
  isDownvote: _propTypes.default.bool,
  upvotesCount: _propTypes.default.number.isRequired,
  favoritesCount: _propTypes.default.number.isRequired,
  downvotesCount: _propTypes.default.number.isRequired,
  onUpvote: _propTypes.default.func.isRequired,
  onFavorite: _propTypes.default.func.isRequired,
  onDownvote: _propTypes.default.func.isRequired
} : {};

var _default = (0, _pure.default)(ResponseBar); //# sourceMappingURL=Bar.js.map


exports.default = _default;
//# sourceMappingURL=Bar.js.map
