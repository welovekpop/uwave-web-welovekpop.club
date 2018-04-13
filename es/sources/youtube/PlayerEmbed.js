import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from '@u-wave/react-youtube';

var YouTubePlayerEmbed =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(YouTubePlayerEmbed, _React$Component);

  function YouTubePlayerEmbed() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleYTPause = function (event) {
      if (!_this.props.controllable && _this.props.active) {
        event.target.playVideo();
      }
    }, _this.refPlayer = function (player) {
      _this.player = player;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = YouTubePlayerEmbed.prototype;

  _proto.render = function render() {
    var _props = this.props,
        active = _props.active,
        media = _props.media,
        seek = _props.seek,
        volume = _props.volume,
        controllable = _props.controllable;
    return React.createElement(YouTube, {
      ref: this.refPlayer,
      video: active ? media.sourceID : null,
      width: "100%",
      height: "100%",
      autoplay: true,
      modestBranding: true,
      volume: volume / 100,
      playbackRate: 1,
      controls: controllable,
      showRelatedVideos: false,
      showInfo: false,
      annotations: false,
      startSeconds: (seek || 0) + (media.start || 0),
      endSeconds: media.end || media.duration,
      onPause: this.handleYTPause
    });
  };

  return YouTubePlayerEmbed;
}(React.Component);

YouTubePlayerEmbed.defaultProps = {
  controllable: false
};
export { YouTubePlayerEmbed as default };
YouTubePlayerEmbed.propTypes = process.env.NODE_ENV !== "production" ? {
  active: PropTypes.bool.isRequired,
  media: PropTypes.object,
  seek: PropTypes.number,
  volume: PropTypes.number,
  controllable: PropTypes.bool
} : {};
//# sourceMappingURL=PlayerEmbed.js.map
