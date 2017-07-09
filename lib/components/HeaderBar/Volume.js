'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _volumeDown = require('material-ui/svg-icons/av/volume-down');

var _volumeDown2 = _interopRequireDefault(_volumeDown);

var _volumeMute = require('material-ui/svg-icons/av/volume-mute');

var _volumeMute2 = _interopRequireDefault(_volumeMute);

var _volumeOff = require('material-ui/svg-icons/av/volume-off');

var _volumeOff2 = _interopRequireDefault(_volumeOff);

var _volumeUp = require('material-ui/svg-icons/av/volume-up');

var _volumeUp2 = _interopRequireDefault(_volumeUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderStyle = {
  // The material-ui Slider has a 24px margin on top that we can't override,
  // but we can compensate for it here.
  // TODO Do this properly when/if material-ui gets a better styling solution.
  marginTop: -21,
  marginBottom: 3
};

var Volume = function (_React$Component) {
  (0, _inherits3.default)(Volume, _React$Component);

  function Volume() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Volume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleVolumeChange = function (e, volume) {
      _this.props.onVolumeChange(volume);
    }, _this.handleMuteClick = function () {
      if (_this.props.muted) {
        _this.props.onUnmute();
      } else {
        _this.props.onMute();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Volume.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.volume !== nextProps.volume || this.props.muted !== nextProps.muted;
  };

  Volume.prototype.render = function render() {
    var VolumeIcon = _volumeUp2.default;
    if (this.props.muted) {
      VolumeIcon = _volumeOff2.default;
    } else if (this.props.volume === 0) {
      VolumeIcon = _volumeMute2.default;
    } else if (this.props.volume < 50) {
      VolumeIcon = _volumeDown2.default;
    }
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('VolumeSlider', this.props.className)
    }, void 0, (0, _jsx3.default)(VolumeIcon, {
      color: '#fff',
      onClick: this.handleMuteClick
    }), (0, _jsx3.default)('div', {
      className: 'VolumeSlider-slider'
    }, void 0, (0, _jsx3.default)(_Slider2.default, {
      name: 'volume',
      min: 0,
      max: 100,
      defaultValue: this.props.volume,
      style: sliderStyle,
      onChange: this.handleVolumeChange
    })));
  };

  return Volume;
}(_react2.default.Component);

exports.default = Volume;

Volume.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  volume: _propTypes2.default.number,
  muted: _propTypes2.default.bool,

  onVolumeChange: _propTypes2.default.func,
  onMute: _propTypes2.default.func,
  onUnmute: _propTypes2.default.func
} : {};
//# sourceMappingURL=Volume.js.map
//# sourceMappingURL=Volume.js.map
