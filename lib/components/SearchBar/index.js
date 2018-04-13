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

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "SearchBar-icon"
}, void 0, (0, _jsx2.default)(_Search.default, {}));

var SearchBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SearchBar, _React$Component);

  function SearchBar() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      focused: false
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleKeyDown = function (e) {
      var onSubmit = _this.props.onSubmit;

      if (e.key === 'Enter') {
        onSubmit(_this.input.value);
      }
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = SearchBar.prototype;

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        children = _props.children;
    var focused = this.state.focused;
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('SearchBar', focused ? 'is-focused' : '', this.props.className)
    }, void 0, _ref, children, (0, _jsx2.default)("div", {
      className: "SearchBar-query"
    }, void 0, _react.default.createElement("input", {
      ref: this.refInput,
      className: "SearchBar-input",
      type: "text",
      placeholder: focused ? '' : t('playlists.search.action'),
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyDown: this.handleKeyDown
    })));
  };

  return SearchBar;
}(_react.default.Component);

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  onSubmit: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SearchBar); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
