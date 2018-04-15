import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "material-ui/es/IconButton";
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from './Slider';

var Volume =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Volume, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Volume.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.volume !== nextProps.volume || this.props.muted !== nextProps.muted;
  };

  _proto.render = function render() {
    var VolumeIcon = VolumeUpIcon;

    if (this.props.muted) {
      VolumeIcon = VolumeOffIcon;
    } else if (this.props.volume === 0) {
      VolumeIcon = VolumeMuteIcon;
    } else if (this.props.volume < 50) {
      VolumeIcon = VolumeDownIcon;
    }

    return _jsx("div", {
      className: cx('VolumeSlider', this.props.className)
    }, void 0, _jsx(IconButton, {
      onClick: this.handleMuteClick
    }, void 0, _jsx(VolumeIcon, {})), _jsx("div", {
      className: "VolumeSlider-slider"
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

export { Volume as default };
Volume.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  onVolumeChange: PropTypes.func,
  onMute: PropTypes.func,
  onUnmute: PropTypes.func
} : {};
//# sourceMappingURL=Volume.js.map
