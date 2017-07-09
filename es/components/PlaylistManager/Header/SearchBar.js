import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SourcePicker from './SourcePicker';

var enhance = translate();

var _ref = _jsx('div', {
  className: 'SearchBar-icon'
}, void 0, _jsx(SearchIcon, {
  color: '#fff'
}));

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { focused: false }, _this.handleFocus = function () {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SearchBar.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        source = _props.source,
        onSourceChange = _props.onSourceChange;
    var focused = this.state.focused;

    return _jsx('div', {
      className: cx('SearchBar', focused ? 'is-focused' : '', this.props.className)
    }, void 0, _ref, _jsx(SourcePicker, {
      className: 'SearchBar-source',
      selected: source,
      onChange: onSourceChange
    }), _jsx('div', {
      className: 'SearchBar-query'
    }, void 0, React.createElement('input', {
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
}(React.Component);

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  source: PropTypes.string,
  onSubmit: PropTypes.func,
  t: PropTypes.func.isRequired,
  onSourceChange: PropTypes.func
} : {};


export default enhance(SearchBar);
//# sourceMappingURL=SearchBar.js.map
