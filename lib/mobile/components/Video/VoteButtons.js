"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _FavoriteBorder = _interopRequireDefault(require("@material-ui/icons/FavoriteBorder"));

var _ThumbDown = _interopRequireDefault(require("@material-ui/icons/ThumbDown"));

var _ThumbUp = _interopRequireDefault(require("@material-ui/icons/ThumbUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Favorite.default, {
  className: "ResponseButton-icon--favorite"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_FavoriteBorder.default, {});

var VoteButtons = function VoteButtons(_ref) {
  var isUpvote = _ref.isUpvote,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      onFavorite = _ref.onFavorite;
  return (0, _jsx2.default)("div", {
    className: "VoteButtons"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    onClick: onUpvote,
    className: "VoteButtons-button"
  }, void 0, (0, _jsx2.default)(_ThumbUp.default, {
    className: (0, _classnames.default)(isUpvote && 'ResponseButton-icon--upvoted')
  })), (0, _jsx2.default)(_IconButton.default, {
    onClick: onFavorite,
    className: "VoteButtons-button"
  }, void 0, isFavorite ? _ref2 : _ref3), (0, _jsx2.default)(_IconButton.default, {
    onClick: onDownvote,
    className: "VoteButtons-button"
  }, void 0, (0, _jsx2.default)(_ThumbDown.default, {
    className: (0, _classnames.default)(isDownvote && 'ResponseButton-icon--downvoted')
  })));
};

VoteButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  isUpvote: _propTypes.default.bool,
  isFavorite: _propTypes.default.bool,
  isDownvote: _propTypes.default.bool,
  onUpvote: _propTypes.default.func.isRequired,
  onDownvote: _propTypes.default.func.isRequired,
  onFavorite: _propTypes.default.func.isRequired
} : {};
var _default = VoteButtons; //# sourceMappingURL=VoteButtons.js.map

exports.default = _default;
//# sourceMappingURL=VoteButtons.js.map
