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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Copyright = require('material-ui-icons/Copyright');

var _Copyright2 = _interopRequireDefault(_Copyright);

var _GithubIcon = require('./GithubIcon');

var _GithubIcon2 = _interopRequireDefault(_GithubIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var Link = (0, _withProps2.default)({
  className: 'SettingsPanel-link',
  target: '_blank'
})(_Button2.default);

var _ref2 = (0, _jsx3.default)(_GithubIcon2.default, {
  className: 'SettingsPanel-linkIcon'
});

var _ref3 = (0, _jsx3.default)(_GithubIcon2.default, {
  className: 'SettingsPanel-linkIcon'
});

var _ref4 = (0, _jsx3.default)(_Copyright2.default, {
  className: 'SettingsPanel-linkIcon'
});

var Links = function Links(_ref) {
  var t = _ref.t;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('h2', {
    className: 'SettingsPanel-header'
  }, void 0, t('settings.links.title')), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave'
  }, void 0, _ref2, t('settings.links.website')), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave/web'
  }, void 0, _ref3, t('settings.links.source')), (0, _jsx3.default)(Link, {
    href: 'https://github.com/u-wave/web/tree/master/LICENSE'
  }, void 0, _ref4, t('settings.links.license')));
};

Links.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(Links);
//# sourceMappingURL=Links.js.map
//# sourceMappingURL=Links.js.map
