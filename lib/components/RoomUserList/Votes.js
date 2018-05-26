"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThumbDown = _interopRequireDefault(require("@material-ui/icons/ThumbDown"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _ThumbUp = _interopRequireDefault(require("@material-ui/icons/ThumbUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Favorite.default, {
  className: "UserRow-voteIcon UserRow-voteIcon--favorite"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ThumbUp.default, {
  className: "UserRow-voteIcon UserRow-voteIcon--upvote"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_ThumbDown.default, {
  className: "UserRow-voteIcon UserRow-voteIcon--downvote"
});

var Votes = function Votes(_ref) {
  var upvote = _ref.upvote,
      downvote = _ref.downvote,
      favorite = _ref.favorite,
      props = (0, _objectWithoutProperties2.default)(_ref, ["upvote", "downvote", "favorite"]);
  return _react.default.createElement("div", props, favorite && _ref2, upvote && _ref3, downvote && _ref4);
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvote: _propTypes.default.bool,
  downvote: _propTypes.default.bool,
  favorite: _propTypes.default.bool
} : {};
var _default = Votes;
exports.default = _default;
//# sourceMappingURL=Votes.js.map
