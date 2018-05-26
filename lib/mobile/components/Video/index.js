"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Player = _interopRequireDefault(require("../../../components/Player"));

var _VideoBackdrop = _interopRequireDefault(require("../../../components/Video/VideoBackdrop"));

var _VoteButtons = _interopRequireDefault(require("./VoteButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Video, _React$Component);

  function Video() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      sourceType: undefined,
      // eslint-disable-line react/no-unused-state
      enableOverlay: false,
      showVoteButtons: false
    }, _this.handleClick = function () {
      _this.setState(function (s) {
        return {
          showVoteButtons: !s.showVoteButtons
        };
      });
    }, _this.handlePlay = function () {
      _this.setState({
        enableOverlay: true
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  Video.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var _ref = nextProps.media || {},
        sourceType = _ref.sourceType; // Switching to a different source type may require an autoplay tap again.
    // Disable the vote buttons until the media source reports playback started.


    if (sourceType !== prevState.sourceType) {
      return {
        enableOverlay: sourceType === undefined,
        sourceType: sourceType
      };
    }

    return null;
  };

  var _proto = Video.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        media = _this$props.media,
        voteStats = _this$props.voteStats,
        onUpvote = _this$props.onUpvote,
        onDownvote = _this$props.onDownvote,
        onFavorite = _this$props.onFavorite,
        props = (0, _objectWithoutProperties2.default)(_this$props, ["media", "voteStats", "onUpvote", "onDownvote", "onFavorite"]);
    var _this$state = this.state,
        enableOverlay = _this$state.enableOverlay,
        showVoteButtons = _this$state.showVoteButtons;
    return (0, _jsx2.default)("div", {
      className: "Video"
    }, void 0, media && (0, _jsx2.default)(_VideoBackdrop.default, {
      url: media.thumbnail
    }), (0, _jsx2.default)("div", {
      className: "Video-player"
    }, void 0, _react.default.createElement(_Player.default, (0, _extends2.default)({}, props, {
      media: media,
      size: "large",
      onPlay: this.handlePlay
    }))), enableOverlay && (0, _jsx2.default)("button", {
      className: "Video-buttonTrigger",
      onClick: this.handleClick,
      "aria-label": "Show vote buttons"
    }), showVoteButtons && (0, _jsx2.default)("div", {
      className: "Video-buttons"
    }, void 0, _react.default.createElement(_VoteButtons.default, (0, _extends2.default)({}, voteStats, {
      onUpvote: onUpvote,
      onDownvote: onDownvote,
      onFavorite: onFavorite
    }))));
  };

  return Video;
}(_react.default.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.shape({
    sourceType: _propTypes.default.string.isRequired,
    thumbnail: _propTypes.default.string.isRequired
  }),
  voteStats: _propTypes.default.shape({
    isUpvote: _propTypes.default.bool,
    isFavorite: _propTypes.default.bool,
    isDownvote: _propTypes.default.bool
  }),
  onUpvote: _propTypes.default.func.isRequired,
  onDownvote: _propTypes.default.func.isRequired,
  onFavorite: _propTypes.default.func.isRequired
} : {};
var _default = Video;
exports.default = _default;
//# sourceMappingURL=index.js.map
