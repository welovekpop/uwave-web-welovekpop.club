import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ImportIcon from 'material-ui/svg-icons/av/playlist-add';
import MediaList from '../../components/MediaList';
import AddToPlaylistAction from '../../components/MediaList/Actions/AddToPlaylist';
import ImportPanelHeader from '../../components/PlaylistManager/Import/ImportPanelHeader';

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }
  return [media];
};

var _ref = _jsx(ImportIcon, {
  color: '#555',
  hoverColor: '#fff'
});

var YouTubeImportPlaylistPanel = function (_React$Component) {
  _inherits(YouTubeImportPlaylistPanel, _React$Component);

  function YouTubeImportPlaylistPanel() {
    var _temp, _this, _ret;

    _classCallCheck(this, YouTubeImportPlaylistPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportFull = function () {
      var _this$props = _this.props,
          importingPlaylist = _this$props.importingPlaylist,
          onImportPlaylist = _this$props.onImportPlaylist;

      onImportPlaylist(importingPlaylist.sourceID, importingPlaylist.name);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  YouTubeImportPlaylistPanel.prototype.render = function render() {
    var _props = this.props,
        importingPlaylist = _props.importingPlaylist,
        importingPlaylistItems = _props.importingPlaylistItems,
        onOpenAddMediaMenu = _props.onOpenAddMediaMenu,
        onClosePanel = _props.onClosePanel;


    return _jsx('div', {
      className: 'ImportPanel src-youtube-PlaylistPanel'
    }, void 0, _jsx(ImportPanelHeader, {
      onClosePanel: onClosePanel
    }, void 0, _jsx('div', {
      className: 'src-youtube-PlaylistPanel-header'
    }, void 0, _jsx('div', {
      className: 'src-youtube-PlaylistPanel-name'
    }, void 0, importingPlaylist.name), _jsx(IconButton, {
      onClick: this.handleImportFull,
      tooltip: 'Import All (' + importingPlaylistItems.length + ')',
      tooltipPosition: 'top-center'
    }, void 0, _ref))), _jsx(MediaList, {
      className: 'ImportPanel-body',
      media: importingPlaylistItems,
      makeActions: function makeActions(media, selection) {
        return [_jsx(AddToPlaylistAction, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(selectionOrOne(media, selection), position);
          }
        }, 'add')];
      }
    }));
  };

  return YouTubeImportPlaylistPanel;
}(React.Component);

export { YouTubeImportPlaylistPanel as default };
YouTubeImportPlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingPlaylist: PropTypes.shape({
    sourceID: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  importingPlaylistItems: PropTypes.arrayOf(PropTypes.object).isRequired,

  onImportPlaylist: PropTypes.func.isRequired,
  onOpenAddMediaMenu: PropTypes.func.isRequired,
  onClosePanel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=PlaylistPanel.js.map
