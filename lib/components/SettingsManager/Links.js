'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactI18next = require('react-i18next');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _copyright = require('material-ui/svg-icons/action/copyright');

var _copyright2 = _interopRequireDefault(_copyright);

var _GithubIcon = require('./GithubIcon');

var _GithubIcon2 = _interopRequireDefault(_GithubIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var linkStyle = {
  display: 'block',
  height: 24,
  lineHeight: '24px',
  marginBottom: 20,
  textAlign: 'left',
  WebkitAppearance: 'initial'
};
var iconStyle = { verticalAlign: 'top' };

var Link = (0, _withProps2.default)({
  style: linkStyle,
  target: '_blank',
  labelPosition: 'after',
  backgroundColor: 'transparent',
  hoverColor: 'transparent'
})(_FlatButton2.default);

var _ref2 = (0, _jsx3.default)(_GithubIcon2.default, {
  style: iconStyle
});

var _ref3 = (0, _jsx3.default)(_GithubIcon2.default, {
  style: iconStyle
});

var _ref4 = (0, _jsx3.default)(_copyright2.default, {
  style: iconStyle
});

var Links = function Links(_ref) {
  var t = _ref.t;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h2', {
    className: 'SettingsPanel-header'
  }, void 0, t('settings.links.title')), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave',
    label: t('settings.links.website')
  }, void 0, _ref2), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave/web',
    label: t('settings.links.source')
  }, void 0, _ref3), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave/web/tree/master/LICENSE',
    label: t('settings.links.license')
  }, void 0, _ref4));
};

Links.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(Links);
//# sourceMappingURL=Links.js.map
//# sourceMappingURL=Links.js.map
