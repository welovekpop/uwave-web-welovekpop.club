import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Player from '../../../components/Player';
import VideoBackdrop from '../../../components/Video/VideoBackdrop';
import VoteButtons from './VoteButtons';

var Video =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Video, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
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
        props = _objectWithoutProperties(_this$props, ["media", "voteStats", "onUpvote", "onDownvote", "onFavorite"]);

    var _this$state = this.state,
        enableOverlay = _this$state.enableOverlay,
        showVoteButtons = _this$state.showVoteButtons;
    return _jsx("div", {
      className: "Video"
    }, void 0, media && _jsx(VideoBackdrop, {
      url: media.thumbnail
    }), _jsx("div", {
      className: "Video-player"
    }, void 0, React.createElement(Player, _extends({}, props, {
      media: media,
      size: "large",
      onPlay: this.handlePlay
    }))), enableOverlay && _jsx("button", {
      className: "Video-buttonTrigger",
      onClick: this.handleClick,
      "aria-label": "Show vote buttons"
    }), showVoteButtons && _jsx("div", {
      className: "Video-buttons"
    }, void 0, React.createElement(VoteButtons, _extends({}, voteStats, {
      onUpvote: onUpvote,
      onDownvote: onDownvote,
      onFavorite: onFavorite
    }))));
  };

  return Video;
}(React.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.shape({
    sourceType: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }),
  voteStats: PropTypes.shape({
    isUpvote: PropTypes.bool,
    isFavorite: PropTypes.bool,
    isDownvote: PropTypes.bool
  }),
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired
} : {};
export default Video;
//# sourceMappingURL=index.js.map
