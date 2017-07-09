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

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _thumbDown = require('material-ui/svg-icons/action/thumb-down');

var _thumbDown2 = _interopRequireDefault(_thumbDown);

var _favorite = require('material-ui/svg-icons/action/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _thumbUp = require('material-ui/svg-icons/action/thumb-up');

var _thumbUp2 = _interopRequireDefault(_thumbUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_thumbUp2.default, {
  className: 'UserRow-voteIcon',
  color: '#4BB64B'
});

var _ref3 = (0, _jsx3.default)(_thumbDown2.default, {
  className: 'UserRow-voteIcon',
  color: '#B64B4B'
});

var Votes = function Votes(_ref) {
  var muiTheme = _ref.muiTheme,
      upvote = _ref.upvote,
      downvote = _ref.downvote,
      favorite = _ref.favorite,
      props = (0, _objectWithoutProperties3.default)(_ref, ['muiTheme', 'upvote', 'downvote', 'favorite']);

  return _react2.default.createElement('div', props, favorite && (0, _jsx3.default)(_favorite2.default, {
    className: 'UserRow-voteIcon',
    color: muiTheme.palette.primary1Color
  }), upvote && _ref2, downvote && _ref3);
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  upvote: _propTypes2.default.bool,
  downvote: _propTypes2.default.bool,
  favorite: _propTypes2.default.bool
} : {};

exports.default = (0, _muiThemeable2.default)()(Votes);
//# sourceMappingURL=Votes.js.map
//# sourceMappingURL=Votes.js.map
