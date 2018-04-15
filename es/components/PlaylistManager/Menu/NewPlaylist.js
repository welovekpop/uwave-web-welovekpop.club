import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { MenuItem } from "material-ui/es/Menu";
import CreatePlaylistIcon from '@material-ui/icons/Add';
import PromptDialog from '../../Dialogs/PromptDialog';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, _jsx(CreatePlaylistIcon, {}));

var _ref2 =
/*#__PURE__*/
_jsx(CreatePlaylistIcon, {
  nativeColor: "#777"
});

var NewPlaylist =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NewPlaylist, _React$Component);

  function NewPlaylist() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      creating: false
    }, _this.handleOpen = function () {
      _this.setState({
        creating: true
      });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(_this.closeDialog.bind(_assertThisInitialized(_this)));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = NewPlaylist.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      creating: false
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className;
    return _jsx(React.Fragment, {}, void 0, _jsx(MenuItem, {
      className: cx('PlaylistMenuRow', 'PlaylistMenuRow--create', className),
      onClick: this.handleOpen
    }, void 0, _jsx("div", {
      className: "PlaylistMenuRow-title"
    }, void 0, _ref, t('playlists.new'))), this.state.creating && _jsx(PromptDialog, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref2,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return NewPlaylist;
}(React.Component);

NewPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  t: PropTypes.func.isRequired,
  onCreatePlaylist: PropTypes.func.isRequired
} : {};
export default enhance(NewPlaylist);
//# sourceMappingURL=NewPlaylist.js.map
