import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Popover from "material-ui/es/Popover";
import ArrowIcon from '@material-ui/icons/ArrowDropDown';
import injectMediaSources from '../../../utils/injectMediaSources';
import SourcePickerElement from './SourcePickerElement';
var enhance = injectMediaSources();
var popoverPosition = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};

var _ref =
/*#__PURE__*/
_jsx(ArrowIcon, {
  className: "SourcePicker-arrow"
});

var SourcePicker =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SourcePicker, _React$Component);

  function SourcePicker() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      open: false
    }, _this.handleOpen = function () {
      _this.setState({
        open: true,
        anchor: _this.container
      });
    }, _this.handleClose = function () {
      _this.setState({
        open: false
      });
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = SourcePicker.prototype;

  _proto.createElement = function createElement(sourceName) {
    var _this2 = this;

    var _props = this.props,
        selected = _props.selected,
        getMediaSource = _props.getMediaSource;
    return _jsx("button", {
      className: "SourcePicker-item",
      onClick: function onClick() {
        return _this2.handleChange(sourceName);
      }
    }, sourceName, _jsx(SourcePickerElement, {
      name: sourceName,
      source: getMediaSource(sourceName),
      active: selected === sourceName
    }));
  };

  _proto.handleChange = function handleChange(sourceName) {
    this.handleClose();
    this.props.onChange(sourceName);
  };

  _proto.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        className = _props2.className,
        selected = _props2.selected,
        getMediaSource = _props2.getMediaSource,
        getAllMediaSources = _props2.getAllMediaSources;
    var sourceNames = Object.keys(getAllMediaSources());
    var sources = sourceNames.filter(function (name) {
      return name !== selected;
    }).map(function (name) {
      return _this3.createElement(name);
    });
    return React.createElement("div", {
      className: cx('SourcePicker', className),
      ref: this.refContainer
    }, _jsx("button", {
      className: "SourcePicker-active",
      onClick: this.handleOpen
    }, void 0, _jsx(SourcePickerElement, {
      name: selected,
      source: getMediaSource(selected),
      active: true
    }), _ref), React.createElement(Popover, _extends({
      classes: {
        paper: 'SourcePicker-list'
      },
      open: this.state.open,
      anchorEl: this.state.anchor,
      onClose: this.handleClose
    }, popoverPosition), sources));
  };

  return SourcePicker;
}(React.Component);

SourcePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,
  getMediaSource: PropTypes.func.isRequired,
  getAllMediaSources: PropTypes.func.isRequired
} : {};
export default enhance(SourcePicker);
//# sourceMappingURL=SourcePicker.js.map
