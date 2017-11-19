import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { createSelector } from 'reselect';

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
export var errorThemeSelector = createSelector(function (props) {
  return props.muiTheme;
}, function (muiTheme) {
  var notifyTheme = muiTheme.palette.notifications;
  return {
    muiTheme: _extends({}, muiTheme, {
      snackbar: _extends({}, muiTheme.snackbar, {
        textColor: notifyTheme.errorTextColor,
        backgroundColor: notifyTheme.errorBackgroundColor
      })
    })
  };
});

var enhance = muiThemeable();

var ErrorArea = function (_React$Component) {
  _inherits(ErrorArea, _React$Component);

  function ErrorArea() {
    var _temp, _this, _ret;

    _classCallCheck(this, ErrorArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  ErrorArea.prototype.getChildContext = function getChildContext() {
    return errorThemeSelector(this.props);
  };

  ErrorArea.prototype.render = function render() {
    var error = this.props.error;


    return _jsx('div', {
      className: 'ErrorArea'
    }, void 0, _jsx(Snackbar, {
      style: wrapperStyle,
      bodyStyle: snackbarStyle,
      open: !!error,
      message: error || '',
      onRequestClose: this.handleDismiss
    }));
  };

  return ErrorArea;
}(React.Component);

ErrorArea.childContextTypes = {
  muiTheme: PropTypes.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleDismiss = function () {
    var _props;

    (_props = _this2.props).onDismiss.apply(_props, arguments);
  };
};

ErrorArea.propTypes = process.env.NODE_ENV !== "production" ? {
  error: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  // Used in the theme selector above 👆
  // eslint-disable-next-line react/no-unused-prop-types
  muiTheme: PropTypes.object.isRequired
} : {};


export default enhance(ErrorArea);
//# sourceMappingURL=index.js.map
