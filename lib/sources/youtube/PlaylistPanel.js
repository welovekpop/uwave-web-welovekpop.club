'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _playlistAdd = require('material-ui/svg-icons/av/playlist-add');

var _playlistAdd2 = _interopRequireDefault(_playlistAdd);

var _MediaList = require('../../components/MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

var _AddToPlaylist = require('../../components/MediaList/Actions/AddToPlaylist');

var _AddToPlaylist2 = _interopRequireDefault(_AddToPlaylist);

var _ImportPanelHeader = require('../../components/PlaylistManager/Import/ImportPanelHeader');

var _ImportPanelHeader2 = _interopRequireDefault(_ImportPanelHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }
  return [media];
};

var _ref = (0, _jsx3.default)(_playlistAdd2.default, {
  color: '#555',
  hoverColor: '#fff'
});

var YouTubeImportPlaylistPanel = function (_React$Component) {
  (0, _inherits3.default)(YouTubeImportPlaylistPanel, _React$Component);

  function YouTubeImportPlaylistPanel() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YouTubeImportPlaylistPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportFull = function () {
      var _this$props = _this.props,
          importingPlaylist = _this$props.importingPlaylist,
          onImportPlaylist = _this$props.onImportPlaylist;

      onImportPlaylist(importingPlaylist.sourceID, importingPlaylist.name);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  YouTubeImportPlaylistPanel.prototype.render = function render() {
    var _props = this.props,
        importingPlaylist = _props.importingPlaylist,
        importingPlaylistItems = _props.importingPlaylistItems,
        onOpenAddMediaMenu = _props.onOpenAddMediaMenu,
        onClosePanel = _props.onClosePanel;

    return (0, _jsx3.default)('div', {
      className: 'ImportPanel src-youtube-PlaylistPanel'
    }, void 0, (0, _jsx3.default)(_ImportPanelHeader2.default, {
      onClosePanel: onClosePanel
    }, void 0, (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistPanel-header'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'src-youtube-PlaylistPanel-name'
    }, void 0, importingPlaylist.name), (0, _jsx3.default)(_IconButton2.default, {
      onClick: this.handleImportFull,
      tooltip: 'Import All (' + importingPlaylistItems.length + ')',
      tooltipPosition: 'top-center'
    }, void 0, _ref))), (0, _jsx3.default)(_MediaList2.default, {
      className: 'ImportPanel-body',
      media: importingPlaylistItems,
      makeActions: function makeActions(media, selection) {
        return [(0, _jsx3.default)(_AddToPlaylist2.default, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(selectionOrOne(media, selection), position);
          }
        }, 'add')];
      }
    }));
  };

  return YouTubeImportPlaylistPanel;
}(_react2.default.Component);

exports.default = YouTubeImportPlaylistPanel;

YouTubeImportPlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingPlaylist: _propTypes2.default.shape({
    sourceID: _propTypes2.default.string,
    name: _propTypes2.default.string
  }).isRequired,
  importingPlaylistItems: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,

  onImportPlaylist: _propTypes2.default.func.isRequired,
  onOpenAddMediaMenu: _propTypes2.default.func.isRequired,
  onClosePanel: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=PlaylistPanel.js.map
//# sourceMappingURL=PlaylistPanel.js.map
