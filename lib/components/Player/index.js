"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqualShallow = _interopRequireDefault(require("is-equal-shallow"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _injectMediaSources = _interopRequireDefault(require("../../utils/injectMediaSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _injectMediaSources.default)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Player"
});

var Player =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Player, _React$Component);

  function Player() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Player.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _isEqualShallow.default)(nextProps, this.props);
  };

  _proto.render = function render() {
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

      return _react.default.createElement(SourcePlayer, (0, _extends2.default)({
        key: sourceType
      }, props, {
        active: media.sourceType === sourceType
      }));
    }).filter(function (player) {
      return player !== null;
    });
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('Player', "Player--" + media.sourceType, "Player--" + size)
    }, void 0, players);
  };

  return Player;
}(_react.default.Component);

Player.propTypes = process.env.NODE_ENV !== "production" ? {
  getAllMediaSources: _propTypes.default.func.isRequired,
  enabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  volume: _propTypes.default.number,
  isMuted: _propTypes.default.bool,
  media: _propTypes.default.object,
  seek: _propTypes.default.number
} : {};

var _default = enhance(Player); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
