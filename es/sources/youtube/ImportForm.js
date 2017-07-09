import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp2;

import React from 'react';
import PropTypes from 'prop-types';
import PlaylistIcon from 'material-ui/svg-icons/av/playlist-play';

import ImportSourceBlock from '../../components/PlaylistManager/Import/ImportSourceBlock';
import Form from '../../components/Form';
import FormGroup from '../../components/Form/Group';
import TextField from '../../components/Form/TextField';
import Button from '../../components/Form/Button';

import { getChannelPlaylists, getImportablePlaylist } from './actions';

var _ref = _jsx(PlaylistIcon, {
  color: '#9f9d9e'
});

var _ref2 = _jsx(FormGroup, {}, void 0, _jsx(Button, {}, void 0, 'Import From Channel'));

var _ref3 = _jsx(PlaylistIcon, {
  color: '#9f9d9e'
});

var _ref4 = _jsx(FormGroup, {}, void 0, _jsx(Button, {}, void 0, 'Import Playlist'));

var YoutubeImportForm = (_temp2 = _class = function (_React$Component) {
  _inherits(YoutubeImportForm, _React$Component);

  function YoutubeImportForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, YoutubeImportForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleImportChannel = function (e) {
      e.preventDefault();
      var url = _this.channel.value;
      _this.dispatch(getChannelPlaylists(url)).catch(function () {
        _this.props.onHideImportPanel();
      });
      _this.props.onShowImportPanel();
    }, _this.handleImportPlaylist = function (e) {
      e.preventDefault();
      var url = _this.playlist.value;

      _this.dispatch(getImportablePlaylist(url)).catch(function () {
        _this.props.onHideImportPanel();
      });
      _this.props.onShowImportPanel();
    }, _this.refChannel = function (channel) {
      _this.channel = channel;
    }, _this.refPlaylist = function (playlist) {
      _this.playlist = playlist;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  YoutubeImportForm.prototype.dispatch = function dispatch(action) {
    return this.context.store.dispatch(action);
  };

  YoutubeImportForm.prototype.render = function render() {
    return _jsx(ImportSourceBlock, {
      title: 'YouTube',
      sourceType: 'youtube'
    }, void 0, _jsx(Form, {
      onSubmit: this.handleImportChannel
    }, void 0, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refChannel,
      placeholder: 'Channel URL',
      icon: _ref
    })), _ref2), _jsx(Form, {
      onSubmit: this.handleImportPlaylist
    }, void 0, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPlaylist,
      placeholder: 'Playlist URL',
      icon: _ref3
    })), _ref4));
  };

  return YoutubeImportForm;
}(React.Component), _class.contextTypes = {
  store: PropTypes.object
}, _temp2);
export { YoutubeImportForm as default };
YoutubeImportForm.propTypes = process.env.NODE_ENV !== "production" ? {
  onShowImportPanel: PropTypes.func.isRequired,
  onHideImportPanel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=ImportForm.js.map
