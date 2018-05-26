"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nest = _interopRequireDefault(require("recompose/nest"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _styles = require("@material-ui/core/styles");

var _reactI18next = require("react-i18next");

var _reactBus = require("react-bus");

var _Responsive = require("../components/Responsive");

var _ClockProvider = _interopRequireDefault(require("../components/ClockProvider"));

var _OverlayActionCreators = require("../actions/OverlayActionCreators");

var _settingSelectors = require("../selectors/settingSelectors");

var _serverSelectors = require("../selectors/serverSelectors");

var _App = _interopRequireDefault(require("../components/App"));

var _App2 = _interopRequireDefault(require("../mobile/components/App"));

var _FatalError = _interopRequireDefault(require("../components/FatalError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global bugsnag */
var SimpleProviders = (0, _nest.default)(_reactBus.Provider, _ClockProvider.default);
var mapStateToProps = (0, _reselect.createStructuredSelector)({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  isConnected: _serverSelectors.isConnectedSelector,
  settings: _settingSelectors.settingsSelector,
  language: _settingSelectors.languageSelector,
  theme: _settingSelectors.themeSelector
});
var mapDispatchToProps = {
  onCloseOverlay: _OverlayActionCreators.closeAll
};
var enhance = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);

var AppContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      error: null
    }, _this.renderApp = function () {
      return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Responsive.Mobile, {}, void 0, _react.default.createElement(_App2.default, _this.props)), (0, _jsx2.default)(_Responsive.Desktop, {}, void 0, _react.default.createElement(_App.default, _this.props)));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = AppContainer.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      mediaSources: this.props.mediaSources,
      uwave: this.props.uwave
    };
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.locale.changeLanguage(nextProps.language);
    }
  };

  _proto.componentDidCatch = function componentDidCatch(error, info) {
    this.setState({
      error: error
    });
    bugsnag.notify(error, {
      metaData: {
        componentStack: info.componentStack
      }
    });
  };

  _proto.render = function render() {
    if (this.state.error) {
      // Let's hope the ThemeProvider works at least...
      return (0, _jsx2.default)(_styles.MuiThemeProvider, {
        theme: this.props.theme
      }, void 0, (0, _jsx2.default)(_FatalError.default, {
        error: this.state.error
      }));
    }

    return (0, _jsx2.default)(_styles.MuiThemeProvider, {
      theme: this.props.theme
    }, void 0, (0, _jsx2.default)(_reactI18next.I18nextProvider, {
      i18n: this.props.locale
    }, void 0, (0, _jsx2.default)(SimpleProviders, {}, void 0, this.renderApp())));
  };

  return AppContainer;
}(_react.default.Component);

AppContainer.childContextTypes = {
  mediaSources: _propTypes.default.object,
  uwave: _propTypes.default.object
};
AppContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  mediaSources: _propTypes.default.object.isRequired,
  uwave: _propTypes.default.object,
  language: _propTypes.default.string,
  theme: _propTypes.default.object,
  locale: _propTypes.default.object.isRequired
} : {};

var _default = enhance(AppContainer);

exports.default = _default;
//# sourceMappingURL=App.js.map
