'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _ArrowDropDown = require('material-ui-icons/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _injectMediaSources = require('../../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

var _SourcePickerElement = require('./SourcePickerElement');

var _SourcePickerElement2 = _interopRequireDefault(_SourcePickerElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _injectMediaSources2.default)();

var popoverPosition = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'left' }
};

var _ref = (0, _jsx3.default)(_ArrowDropDown2.default, {
  className: 'SourcePicker-arrow'
});

var SourcePicker = function (_React$Component) {
  (0, _inherits3.default)(SourcePicker, _React$Component);

  function SourcePicker() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SourcePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { open: false }, _this.handleOpen = function () {
      _this.setState({
        open: true,
        anchor: _this.container
      });
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SourcePicker.prototype.createElement = function createElement(sourceName) {
    var _this2 = this;

    var _props = this.props,
        selected = _props.selected,
        getMediaSource = _props.getMediaSource;

    return (0, _jsx3.default)('button', {
      className: 'SourcePicker-item',
      onClick: function onClick() {
        return _this2.handleChange(sourceName);
      }
    }, sourceName, (0, _jsx3.default)(_SourcePickerElement2.default, {
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
        getMediaSource = _props2.getMediaSource,
        getAllMediaSources = _props2.getAllMediaSources;

    var sourceNames = Object.keys(getAllMediaSources());
    var sources = sourceNames.filter(function (name) {
      return name !== selected;
    }).map(function (name) {
      return _this3.createElement(name);
    });

    return _react2.default.createElement('div', {
      className: (0, _classnames2.default)('SourcePicker', className),
      ref: this.refContainer
    }, (0, _jsx3.default)('button', {
      className: 'SourcePicker-active',
      onClick: this.handleOpen
    }, void 0, (0, _jsx3.default)(_SourcePickerElement2.default, {
      name: selected,
      source: getMediaSource(selected),
      active: true
    }), _ref), _react2.default.createElement(_Popover2.default, (0, _extends3.default)({
      classes: { paper: 'SourcePicker-list' },
      open: this.state.open,
      anchorEl: this.state.anchor,
      onClose: this.handleClose
    }, popoverPosition), sources));
  };

  return SourcePicker;
}(_react2.default.Component);

SourcePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  selected: _propTypes2.default.string,
  onChange: _propTypes2.default.func,

  getMediaSource: _propTypes2.default.func.isRequired,
  getAllMediaSources: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SourcePicker);
//# sourceMappingURL=SourcePicker.js.map
//# sourceMappingURL=SourcePicker.js.map
