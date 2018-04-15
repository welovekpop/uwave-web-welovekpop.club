"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = _interopRequireDefault(require("../../../components/Overlay/Header"));

var _Content = _interopRequireDefault(require("../../../components/Overlay/Content"));

var _PlaylistPanel = _interopRequireDefault(require("./PlaylistPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistManager = function PlaylistManager(_ref) {
  var selectedPlaylist = _ref.selectedPlaylist,
      selectedItems = _ref.selectedItems,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx2.default)("div", {
    className: "PlaylistManager"
  }, void 0, (0, _jsx2.default)(_Header.default, {
    className: "PlaylistHeader",
    title: selectedPlaylist.name,
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx2.default)(_Content.default, {}, void 0, (0, _jsx2.default)(_PlaylistPanel.default, {
    items: selectedItems
  })));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedPlaylist: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired
  }).isRequired,
  selectedItems: _propTypes.default.array.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};
var _default = PlaylistManager; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
