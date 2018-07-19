"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistAdd.default, {
  className: "PlaylistPanel-emptyIcon"
});

var PlaylistFilterEmpty = function PlaylistFilterEmpty(_ref) {
  var t = _ref.t;
  return (0, _jsx2.default)("div", {
    className: "PlaylistPanel-empty"
  }, void 0, _ref2, (0, _jsx2.default)(_Typography.default, {
    className: "PlaylistPanel-emptyHeader"
  }, void 0, t('playlists.playlist.filterEmpty')), (0, _jsx2.default)(_Typography.default, {}, void 0, t('playlists.playlist.filterEmptySub')));
};

PlaylistFilterEmpty.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PlaylistFilterEmpty);

exports.default = _default;
//# sourceMappingURL=PlaylistFilterEmpty.js.map
