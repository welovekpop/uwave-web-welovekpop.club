import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";

/* global bugsnag */
import React from 'react';
import PropTypes from 'prop-types';
import nest from 'recompose/nest';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MuiThemeProvider } from "@material-ui/core/es/styles";
import { I18nextProvider } from 'react-i18next';
import { Provider as BusProvider } from 'react-bus';
import { Mobile, Desktop } from '../components/Responsive';
import ClockProvider from '../components/ClockProvider';
import { closeAll } from '../actions/OverlayActionCreators';
import { settingsSelector, languageSelector, themeSelector } from '../selectors/settingSelectors';
import { isConnectedSelector } from '../selectors/serverSelectors';
import DesktopApp from '../components/App';
import MobileApp from '../mobile/components/App';
import FatalError from '../components/FatalError';
var SimpleProviders = nest(BusProvider, ClockProvider);
var mapStateToProps = createStructuredSelector({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  isConnected: isConnectedSelector,
  settings: settingsSelector,
  language: languageSelector,
  theme: themeSelector
});
var mapDispatchToProps = {
  onCloseOverlay: closeAll
};
var enhance = connect(mapStateToProps, mapDispatchToProps);

var AppContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      error: null
    }, _this.renderApp = function () {
      return _jsx(React.Fragment, {}, void 0, _jsx(Mobile, {}, void 0, React.createElement(MobileApp, _this.props)), _jsx(Desktop, {}, void 0, React.createElement(DesktopApp, _this.props)));
    }, _temp) || _assertThisInitialized(_this);
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
      return _jsx(MuiThemeProvider, {
        theme: this.props.theme
      }, void 0, _jsx(FatalError, {
        error: this.state.error
      }));
    }

    return _jsx(MuiThemeProvider, {
      theme: this.props.theme
    }, void 0, _jsx(I18nextProvider, {
      i18n: this.props.locale
    }, void 0, _jsx(SimpleProviders, {}, void 0, this.renderApp())));
  };

  return AppContainer;
}(React.Component);

AppContainer.childContextTypes = {
  mediaSources: PropTypes.object,
  uwave: PropTypes.object
};
AppContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  mediaSources: PropTypes.object.isRequired,
  uwave: PropTypes.object,
  language: PropTypes.string,
  theme: PropTypes.object,
  locale: PropTypes.object.isRequired
} : {};
export default enhance(AppContainer);
//# sourceMappingURL=App.js.map
