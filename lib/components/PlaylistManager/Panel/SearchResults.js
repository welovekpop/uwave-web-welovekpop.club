'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _LoadingStates = require('../../../constants/LoadingStates');

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _MediaList = require('../../MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

var _AddToPlaylist = require('../../MediaList/Actions/AddToPlaylist');

var _AddToPlaylist2 = _interopRequireDefault(_AddToPlaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistPanel-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'large'
}));

var SearchResults = function SearchResults(_ref) {
  var t = _ref.t,
      className = _ref.className,
      query = _ref.query,
      results = _ref.results,
      loadingState = _ref.loadingState,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;

  var list = void 0;
  if (loadingState === _LoadingStates.LOADED) {
    list = (0, _jsx3.default)(_MediaList2.default, {
      className: 'PlaylistPanel-media',
      media: results,
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: function makeActions(media, selection) {
        return [(0, _jsx3.default)(_AddToPlaylist2.default, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(position, media, selection);
          }
        }, 'add')];
      }
    });
  } else {
    list = _ref2;
  }

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('PlaylistPanel', 'SearchResults', className)
  }, void 0, (0, _jsx3.default)('div', {
    className: 'SearchResults-query'
  }, void 0, t('playlists.search.results', { query: query })), list);
};

SearchResults.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  query: _propTypes2.default.string.isRequired,
  results: _propTypes2.default.arrayOf(_propTypes2.default.object),
  loadingState: _propTypes2.default.oneOf([_LoadingStates.IDLE, _LoadingStates.LOADING, _LoadingStates.LOADED]).isRequired,
  onOpenAddMediaMenu: _propTypes2.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _reactI18next.translate)()(SearchResults);
//# sourceMappingURL=SearchResults.js.map
//# sourceMappingURL=SearchResults.js.map
