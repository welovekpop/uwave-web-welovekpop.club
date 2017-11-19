import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { I18nextProvider } from 'react-i18next';
import { closeAll } from '../actions/OverlayActionCreators';
import { createTimer, stopTimer } from '../actions/TickerActionCreators';

import { settingsSelector, languageSelector, muiThemeSelector } from '../selectors/settingSelectors';
import { isConnectedSelector } from '../selectors/serverSelectors';
import App from '../components/App';

var mapStateToProps = createStructuredSelector({
  activeOverlay: function activeOverlay(state) {
    return state.activeOverlay;
  },
  isConnected: isConnectedSelector,
  settings: settingsSelector,
  language: languageSelector,
  muiTheme: muiThemeSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    return props.uwave.getAboutPageComponent() !== null;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createTimer: createTimer,
    stopTimer: stopTimer,
    onCloseOverlay: closeAll
  }, dispatch);
};

var enhance = connect(mapStateToProps, mapDispatchToProps);

var AppContainer = function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
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
  };

  AppContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      this.props.locale.changeLanguage(nextProps.language);
    }
  };

  AppContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.timerCallbacks = [];
    this.props.stopTimer();
  };

  AppContainer.prototype.render = function render() {
    return _jsx(MuiThemeProvider, {
      muiTheme: this.props.muiTheme
    }, void 0, _jsx(I18nextProvider, {
      i18n: this.props.locale
    }, void 0, React.createElement(App, this.props)));
  };

  return AppContainer;
}(React.Component);

AppContainer.childContextTypes = {
  timerCallbacks: PropTypes.arrayOf(PropTypes.func),
  mediaSources: PropTypes.object,
  uwave: PropTypes.object
};
AppContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  mediaSources: PropTypes.object.isRequired,
  uwave: PropTypes.object,
  language: PropTypes.string,
  locale: PropTypes.object.isRequired,
  muiTheme: PropTypes.object,
  createTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
} : {};


export default enhance(AppContainer);
//# sourceMappingURL=App.js.map
