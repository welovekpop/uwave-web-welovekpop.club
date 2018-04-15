import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "SearchBar-icon"
}, void 0, _jsx(SearchIcon, {}));

var SearchBar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SearchBar, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = SearchBar.prototype;

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        children = _props.children;
    var focused = this.state.focused;
    return _jsx("div", {
      className: cx('SearchBar', focused ? 'is-focused' : '', this.props.className)
    }, void 0, _ref, children, _jsx("div", {
      className: "SearchBar-query"
    }, void 0, React.createElement("input", {
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
}(React.Component);

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired
} : {};
export default enhance(SearchBar);
//# sourceMappingURL=index.js.map
