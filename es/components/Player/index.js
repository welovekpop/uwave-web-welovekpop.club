import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import isEqual from 'is-equal-shallow';
import React from 'react';
import PropTypes from 'prop-types';
import injectMediaSources from '../../utils/injectMediaSources';

var enhance = injectMediaSources();

var _ref = _jsx('div', {
  className: 'Player'
});

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Player.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  };

  Player.prototype.render = function render() {
    var _props = this.props,
        getAllMediaSources = _props.getAllMediaSources,
        enabled = _props.enabled,
        size = _props.size,
        volume = _props.volume,
        isMuted = _props.isMuted,
        media = _props.media,
        seek = _props.seek;


    if (!media) {
      return _ref;
    }

    var props = {
      enabled: enabled,
      media: media,
      seek: seek,
      mode: size,
      volume: isMuted ? 0 : volume
    };

    var sources = getAllMediaSources();
    var players = Object.keys(sources).map(function (sourceType) {
      var SourcePlayer = sources[sourceType].Player;
      if (!SourcePlayer) {
        return null;
      }
      return React.createElement(SourcePlayer, _extends({
        key: sourceType
      }, props, {
        active: media.sourceType === sourceType
      }));
    }).filter(function (player) {
      return player !== null;
    });

    return _jsx('div', {
      className: cx('Player', 'Player--' + media.sourceType, 'Player--' + size)
    }, void 0, players);
  };

  return Player;
}(React.Component);

Player.propTypes = process.env.NODE_ENV !== "production" ? {
  getAllMediaSources: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  size: PropTypes.string,
  volume: PropTypes.number,
  isMuted: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number
} : {};


export default enhance(Player);
//# sourceMappingURL=index.js.map
