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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _Select = require('material-ui/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Menu = require('material-ui/Menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResourceName = function getResourceName(i18n, language) {
  return i18n.t('locales.' + language);
};

var enhance = (0, _getContext2.default)({
  i18n: _propTypes2.default.object
});

var LanguagePicker = function LanguagePicker(_ref) {
  var i18n = _ref.i18n,
      props = (0, _objectWithoutProperties3.default)(_ref, ['i18n']);

  return _react2.default.createElement(_Select2.default, (0, _extends3.default)({ className: 'LanguagePicker' }, props), i18n.availableLanguages.map(function (lang) {
    return (0, _jsx3.default)(_Menu.MenuItem, {
      value: lang
    }, lang, getResourceName(i18n, lang));
  }));
};

LanguagePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  i18n: _propTypes2.default.object.isRequired
} : {};

exports.default = enhance(LanguagePicker);
//# sourceMappingURL=LanguagePicker.js.map
//# sourceMappingURL=LanguagePicker.js.map
