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

var _thumbDown = require('material-ui/svg-icons/action/thumb-down');

var _thumbDown2 = _interopRequireDefault(_thumbDown);

var _thumbUp = require('material-ui/svg-icons/action/thumb-up');

var _thumbUp2 = _interopRequireDefault(_thumbUp);

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _favoriteBorder = require('material-ui/svg-icons/action/favorite-border');

var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);

var _MuiTheme = require('../../MuiTheme');

var _MuiTheme2 = _interopRequireDefault(_MuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyles = {
  height: 36,
  width: 36,
  padding: '6px 12px 6px 0'
};

var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;

  var CurrentFavoriteIcon = isFavorite ? _favorite2.default : _favoriteBorder2.default;
  return (0, _jsx3.default)('div', {
    className: 'HistoryVotes AudienceResponse'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ResponseButton-content'
  }, void 0, (0, _jsx3.default)(_thumbUp2.default, {
    style: iconStyles,
    color: isUpvote ? '#4BB64B' : 'white'
  }), (0, _jsx3.default)('span', {
    className: 'ResponseButton-count'
  }, void 0, upvotes.length))), (0, _jsx3.default)('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ResponseButton-content'
  }, void 0, (0, _jsx3.default)(CurrentFavoriteIcon, {
    style: iconStyles,
    color: _MuiTheme2.default.palette.primary1Color
  }), (0, _jsx3.default)('span', {
    className: 'ResponseButton-count'
  }, void 0, favorites.length))), (0, _jsx3.default)('div', {
    className: 'ResponseButton ResponseButton--static'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ResponseButton-content'
  }, void 0, (0, _jsx3.default)(_thumbDown2.default, {
    style: iconStyles,
    color: isDownvote ? '#B64B4B' : 'white'
  }), (0, _jsx3.default)('span', {
    className: 'ResponseButton-count'
  }, void 0, downvotes.length))));
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
