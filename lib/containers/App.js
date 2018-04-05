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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nest = require('recompose/nest');

var _nest2 = _interopRequireDefault(_nest);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _styles = require('material-ui/styles');

var _reactI18next = require('react-i18next');

var _reactBus = require('react-bus');

var _Responsive = require('../components/Responsive');

var _ClockProvider = require('../components/ClockProvider');

var _ClockProvider2 = _interopRequireDefault(_ClockProvider);

var _OverlayActionCreators = require('../actions/OverlayActionCreators');

var _settingSelectors = require('../selectors/settingSelectors');

var _serverSelectors = require('../selectors/serverSelectors');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _App3 = require('../mobile/components/App');

var _App4 = _interopRequireDefault(_App3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleProviders = (0, _nest2.default)(_reactBus.Provider, _ClockProvider2.default);

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  isConnected: _serverSelectors.isConnectedSelector,
  settings: _settingSelectors.settingsSelector,
  language: _settingSelectors.languageSelector,
  theme: _settingSelectors.themeSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    return props.uwave.getAboutPageComponent() !== null;
  }
});

var mapDispatchToProps = {
  onCloseOverlay: _OverlayActionCreators.closeAll
};

var enhance = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

var AppContainer = function (_React$Component) {
  (0, _inherits3.default)(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderApp = function () {
      return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(_Responsive.Mobile, {}, void 0, _react2.default.createElement(_App4.default, _this.props)), (0, _jsx3.default)(_Responsive.Desktop, {}, void 0, _react2.default.createElement(_App2.default, _this.props)));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AppContainer.prototype.getChildContext = function getChildContext() {
    return {
      mediaSources: this.props.mediaSources,
      uwave: this.props.uwave
    };
  };

  AppContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.locale.changeLanguage(nextProps.language);
    }
  };

  AppContainer.prototype.render = function render() {
    return (0, _jsx3.default)(_styles.MuiThemeProvider, {
      theme: this.props.theme
    }, void 0, (0, _jsx3.default)(_reactI18next.I18nextProvider, {
      i18n: this.props.locale
    }, void 0, (0, _jsx3.default)(SimpleProviders, {}, void 0, this.renderApp())));
  };

  return AppContainer;
}(_react2.default.Component);

AppContainer.childContextTypes = {
  mediaSources: _propTypes2.default.object,
  uwave: _propTypes2.default.object
};
AppContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  mediaSources: _propTypes2.default.object.isRequired,
  uwave: _propTypes2.default.object,
  language: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  locale: _propTypes2.default.object.isRequired
} : {};

exports.default = enhance(AppContainer);
//# sourceMappingURL=App.js.map
//# sourceMappingURL=App.js.map
