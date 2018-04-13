"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _reactI18next = require("react-i18next");

var _List = _interopRequireWildcard(require("../List"));

var _Header = _interopRequireDefault(require("../Overlay/Header"));

var _Content = _interopRequireDefault(require("../Overlay/Content"));

var _ServerList = _interopRequireDefault(require("../ServerList"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _withState.default)('active', 'setActive', function (_ref) {
  var hasAboutPage = _ref.hasAboutPage;
  return hasAboutPage ? 'about' : 'servers';
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ServerList.default, {});

var About = function About(_ref2) {
  var t = _ref2.t,
      onCloseOverlay = _ref2.onCloseOverlay,
      active = _ref2.active,
      setActive = _ref2.setActive,
      hasAboutPage = _ref2.hasAboutPage,
      AboutPanel = _ref2.render;
  return (0, _jsx2.default)("div", {
    className: "About"
  }, void 0, (0, _jsx2.default)(_Header.default, {
    title: t('about.about'),
    onCloseOverlay: onCloseOverlay,
    direction: "top"
  }), (0, _jsx2.default)(_Content.default, {
    className: "AboutPanel"
  }, void 0, (0, _jsx2.default)(_List.default, {
    className: "AboutPanel-menu"
  }, void 0, hasAboutPage && (0, _jsx2.default)(_List.ListItem, {
    className: "AboutPanel-menuItem",
    selected: active === 'about',
    onClick: function onClick() {
      return setActive('about');
    }
  }, void 0, (0, _jsx2.default)(_List.ListItemText, {
    primary: t('about.about')
  })), (0, _jsx2.default)(_List.ListItem, {
    className: "AboutPanel-menuItem",
    selected: active === 'servers',
    onClick: function onClick() {
      return setActive('servers');
    }
  }, void 0, (0, _jsx2.default)(_List.ListItemText, {
    primary: t('about.servers')
  }))), (0, _jsx2.default)("div", {
    className: "AboutPanel-content"
  }, void 0, active === 'about' && (0, _jsx2.default)(AboutPanel, {}), active === 'servers' && _ref3)));
};

About.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired,
  hasAboutPage: _propTypes.default.bool.isRequired,
  active: _propTypes.default.oneOf(['about', 'servers']).isRequired,
  setActive: _propTypes.default.func.isRequired,
  render: _propTypes.default.func.isRequired
} : {};

var _default = enhance(About); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
