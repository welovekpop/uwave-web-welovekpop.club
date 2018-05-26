"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _LoadingStates = require("../../../constants/LoadingStates");

var _NoSearchResults = _interopRequireDefault(require("./NoSearchResults"));

var _LoadingSearchResults = _interopRequireDefault(require("./LoadingSearchResults"));

var _SearchResultsList = _interopRequireDefault(require("./SearchResultsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_NoSearchResults.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_LoadingSearchResults.default, {});

var SearchResultsPanel = function SearchResultsPanel(_ref) {
  var t = _ref.t,
      className = _ref.className,
      query = _ref.query,
      loadingState = _ref.loadingState,
      results = _ref.results,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;
  var list;

  if (loadingState === _LoadingStates.LOADED) {
    list = results.length > 0 ? (0, _jsx2.default)(_SearchResultsList.default, {
      results: results,
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      onOpenAddMediaMenu: onOpenAddMediaMenu
    }) : _ref2;
  } else {
    list = _ref3;
  }

  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistPanel', 'SearchResults', className)
  }, void 0, (0, _jsx2.default)("div", {
    className: "SearchResults-query"
  }, void 0, t('playlists.search.results', {
    query: query
  })), list);
};

SearchResultsPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  query: _propTypes.default.string.isRequired,
  loadingState: _propTypes.default.oneOf([_LoadingStates.IDLE, _LoadingStates.LOADING, _LoadingStates.LOADED]).isRequired,
  results: _propTypes.default.arrayOf(_propTypes.default.object),
  onOpenAddMediaMenu: _propTypes.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SearchResultsPanel);

exports.default = _default;
//# sourceMappingURL=index.js.map
