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

var _reactI18next = require('react-i18next');

var _Search = require('material-ui-icons/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)('div', {
  className: 'SearchBar-icon'
}, void 0, (0, _jsx3.default)(_Search2.default, {}));

var SearchBar = function (_React$Component) {
  (0, _inherits3.default)(SearchBar, _React$Component);

  function SearchBar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { focused: false }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _this.handleBlur = function () {
      _this.setState({ focused: false });
    }, _this.handleKeyDown = function (e) {
      var onSubmit = _this.props.onSubmit;

      if (e.key === 'Enter') {
        onSubmit(_this.input.value);
      }
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SearchBar.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        children = _props.children;
    var focused = this.state.focused;

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('SearchBar', focused ? 'is-focused' : '', this.props.className)
    }, void 0, _ref, children, (0, _jsx3.default)('div', {
      className: 'SearchBar-query'
    }, void 0, _react2.default.createElement('input', {
      ref: this.refInput,
      className: 'SearchBar-input',
      type: 'text',
      placeholder: focused ? '' : t('playlists.search.action'),
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyDown: this.handleKeyDown
    })));
  };

  return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onSubmit: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SearchBar);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
