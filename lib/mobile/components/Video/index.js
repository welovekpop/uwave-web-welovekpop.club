'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Player = require('../../../components/Player');

var _Player2 = _interopRequireDefault(_Player);

var _VoteButtons = require('./VoteButtons');

var _VoteButtons2 = _interopRequireDefault(_VoteButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function (_React$Component) {
  (0, _inherits3.default)(Video, _React$Component);

  function Video() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      showVoteButtons: false
    }, _this.handleClick = function () {
      _this.setState(function (s) {
        return {
          showVoteButtons: !s.showVoteButtons
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Video.prototype.render = function render() {
    var _props = this.props,
        voteStats = _props.voteStats,
        onUpvote = _props.onUpvote,
        onDownvote = _props.onDownvote,
        onFavorite = _props.onFavorite,
        props = (0, _objectWithoutProperties3.default)(_props, ['voteStats', 'onUpvote', 'onDownvote', 'onFavorite']);

    var showVoteButtons = this.state.showVoteButtons;

    return (0, _jsx3.default)('div', {
      className: 'Video'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'Video-player'
    }, void 0, _react2.default.createElement(_Player2.default, (0, _extends3.default)({}, props, {
      size: 'large'
    }))), (0, _jsx3.default)('button', {
      className: 'Video-buttonTrigger',
      onClick: this.handleClick,
      'aria-label': 'Show vote buttons'
    }), showVoteButtons && (0, _jsx3.default)('div', {
      className: 'Video-buttons'
    }, void 0, _react2.default.createElement(_VoteButtons2.default, (0, _extends3.default)({}, voteStats, {
      onUpvote: onUpvote,
      onDownvote: onDownvote,
      onFavorite: onFavorite
    }))));
  };

  return Video;
}(_react2.default.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  voteStats: _propTypes2.default.shape({
    isUpvote: _propTypes2.default.bool,
    isFavorite: _propTypes2.default.bool,
    isDownvote: _propTypes2.default.bool
  }),

  onUpvote: _propTypes2.default.func.isRequired,
  onDownvote: _propTypes2.default.func.isRequired,
  onFavorite: _propTypes2.default.func.isRequired
} : {};

exports.default = Video;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
