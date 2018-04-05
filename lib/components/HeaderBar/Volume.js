'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _VolumeDown = require('material-ui-icons/VolumeDown');

var _VolumeDown2 = _interopRequireDefault(_VolumeDown);

var _VolumeMute = require('material-ui-icons/VolumeMute');

var _VolumeMute2 = _interopRequireDefault(_VolumeMute);

var _VolumeOff = require('material-ui-icons/VolumeOff');

var _VolumeOff2 = _interopRequireDefault(_VolumeOff);

var _VolumeUp = require('material-ui-icons/VolumeUp');

var _VolumeUp2 = _interopRequireDefault(_VolumeUp);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    var VolumeIcon = _VolumeUp2.default;
    if (this.props.muted) {
      VolumeIcon = _VolumeOff2.default;
    } else if (this.props.volume === 0) {
      VolumeIcon = _VolumeMute2.default;
    } else if (this.props.volume < 50) {
      VolumeIcon = _VolumeDown2.default;
    }
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('VolumeSlider', this.props.className)
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      onClick: this.handleMuteClick
    }, void 0, (0, _jsx3.default)(VolumeIcon, {})), (0, _jsx3.default)('div', {
      className: 'VolumeSlider-slider'
    }, void 0, (0, _jsx3.default)(_Slider2.default, {
      min: 0,
      max: 100,
      step: 5,
      value: this.props.volume,
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
