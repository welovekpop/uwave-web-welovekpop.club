import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import nest from 'recompose/nest';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MuiThemeProvider } from 'material-ui/es/styles';
import { I18nextProvider } from 'react-i18next';
import { Provider as BusProvider } from 'react-bus';
import { Mobile, Desktop } from '../components/Responsive';
import ClockProvider from '../components/ClockProvider';
import { closeAll } from '../actions/OverlayActionCreators';
import { settingsSelector, languageSelector, themeSelector } from '../selectors/settingSelectors';
import { isConnectedSelector } from '../selectors/serverSelectors';
import DesktopApp from '../components/App';
import MobileApp from '../mobile/components/App';

var SimpleProviders = nest(BusProvider, ClockProvider);

var mapStateToProps = createStructuredSelector({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  isConnected: isConnectedSelector,
  settings: settingsSelector,
  language: languageSelector,
  theme: themeSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    return props.uwave.getAboutPageComponent() !== null;
  }
});

var mapDispatchToProps = {
  onCloseOverlay: closeAll
};

var enhance = connect(mapStateToProps, mapDispatchToProps);

var AppContainer = function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderApp = function () {
      return _jsx(React.Fragment, {}, void 0, _jsx(Mobile, {}, void 0, React.createElement(MobileApp, _this.props)), _jsx(Desktop, {}, void 0, React.createElement(DesktopApp, _this.props)));
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
