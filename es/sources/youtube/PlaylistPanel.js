import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from "@material-ui/core/es/Tooltip";
import IconButton from "@material-ui/core/es/IconButton";
import ImportIcon from "@material-ui/icons/es/PlaylistAdd";
import MediaList from '../../components/MediaList';
import AddToPlaylistAction from '../../components/MediaList/Actions/AddToPlaylist';
import ImportPanelHeader from '../../components/PlaylistManager/Import/ImportPanelHeader';

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }

  return [media];
};

var _ref =
/*#__PURE__*/
_jsx(ImportIcon, {
  className: "src-youtube-PlaylistPanel-importIcon"
});

var YouTubeImportPlaylistPanel =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(YouTubeImportPlaylistPanel, _React$Component);

  function YouTubeImportPlaylistPanel() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleImportFull = function () {
      var _this$props = _this.props,
          importingPlaylist = _this$props.importingPlaylist,
          onImportPlaylist = _this$props.onImportPlaylist;
      onImportPlaylist(importingPlaylist.sourceID, importingPlaylist.name);
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = YouTubeImportPlaylistPanel.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        importingPlaylist = _this$props2.importingPlaylist,
        importingPlaylistItems = _this$props2.importingPlaylistItems,
        onOpenAddMediaMenu = _this$props2.onOpenAddMediaMenu,
        onClosePanel = _this$props2.onClosePanel;
    return _jsx("div", {
      className: "ImportPanel src-youtube-PlaylistPanel"
    }, void 0, _jsx(ImportPanelHeader, {
      onClosePanel: onClosePanel
    }, void 0, _jsx("div", {
      className: "src-youtube-PlaylistPanel-header"
    }, void 0, _jsx("div", {
      className: "src-youtube-PlaylistPanel-name"
    }, void 0, importingPlaylist.name), _jsx(Tooltip, {
      title: "Import All (" + importingPlaylistItems.length + ")",
      placement: "top"
    }, void 0, _jsx(IconButton, {
      onClick: this.handleImportFull
    }, void 0, _ref)))), _jsx(MediaList, {
      className: "ImportPanel-body",
      media: importingPlaylistItems,
      makeActions: function makeActions(media, selection) {
        return _jsx(React.Fragment, {}, void 0, _jsx(AddToPlaylistAction, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(selectionOrOne(media, selection), position);
          }
        }, "add"));
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
