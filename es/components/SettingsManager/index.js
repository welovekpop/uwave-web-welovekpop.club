import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import OverlayHeader from '../Overlay/Header';
import OverlayContent from '../Overlay/Content';
import SettingsPanel from './SettingsPanel';
var enhance = translate();

var SettingsManager =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SettingsManager, _React$Component);

  function SettingsManager() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleLogout = function () {
      _this.props.onCloseOverlay();

      _this.props.onLogout();
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = SettingsManager.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        className = _this$props.className,
        onCloseOverlay = _this$props.onCloseOverlay,
        props = _objectWithoutProperties(_this$props, ["t", "className", "onCloseOverlay"]);

    return _jsx("div", {
      className: cx('SettingsManager', className)
    }, void 0, _jsx(OverlayHeader, {
      title: t('settings.title'),
      onCloseOverlay: onCloseOverlay
    }), _jsx(OverlayContent, {
      className: "SettingsManager-body"
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
