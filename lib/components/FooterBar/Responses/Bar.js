'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Favorite = require('./Favorite');

var _Favorite2 = _interopRequireDefault(_Favorite);

var _Upvote = require('./Upvote');

var _Upvote2 = _interopRequireDefault(_Upvote);

var _Downvote = require('./Downvote');

var _Downvote2 = _interopRequireDefault(_Downvote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResponseBar = function ResponseBar(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      isUpvote = _ref.isUpvote,
      upvotesCount = _ref.upvotesCount,
      onUpvote = _ref.onUpvote,
      isDownvote = _ref.isDownvote,
      downvotesCount = _ref.downvotesCount,
      onDownvote = _ref.onDownvote,
      isFavorite = _ref.isFavorite,
      favoritesCount = _ref.favoritesCount,
      onFavorite = _ref.onFavorite;
  return (0, _jsx3.default)('div', {
    className: 'AudienceResponse'
  }, void 0, (0, _jsx3.default)(_Upvote2.default, {
    disabled: disabled,
    onUpvote: onUpvote,
    count: upvotesCount,
    active: isUpvote
  }), (0, _jsx3.default)(_Favorite2.default, {
    disabled: disabled,
    onFavorite: onFavorite,
    count: favoritesCount,
    active: isFavorite
  }), (0, _jsx3.default)(_Downvote2.default, {
    disabled: disabled,
    onDownvote: onDownvote,
    count: downvotesCount,
    active: isDownvote
  }));
};

ResponseBar.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes2.default.bool,
  isUpvote: _propTypes2.default.bool,
  isFavorite: _propTypes2.default.bool,
  isDownvote: _propTypes2.default.bool,

  upvotesCount: _propTypes2.default.number.isRequired,
  favoritesCount: _propTypes2.default.number.isRequired,
  downvotesCount: _propTypes2.default.number.isRequired,

  onUpvote: _propTypes2.default.func.isRequired,
  onFavorite: _propTypes2.default.func.isRequired,
  onDownvote: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _pure2.default)(ResponseBar);
//# sourceMappingURL=Bar.js.map
//# sourceMappingURL=Bar.js.map
