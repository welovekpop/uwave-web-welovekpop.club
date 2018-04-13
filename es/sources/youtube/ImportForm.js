import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import PlaylistIcon from '@material-ui/icons/PlaylistPlay';
import ImportSourceBlock from '../../components/PlaylistManager/Import/ImportSourceBlock';
import Form from '../../components/Form';
import FormGroup from '../../components/Form/Group';
import TextField from '../../components/Form/TextField';
import Button from '../../components/Form/Button';
import { getChannelPlaylists, getImportablePlaylist } from './actions';

var _ref =
/*#__PURE__*/
_jsx(PlaylistIcon, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
_jsx(FormGroup, {}, void 0, _jsx(Button, {}, void 0, "Import From Channel"));

var _ref3 =
/*#__PURE__*/
_jsx(PlaylistIcon, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
_jsx(FormGroup, {}, void 0, _jsx(Button, {}, void 0, "Import Playlist"));

var YoutubeImportForm =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(YoutubeImportForm, _React$Component);

  function YoutubeImportForm() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleImportChannel = function (e) {
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = YoutubeImportForm.prototype;

  _proto.dispatch = function dispatch(action) {
    return this.context.store.dispatch(action);
  };

  _proto.render = function render() {
    return _jsx(ImportSourceBlock, {
      title: "YouTube",
      sourceType: "youtube"
    }, void 0, _jsx(Form, {
      onSubmit: this.handleImportChannel
    }, void 0, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refChannel,
      placeholder: "Channel URL",
      icon: _ref
    })), _ref2), _jsx(Form, {
      onSubmit: this.handleImportPlaylist
    }, void 0, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPlaylist,
      placeholder: "Playlist URL",
      icon: _ref3
    })), _ref4));
  };

  return YoutubeImportForm;
}(React.Component);

YoutubeImportForm.contextTypes = {
  store: PropTypes.object
};
export { YoutubeImportForm as default };
YoutubeImportForm.propTypes = process.env.NODE_ENV !== "production" ? {
  onShowImportPanel: PropTypes.func.isRequired,
  onHideImportPanel: PropTypes.func.isRequired
} : {};
//# sourceMappingURL=ImportForm.js.map
