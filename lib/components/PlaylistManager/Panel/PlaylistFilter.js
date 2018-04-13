"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var PlaylistFilter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PlaylistFilter, _React$Component);

  function PlaylistFilter() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      open: false,
      value: ''
    }, _this.onFilter = (0, _debounce.default)(function (value) {
      _this.props.onFilter(value);
    }, 200), _this.handleClick = function () {
      var isOpen = !_this.state.open;

      if (!isOpen) {
        _this.clearFilter();
      }

      _this.setState({
        open: isOpen,
        value: ''
      }, function () {
        if (isOpen) {
          _this.input.focus();
        }
      });
    }, _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });

      _this.onFilter(event.target.value);
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = PlaylistFilter.prototype;

  _proto.clearFilter = function clearFilter() {
    if (this.state.value !== '') {
      this.props.onFilter('');
    }
  };

  _proto.render = function render() {
    var t = this.props.t;
    var isOpen = this.state.open;
    return (0, _jsx2.default)("div", {
      className: "PlaylistMediaFilter"
    }, void 0, (0, _jsx2.default)(_Tooltip.default, {
      title: t('playlists.filter'),
      placement: "top"
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      className: "PlaylistMeta-iconButton",
      onClick: this.handleClick
    }, void 0, (0, _jsx2.default)(_Search.default, {
      nativeColor: isOpen ? '#fff' : null
    }))), _react.default.createElement("input", {
      type: "text",
      ref: this.refInput,
      className: (0, _classnames.default)('PlaylistMediaFilter-input', isOpen && 'is-open'),
      value: this.state.value,
      onChange: this.handleChange
    }));
  };

  return PlaylistFilter;
}(_react.default.Component);

PlaylistFilter.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onFilter: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PlaylistFilter); //# sourceMappingURL=PlaylistFilter.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistFilter.js.map
