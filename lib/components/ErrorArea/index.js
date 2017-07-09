'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.errorThemeSelector = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class, _class2, _temp2, _initialiseProps;

var wrapperStyle = {
  // Prevent clicks from hitting the overlay. Ensures the chat input can be
  // focused even if a snackbar is open.
  pointerEvents: 'none'
};
var snackbarStyle = {
  // Allow multiline snackbars.
  height: 'auto',
  lineHeight: '24px',
  padding: '12px 24px',
  // Allow clicks on snackbars themselves.
  pointerEvents: 'initial'
};

// Create a material-ui theme with the error notification theme applied.
// Using a selector for memoization.
var errorThemeSelector = exports.errorThemeSelector = (0, _reselect.createSelector)(function (props) {
  return props.muiTheme;
}, function (muiTheme) {
  var notifyTheme = muiTheme.palette.notifications;
  return {
    muiTheme: (0, _extends3.default)({}, muiTheme, {
      snackbar: (0, _extends3.default)({}, muiTheme.snackbar, {
        textColor: notifyTheme.errorTextColor,
        backgroundColor: notifyTheme.errorBackgroundColor
      })
    })
  };
});

var ErrorArea = (_dec = (0, _muiThemeable2.default)(), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(ErrorArea, _React$Component);

  function ErrorArea() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ErrorArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ErrorArea.prototype.getChildContext = function getChildContext() {
    return errorThemeSelector(this.props);
  };

  ErrorArea.prototype.render = function render() {
    var error = this.props.error;

    return (0, _jsx3.default)('div', {
      className: 'ErrorArea'
    }, void 0, (0, _jsx3.default)(_Snackbar2.default, {
      style: wrapperStyle,
      bodyStyle: snackbarStyle,
      open: !!error,
      message: error || '',
      onRequestClose: this.handleDismiss
    }));
  };

  return ErrorArea;
}(_react2.default.Component), _class2.childContextTypes = {
  muiTheme: _propTypes2.default.object
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleDismiss = function () {
    var _props;

    (_props = _this2.props).onDismiss.apply(_props, arguments);
  };
}, _temp2)) || _class);
exports.default = ErrorArea;

ErrorArea.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func.isRequired,
  // Used in the theme selector above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  muiTheme: _propTypes2.default.object.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
