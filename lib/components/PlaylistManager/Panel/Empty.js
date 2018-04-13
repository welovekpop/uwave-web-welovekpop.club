"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyPanel = function EmptyPanel(_ref) {
  var t = _ref.t,
      className = _ref.className;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistPanel', 'PlaylistPanel--empty', className)
  }, void 0, t('playlists.noPlaylists'));
};

EmptyPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string
} : {};

var _default = (0, _reactI18next.translate)()(EmptyPanel); //# sourceMappingURL=Empty.js.map


exports.default = _default;
//# sourceMappingURL=Empty.js.map
