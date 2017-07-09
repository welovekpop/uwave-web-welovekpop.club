import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Popover from 'material-ui/Popover';
import ArrowIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import muiThemeable from 'material-ui/styles/muiThemeable';

import injectMediaSources from '../../../utils/injectMediaSources';
import SourcePickerElement from './SourcePickerElement';

var SourcePicker = function (_React$Component) {
  _inherits(SourcePicker, _React$Component);

  function SourcePicker() {
    var _temp, _this, _ret;

    _classCallCheck(this, SourcePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { open: false }, _this.handleOpen = function () {
      _this.setState({
        open: true,
        anchor: _this.container
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SourcePicker.prototype.createElement = function createElement(sourceName) {
    var _this2 = this;

    var _props = this.props,
        selected = _props.selected,
        getMediaSource = _props.getMediaSource;

    return _jsx('button', {
      className: 'SourcePicker-item',
      onClick: function onClick() {
        return _this2.handleChange(sourceName);
      }
    }, sourceName, _jsx(SourcePickerElement, {
      name: sourceName,
      source: getMediaSource(sourceName),
      active: selected === sourceName
    }));
  };

  SourcePicker.prototype.handleChange = function handleChange(sourceName) {
    this.handleClose();
    this.props.onChange(sourceName);
  };

  SourcePicker.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        className = _props2.className,
        selected = _props2.selected,
        muiTheme = _props2.muiTheme,
        getMediaSource = _props2.getMediaSource,
        getAllMediaSources = _props2.getAllMediaSources;


    var sourceNames = Object.keys(getAllMediaSources());
    var sources = sourceNames.filter(function (name) {
      return name !== selected;
    }).map(function (name) {
      return _this3.createElement(name);
    });

    return React.createElement(
      'div',
      {
        className: cx('SourcePicker', className),
        ref: this.refContainer
      },
      _jsx('button', {
        className: 'SourcePicker-active',
        onClick: this.handleOpen
      }, void 0, _jsx(SourcePickerElement, {
        name: selected,
        source: getMediaSource(selected),
        active: true
      }), _jsx(ArrowIcon, {
        color: muiTheme.palette.textColor,
        style: { height: '100%' }
      })),
      _jsx(Popover, {
        className: 'SourcePicker-list',
        open: this.state.open,
        anchorEl: this.state.anchor,
        onRequestClose: this.handleClose
      }, void 0, sources)
    );
  };

  return SourcePicker;
}(React.Component);

SourcePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,

  muiTheme: PropTypes.object.isRequired,
  getMediaSource: PropTypes.func.isRequired,
  getAllMediaSources: PropTypes.func.isRequired
} : {};


export default compose(injectMediaSources(), muiThemeable())(SourcePicker);
//# sourceMappingURL=SourcePicker.js.map
