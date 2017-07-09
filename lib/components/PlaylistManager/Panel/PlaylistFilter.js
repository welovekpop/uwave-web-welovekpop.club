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

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistFilter = function (_React$Component) {
  (0, _inherits3.default)(PlaylistFilter, _React$Component);

  function PlaylistFilter() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PlaylistFilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false,
      value: ''
    }, _this.onFilter = (0, _debounce2.default)(function (value) {
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
      _this.setState({ value: event.target.value });
      _this.onFilter(event.target.value);
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PlaylistFilter.prototype.clearFilter = function clearFilter() {
    if (this.state.value !== '') {
      this.props.onFilter('');
    }
  };

  PlaylistFilter.prototype.render = function render() {
    var t = this.props.t;

    var isOpen = this.state.open;
    return (0, _jsx3.default)('div', {
      className: 'PlaylistMediaFilter'
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      onClick: this.handleClick,
      tooltip: t('playlists.filter'),
      tooltipPosition: 'top-center'
    }, void 0, (0, _jsx3.default)(_search2.default, {
      color: isOpen ? '#fff' : '#555',
      hoverColor: '#fff'
    })), _react2.default.createElement('input', {
      type: 'text',
      ref: this.refInput,
      className: (0, _classnames2.default)('PlaylistMediaFilter-input', isOpen && 'is-open'),
      value: this.state.value,
      onChange: this.handleChange
    }));
  };

  return PlaylistFilter;
}(_react2.default.Component);

PlaylistFilter.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onFilter: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _reactI18next.translate)()(PlaylistFilter);
//# sourceMappingURL=PlaylistFilter.js.map
//# sourceMappingURL=PlaylistFilter.js.map
