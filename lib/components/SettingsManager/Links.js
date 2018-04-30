"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactI18next = require("react-i18next");

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _Copyright = _interopRequireDefault(require("@material-ui/icons/Copyright"));

var _GithubIcon = _interopRequireDefault(require("./GithubIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();
var Link = (0, _withProps.default)({
  className: 'SettingsPanel-link',
  target: '_blank'
})(_Button.default);

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_GithubIcon.default, {
  className: "SettingsPanel-linkIcon"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_GithubIcon.default, {
  className: "SettingsPanel-linkIcon"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_Copyright.default, {
  className: "SettingsPanel-linkIcon"
});

var Links = function Links(_ref) {
  var t = _ref.t;
  return (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)("h2", {
    className: "SettingsPanel-header"
  }, void 0, t('settings.links.title')), (0, _jsx2.default)(Link, {
    href: "http://u-wave.net"
  }, void 0, _ref2, t('settings.links.website')), (0, _jsx2.default)(Link, {
    href: "https://github.com/u-wave/web"
  }, void 0, _ref3, t('settings.links.source')), (0, _jsx2.default)(Link, {
    href: "https://github.com/u-wave/web/tree/master/LICENSE"
  }, void 0, _ref4, t('settings.links.license')));
};

Links.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired
} : {};

var _default = enhance(Links); //# sourceMappingURL=Links.js.map


exports.default = _default;
//# sourceMappingURL=Links.js.map
