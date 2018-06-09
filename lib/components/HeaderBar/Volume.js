"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _VolumeDown = _interopRequireDefault(require("@material-ui/icons/VolumeDown"));

var _VolumeMute = _interopRequireDefault(require("@material-ui/icons/VolumeMute"));

var _VolumeOff = _interopRequireDefault(require("@material-ui/icons/VolumeOff"));

var _VolumeUp = _interopRequireDefault(require("@material-ui/icons/VolumeUp"));

var _Slider = _interopRequireDefault(require("@material-ui/lab/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Volume =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Volume, _React$Component);

  function Volume() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleVolumeChange = function (e, volume) {
      _this.props.onVolumeChange(volume);
    }, _this.handleMuteClick = function () {
      if (_this.props.muted) {
        _this.props.onUnmute();
      } else {
        _this.props.onMute();
      }
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Volume.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.volume !== nextProps.volume || this.props.muted !== nextProps.muted;
  };

  _proto.render = function render() {
    var VolumeIcon = _VolumeUp.default;

    if (this.props.muted) {
      VolumeIcon = _VolumeOff.default;
    } else if (this.props.volume === 0) {
      VolumeIcon = _VolumeMute.default;
    } else if (this.props.volume < 50) {
      VolumeIcon = _VolumeDown.default;
    }

    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('VolumeSlider', this.props.className)
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      onClick: this.handleMuteClick
    }, void 0, (0, _jsx2.default)(VolumeIcon, {})), (0, _jsx2.default)("div", {
      className: "VolumeSlider-slider"
    }, void 0, (0, _jsx2.default)(_Slider.default, {
      min: 0,
      max: 100,
      step: 1,
      value: this.props.volume,
      onChange: this.handleVolumeChange
    })));
  };

  return Volume;
}(_react.default.Component);

exports.default = Volume;
Volume.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  volume: _propTypes.default.number,
  muted: _propTypes.default.bool,
  onVolumeChange: _propTypes.default.func,
  onMute: _propTypes.default.func,
  onUnmute: _propTypes.default.func
} : {};
//# sourceMappingURL=Volume.js.map
