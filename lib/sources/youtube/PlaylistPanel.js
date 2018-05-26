"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _MediaList = _interopRequireDefault(require("../../components/MediaList"));

var _AddToPlaylist = _interopRequireDefault(require("../../components/MediaList/Actions/AddToPlaylist"));

var _ImportPanelHeader = _interopRequireDefault(require("../../components/PlaylistManager/Import/ImportPanelHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }

  return [media];
};

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistAdd.default, {
  className: "src-youtube-PlaylistPanel-importIcon"
});

var YouTubeImportPlaylistPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(YouTubeImportPlaylistPanel, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = YouTubeImportPlaylistPanel.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        importingPlaylist = _this$props2.importingPlaylist,
        importingPlaylistItems = _this$props2.importingPlaylistItems,
        onOpenAddMediaMenu = _this$props2.onOpenAddMediaMenu,
        onClosePanel = _this$props2.onClosePanel;
    return (0, _jsx2.default)("div", {
      className: "ImportPanel src-youtube-PlaylistPanel"
    }, void 0, (0, _jsx2.default)(_ImportPanelHeader.default, {
      onClosePanel: onClosePanel
    }, void 0, (0, _jsx2.default)("div", {
      className: "src-youtube-PlaylistPanel-header"
    }, void 0, (0, _jsx2.default)("div", {
      className: "src-youtube-PlaylistPanel-name"
    }, void 0, importingPlaylist.name), (0, _jsx2.default)(_Tooltip.default, {
      title: "Import All (" + importingPlaylistItems.length + ")",
      placement: "top"
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      onClick: this.handleImportFull
    }, void 0, _ref)))), (0, _jsx2.default)(_MediaList.default, {
      className: "ImportPanel-body",
      media: importingPlaylistItems,
      makeActions: function makeActions(media, selection) {
        return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_AddToPlaylist.default, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(selectionOrOne(media, selection), position);
          }
        }, "add"));
      }
    }));
  };

  return YouTubeImportPlaylistPanel;
}(_react.default.Component);

exports.default = YouTubeImportPlaylistPanel;
YouTubeImportPlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingPlaylist: _propTypes.default.shape({
    sourceID: _propTypes.default.string,
    name: _propTypes.default.string
  }).isRequired,
  importingPlaylistItems: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  onImportPlaylist: _propTypes.default.func.isRequired,
  onOpenAddMediaMenu: _propTypes.default.func.isRequired,
  onClosePanel: _propTypes.default.func.isRequired
} : {};
//# sourceMappingURL=PlaylistPanel.js.map
