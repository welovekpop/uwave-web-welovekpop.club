"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _searchSelectors = require("../selectors/searchSelectors");

var _SearchResults = _interopRequireDefault(require("../components/PlaylistManager/SearchResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  query: _searchSelectors.searchQuerySelector,
  results: _searchSelectors.searchResultsSelector,
  loadingState: _searchSelectors.searchLoadingStateSelector
});

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }

  return [media];
};

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return (0, _PlaylistActionCreators.addMediaMenu)(selectionOrOne(media, selection), position);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: _DialogActionCreators.openPreviewMediaDialog
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SearchResults.default);

exports.default = _default;
//# sourceMappingURL=SearchResultsPanel.js.map
