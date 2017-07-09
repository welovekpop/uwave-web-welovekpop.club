import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import List from 'react-list';

import ImportPanelHeader from '../../components/PlaylistManager/Import/ImportPanelHeader';

import PlaylistRow from './PlaylistRow';

var ChannelPanel = function (_React$Component) {
  _inherits(ChannelPanel, _React$Component);

  function ChannelPanel() {
    var _temp, _this, _ret;

    _classCallCheck(this, ChannelPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderRow = function (index, key) {
      var playlist = _this.props.importablePlaylists[index];
      return _jsx(PlaylistRow, {
        className: index % 2 === 0 ? 'MediaListRow--alternate' : '',
        playlist: playlist,
        onImport: function onImport() {
          return _this.props.onImportPlaylist(playlist.sourceID, playlist.name);
        }
      }, key);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ChannelPanel.prototype.render = function render() {
    var _props = this.props,
        importingChannelTitle = _props.importingChannelTitle,
        importablePlaylists = _props.importablePlaylists,
        onClosePanel = _props.onClosePanel;


    return _jsx('div', {
      className: 'ImportPanel ChannelPanel'
    }, void 0, _jsx(ImportPanelHeader, {
      onClosePanel: onClosePanel
    }, void 0, importingChannelTitle + '\'s Playlists'), _jsx('div', {
      className: 'MediaList ImportPanel-body'
    }, void 0, _jsx(List, {
      type: 'uniform',
      length: importablePlaylists.length,
      itemRenderer: this.renderRow
    })));
  };

  return ChannelPanel;
}(React.Component);

export { ChannelPanel as default };
ChannelPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  importingChannelTitle: PropTypes.string.isRequired,
  importablePlaylists: PropTypes.arrayOf(PropTypes.object).isRequired,

  onImportPlaylist: PropTypes.func.isRequired,
  onClosePanel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=ChannelPanel.js.map
