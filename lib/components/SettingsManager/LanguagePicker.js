'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResourceName = function getResourceName(i18n, language) {
  return i18n.t('locales.' + language);
};

var menuStyle = {
  float: 'right',
  margin: -18
};
var itemStyle = {
  WebkitAppearance: 'initial'
};

var LanguagePicker = function LanguagePicker(props, _ref) {
  var i18n = _ref.i18n;
  return _react2.default.createElement(_DropDownMenu2.default, (0, _extends3.default)({
    style: menuStyle
  }, props), i18n.availableLanguages.map(function (lang) {
    return (0, _jsx3.default)(_MenuItem2.default, {
      style: itemStyle,
      value: lang,
      primaryText: getResourceName(i18n, lang)
    }, lang);
  }));
};

LanguagePicker.contextTypes = {
  i18n: _propTypes2.default.object.isRequired
};

exports.default = LanguagePicker;
//# sourceMappingURL=LanguagePicker.js.map
//# sourceMappingURL=LanguagePicker.js.map
