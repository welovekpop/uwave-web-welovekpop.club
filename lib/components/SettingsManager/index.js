'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Header = require('../Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

var _SettingsPanel = require('./SettingsPanel');

var _SettingsPanel2 = _interopRequireDefault(_SettingsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var SettingsManager = function (_React$Component) {
  (0, _inherits3.default)(SettingsManager, _React$Component);

  function SettingsManager() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SettingsManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleLogout = function () {
      _this.props.onCloseOverlay();
      _this.props.onLogout();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SettingsManager.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className,
        onCloseOverlay = _props.onCloseOverlay,
        props = (0, _objectWithoutProperties3.default)(_props, ['t', 'className', 'onCloseOverlay']);

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('SettingsManager', className)
    }, void 0, (0, _jsx3.default)(_Header2.default, {
      title: t('settings.title'),
      onCloseOverlay: onCloseOverlay
    }), (0, _jsx3.default)('div', {
      className: 'SettingsManager-body AppRow AppRow--middle'
    }, void 0, _react2.default.createElement(_SettingsPanel2.default, (0, _extends3.default)({}, props, {
      onLogout: this.handleLogout
    }))));
  };

  return SettingsManager;
}(_react2.default.Component);

SettingsManager.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  onCloseOverlay: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SettingsManager);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
