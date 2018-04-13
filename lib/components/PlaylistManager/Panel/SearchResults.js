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

var _Progress = require("material-ui/Progress");

var _LoadingStates = require("../../../constants/LoadingStates");

var _MediaList = _interopRequireDefault(require("../../MediaList"));

var _AddToPlaylist = _interopRequireDefault(require("../../MediaList/Actions/AddToPlaylist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistPanel-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
}));

var SearchResults = function SearchResults(_ref) {
  var t = _ref.t,
      className = _ref.className,
      query = _ref.query,
      results = _ref.results,
      loadingState = _ref.loadingState,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;
  var list;

  if (loadingState === _LoadingStates.LOADED) {
    list = (0, _jsx2.default)(_MediaList.default, {
      className: "PlaylistPanel-media",
      media: results,
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: function makeActions(media, selection) {
        return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_AddToPlaylist.default, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(position, media, selection);
          }
        }));
      }
    });
  } else {
    list = _ref2;
  }

  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistPanel', 'SearchResults', className)
  }, void 0, (0, _jsx2.default)("div", {
    className: "SearchResults-query"
  }, void 0, t('playlists.search.results', {
    query: query
  })), list);
};

SearchResults.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  query: _propTypes.default.string.isRequired,
  results: _propTypes.default.arrayOf(_propTypes.default.object),
  loadingState: _propTypes.default.oneOf([_LoadingStates.IDLE, _LoadingStates.LOADING, _LoadingStates.LOADED]).isRequired,
  onOpenAddMediaMenu: _propTypes.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes.default.func.isRequired
} : {};

var _default = (0, _reactI18next.translate)()(SearchResults); //# sourceMappingURL=SearchResults.js.map


exports.default = _default;
//# sourceMappingURL=SearchResults.js.map
