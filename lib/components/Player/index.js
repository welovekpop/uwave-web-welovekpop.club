'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEqualShallow = require('is-equal-shallow');

var _isEqualShallow2 = _interopRequireDefault(_isEqualShallow);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _injectMediaSources = require('../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _injectMediaSources2.default)();

var _ref = (0, _jsx3.default)('div', {
  className: 'Player'
});

var Player = function (_React$Component) {
  (0, _inherits3.default)(Player, _React$Component);

  function Player() {
    (0, _classCallCheck3.default)(this, Player);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Player.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _isEqualShallow2.default)(nextProps, this.props);
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
      return _react2.default.createElement(SourcePlayer, (0, _extends3.default)({
        key: sourceType
      }, props, {
        active: media.sourceType === sourceType
      }));
    }).filter(function (player) {
      return player !== null;
    });

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('Player', 'Player--' + media.sourceType, 'Player--' + size)
    }, void 0, players);
  };

  return Player;
}(_react2.default.Component);

Player.propTypes = process.env.NODE_ENV !== "production" ? {
  getAllMediaSources: _propTypes2.default.func.isRequired,
  enabled: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  volume: _propTypes2.default.number,
  isMuted: _propTypes2.default.bool,
  media: _propTypes2.default.object,
  seek: _propTypes2.default.number
} : {};

exports.default = enhance(Player);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
