'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactList = require('react-list');

var _reactList2 = _interopRequireDefault(_reactList);

var _ImportPanelHeader = require('../../components/PlaylistManager/Import/ImportPanelHeader');

var _ImportPanelHeader2 = _interopRequireDefault(_ImportPanelHeader);

var _PlaylistRow = require('./PlaylistRow');

var _PlaylistRow2 = _interopRequireDefault(_PlaylistRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChannelPanel = function (_React$Component) {
  (0, _inherits3.default)(ChannelPanel, _React$Component);

  function ChannelPanel() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChannelPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderRow = function (index, key) {
      var playlist = _this.props.importablePlaylists[index];
      return (0, _jsx3.default)(_PlaylistRow2.default, {
        className: index % 2 === 0 ? 'MediaListRow--alternate' : '',
        playlist: playlist,
        onImport: function onImport() {
          return _this.props.onImportPlaylist(playlist.sourceID, playlist.name);
        }
      }, key);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ChannelPanel.prototype.render = function render() {
    var _props = this.props,
        importingChannelTitle = _props.importingChannelTitle,
        importablePlaylists = _props.importablePlaylists,
        onClosePanel = _props.onClosePanel;

    return (0, _jsx3.default)('div', {
      className: 'ImportPanel ChannelPanel'
    }, void 0, (0, _jsx3.default)(_ImportPanelHeader2.default, {
      onClosePanel: onClosePanel
    }, void 0, importingChannelTitle + '\'s Playlists'), (0, _jsx3.default)('div', {
      className: 'MediaList ImportPanel-body'
    }, void 0, (0, _jsx3.default)(_reactList2.default, {
      type: 'uniform',
      length: importablePlaylists.length,
      itemRenderer: this.renderRow
    })));
  };

  return ChannelPanel;
}(_react2.default.Component);

exports.default = ChannelPanel;

ChannelPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingChannelTitle: _propTypes2.default.string.isRequired,
  importablePlaylists: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,

  onImportPlaylist: _propTypes2.default.func.isRequired,
  onClosePanel: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=ChannelPanel.js.map
//# sourceMappingURL=ChannelPanel.js.map
