import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/es/IconButton';
import VolumeDownIcon from 'material-ui-icons/VolumeDown';
import VolumeMuteIcon from 'material-ui-icons/VolumeMute';
import VolumeOffIcon from 'material-ui-icons/VolumeOff';
import VolumeUpIcon from 'material-ui-icons/VolumeUp';
import Slider from './Slider';

var Volume = function (_React$Component) {
  _inherits(Volume, _React$Component);

  function Volume() {
    var _temp, _this, _ret;

    _classCallCheck(this, Volume);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleVolumeChange = function (e, volume) {
      _this.props.onVolumeChange(volume);
    }, _this.handleMuteClick = function () {
      if (_this.props.muted) {
        _this.props.onUnmute();
      } else {
        _this.props.onMute();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Volume.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.volume !== nextProps.volume || this.props.muted !== nextProps.muted;
  };

  Volume.prototype.render = function render() {
    var VolumeIcon = VolumeUpIcon;
    if (this.props.muted) {
      VolumeIcon = VolumeOffIcon;
    } else if (this.props.volume === 0) {
      VolumeIcon = VolumeMuteIcon;
    } else if (this.props.volume < 50) {
      VolumeIcon = VolumeDownIcon;
    }
    return _jsx('div', {
      className: cx('VolumeSlider', this.props.className)
    }, void 0, _jsx(IconButton, {
      onClick: this.handleMuteClick
    }, void 0, _jsx(VolumeIcon, {})), _jsx('div', {
      className: 'VolumeSlider-slider'
    }, void 0, _jsx(Slider, {
      min: 0,
      max: 100,
      step: 1,
      value: this.props.volume,
      onChange: this.handleVolumeChange
    })));
  };

  return Volume;
}(React.Component);

export default Volume;
Volume.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  volume: PropTypes.number,
  muted: PropTypes.bool,

  onVolumeChange: PropTypes.func,
  onMute: PropTypes.func,
  onUnmute: PropTypes.func
} : {};
//# sourceMappingURL=Volume.js.map
