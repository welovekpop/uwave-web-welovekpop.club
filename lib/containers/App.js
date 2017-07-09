'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactI18next = require('react-i18next');

var _locale = require('../locale');

var _locale2 = _interopRequireDefault(_locale);

var _OverlayActionCreators = require('../actions/OverlayActionCreators');

var _TickerActionCreators = require('../actions/TickerActionCreators');

var _settingSelectors = require('../selectors/settingSelectors');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class, _class2, _temp;

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  settings: _settingSelectors.settingsSelector,
  language: _settingSelectors.languageSelector,
  muiTheme: _settingSelectors.muiThemeSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    return props.uwave.getAboutPageComponent() !== null;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    createTimer: _TickerActionCreators.createTimer,
    stopTimer: _TickerActionCreators.stopTimer,
    onCloseOverlay: _OverlayActionCreators.closeAll
  }, dispatch);
};

var AppContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(AppContainer, _React$Component);

  function AppContainer() {
    (0, _classCallCheck3.default)(this, AppContainer);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  AppContainer.prototype.getChildContext = function getChildContext() {
    return {
      timerCallbacks: this.timerCallbacks,
      mediaSources: this.props.mediaSources,
      uwave: this.props.uwave
    };
  };

  // TODO move this to constructor?


  AppContainer.prototype.componentWillMount = function componentWillMount() {
    // Start the clock! üWave stores the current time in the application state
    // primarily to make sure that different timers in the UI update simultaneously.
    this.timerCallbacks = this.props.createTimer();
    this.locale = (0, _locale2.default)(this.props.language);
  };

  AppContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.locale.changeLanguage(nextProps.language);
    }
  };

  AppContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.timerCallbacks = [];
    this.props.stopTimer();
  };

  AppContainer.prototype.render = function render() {
    return (0, _jsx3.default)(_MuiThemeProvider2.default, {
      muiTheme: this.props.muiTheme
    }, void 0, (0, _jsx3.default)(_reactI18next.I18nextProvider, {
      i18n: this.locale
    }, void 0, _react2.default.createElement(_App2.default, this.props)));
  };

  return AppContainer;
}(_react2.default.Component), _class2.childContextTypes = {
  timerCallbacks: _propTypes2.default.arrayOf(_propTypes2.default.func),
  mediaSources: _propTypes2.default.object,
  uwave: _propTypes2.default.object
}, _temp)) || _class);
exports.default = AppContainer;

AppContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  mediaSources: _propTypes2.default.object.isRequired,
  uwave: _propTypes2.default.object,
  language: _propTypes2.default.string,
  muiTheme: _propTypes2.default.object,
  createTimer: _propTypes2.default.func.isRequired,
  stopTimer: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=App.js.map
//# sourceMappingURL=App.js.map
