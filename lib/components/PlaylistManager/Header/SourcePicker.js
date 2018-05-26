"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _injectMediaSources = _interopRequireDefault(require("../../../utils/injectMediaSources"));

var _SourcePickerElement = _interopRequireDefault(require("./SourcePickerElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _injectMediaSources.default)();
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
(0, _jsx2.default)(_ArrowDropDown.default, {
  className: "SourcePicker-arrow"
});

var SourcePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SourcePicker, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = SourcePicker.prototype;

  _proto.createElement = function createElement(sourceName) {
    var _this2 = this;

    var _this$props = this.props,
        selected = _this$props.selected,
        getMediaSource = _this$props.getMediaSource;
    return (0, _jsx2.default)("button", {
      className: "SourcePicker-item",
      onClick: function onClick() {
        return _this2.handleChange(sourceName);
      }
    }, sourceName, (0, _jsx2.default)(_SourcePickerElement.default, {
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

    var _this$props2 = this.props,
        className = _this$props2.className,
        selected = _this$props2.selected,
        getMediaSource = _this$props2.getMediaSource,
        getAllMediaSources = _this$props2.getAllMediaSources;
    var sourceNames = Object.keys(getAllMediaSources());
    var sources = sourceNames.filter(function (name) {
      return name !== selected;
    }).map(function (name) {
      return _this3.createElement(name);
    });
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('SourcePicker', className),
      ref: this.refContainer
    }, (0, _jsx2.default)("button", {
      className: "SourcePicker-active",
      onClick: this.handleOpen
    }, void 0, (0, _jsx2.default)(_SourcePickerElement.default, {
      name: selected,
      source: getMediaSource(selected),
      active: true
    }), _ref), _react.default.createElement(_Popover.default, (0, _extends2.default)({
      classes: {
        paper: 'SourcePicker-list'
      },
      open: this.state.open,
      anchorEl: this.state.anchor,
      onClose: this.handleClose
    }, popoverPosition), sources));
  };

  return SourcePicker;
}(_react.default.Component);

SourcePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  selected: _propTypes.default.string,
  onChange: _propTypes.default.func,
  getMediaSource: _propTypes.default.func.isRequired,
  getAllMediaSources: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SourcePicker);

exports.default = _default;
//# sourceMappingURL=SourcePicker.js.map
