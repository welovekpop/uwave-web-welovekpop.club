"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLazyOverlay;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _nest = _interopRequireDefault(require("recompose/nest"));

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _Progress = require("material-ui/Progress");

var _Overlay = _interopRequireDefault(require("../Overlay"));

var _Content = _interopRequireDefault(require("../Overlay/Content"));

var _Header = _interopRequireDefault(require("../Overlay/Header"));

var _OverlayActionCreators = require("../../actions/OverlayActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  className: "LoadingOverlay-spinner",
  thickness: 1.6
});

function createLazyOverlay(_ref) {
  var loader = _ref.loader,
      title = _ref.title,
      _ref$OverlayComponent = _ref.OverlayComponent,
      OverlayComponent = _ref$OverlayComponent === void 0 ? _Overlay.default : _ref$OverlayComponent;
  if (typeof loader !== 'function') throw new TypeError('loader must be a function');
  var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _reactRedux.connect)(null, {
    onCloseOverlay: _OverlayActionCreators.closeAll
  }));

  var LoadingOverlay = function LoadingOverlay(_ref2) {
    var t = _ref2.t,
        pastDelay = _ref2.pastDelay,
        onCloseOverlay = _ref2.onCloseOverlay;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Header.default, {
      title: title ? title(t) : '...',
      onCloseOverlay: onCloseOverlay
    }), (0, _jsx2.default)(_Content.default, {
      className: "LoadingOverlay-body"
    }, void 0, pastDelay && _ref3));
  };

  LoadingOverlay.propTypes = process.env.NODE_ENV !== "production" ? {
    t: _propTypes.default.func.isRequired,
    pastDelay: _propTypes.default.bool.isRequired,
    onCloseOverlay: _propTypes.default.func.isRequired
  } : {};
  var LazyOverlay = (0, _reactLoadable.default)({
    loader: loader,
    loading: enhance(LoadingOverlay)
  });
  return (0, _hoistNonReactStatics.default)((0, _nest.default)(OverlayComponent, LazyOverlay), LazyOverlay);
} //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
