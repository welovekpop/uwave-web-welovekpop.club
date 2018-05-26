"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MediaList = _interopRequireDefault(require("../../MediaList"));

var _AddToPlaylist = _interopRequireDefault(require("../../MediaList/Actions/AddToPlaylist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeActions = function makeActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_AddToPlaylist.default, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }));
  };
};

var SearchResultsList = function SearchResultsList(_ref) {
  var results = _ref.results,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;
  return (0, _jsx2.default)(_MediaList.default, {
    className: "PlaylistPanel-media",
    media: results,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
    makeActions: makeActions(onOpenAddMediaMenu)
  });
};

SearchResultsList.propTypes = process.env.NODE_ENV !== "production" ? {
  results: _propTypes.default.array.isRequired,
  onOpenAddMediaMenu: _propTypes.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes.default.func.isRequired
} : {};
var _default = SearchResultsList;
exports.default = _default;
//# sourceMappingURL=SearchResultsList.js.map
