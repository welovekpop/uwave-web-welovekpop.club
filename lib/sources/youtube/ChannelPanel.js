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

var _reactList = _interopRequireDefault(require("react-list"));

var _ImportPanelHeader = _interopRequireDefault(require("../../components/PlaylistManager/Import/ImportPanelHeader"));

var _PlaylistRow = _interopRequireDefault(require("./PlaylistRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChannelPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ChannelPanel, _React$Component);

  function ChannelPanel() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.renderRow = function (index, key) {
      var playlist = _this.props.importablePlaylists[index];
      return (0, _jsx2.default)(_PlaylistRow.default, {
        className: index % 2 === 0 ? 'MediaListRow--alternate' : '',
        playlist: playlist,
        onImport: function onImport() {
          return _this.props.onImportPlaylist(playlist.sourceID, playlist.name);
        }
      }, key);
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ChannelPanel.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        importingChannelTitle = _this$props.importingChannelTitle,
        importablePlaylists = _this$props.importablePlaylists,
        onClosePanel = _this$props.onClosePanel;
    return (0, _jsx2.default)("div", {
      className: "ImportPanel ChannelPanel"
    }, void 0, (0, _jsx2.default)(_ImportPanelHeader.default, {
      onClosePanel: onClosePanel
    }, void 0, importingChannelTitle + "'s Playlists"), (0, _jsx2.default)("div", {
      className: "MediaList ImportPanel-body"
    }, void 0, (0, _jsx2.default)(_reactList.default, {
      type: "uniform",
      length: importablePlaylists.length,
      itemRenderer: this.renderRow
    })));
  };

  return ChannelPanel;
}(_react.default.Component);

exports.default = ChannelPanel;
ChannelPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingChannelTitle: _propTypes.default.string.isRequired,
  importablePlaylists: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  onImportPlaylist: _propTypes.default.func.isRequired,
  onClosePanel: _propTypes.default.func.isRequired
} : {};
//# sourceMappingURL=ChannelPanel.js.map
