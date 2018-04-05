import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import OverlayHeader from '../Overlay/Header';
import OverlayContent from '../Overlay/Content';
import SettingsPanel from './SettingsPanel';

var enhance = translate();

var SettingsManager = function (_React$Component) {
  _inherits(SettingsManager, _React$Component);

  function SettingsManager() {
    var _temp, _this, _ret;

    _classCallCheck(this, SettingsManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleLogout = function () {
      _this.props.onCloseOverlay();
      _this.props.onLogout();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SettingsManager.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className,
        onCloseOverlay = _props.onCloseOverlay,
        props = _objectWithoutProperties(_props, ['t', 'className', 'onCloseOverlay']);

    return _jsx('div', {
      className: cx('SettingsManager', className)
    }, void 0, _jsx(OverlayHeader, {
      title: t('settings.title'),
      onCloseOverlay: onCloseOverlay
    }), _jsx(OverlayContent, {
      className: 'SettingsManager-body'
    }, void 0, React.createElement(SettingsPanel, _extends({}, props, {
      onLogout: this.handleLogout
    }))));
  };

  return SettingsManager;
}(React.Component);

SettingsManager.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  onCloseOverlay: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
} : {};


export default enhance(SettingsManager);
//# sourceMappingURL=index.js.map
