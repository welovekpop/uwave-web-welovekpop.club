import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tooltip from "material-ui/es/Tooltip";
import IconButton from "material-ui/es/IconButton";
import EditIcon from '@material-ui/icons/ModeEdit';
import PromptDialog from '../../Dialogs/PromptDialog';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(EditIcon, {});

var _ref2 =
/*#__PURE__*/
_jsx(EditIcon, {
  nativeColor: "#777"
});

var RenamePlaylistButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RenamePlaylistButton, _React$Component);

  function RenamePlaylistButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      renaming: false
    }, _this.handleOpen = function () {
      _this.setState({
        renaming: true
      });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      return _this.props.onRename(name).then(_this.closeDialog.bind(_assertThisInitialized(_this)));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = RenamePlaylistButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      renaming: false
    });
  };

  _proto.render = function render() {
    var t = this.props.t;
    return _jsx(React.Fragment, {}, void 0, _jsx(Tooltip, {
      title: t('playlists.rename'),
      placement: "top"
    }, void 0, _jsx(IconButton, {
      className: "PlaylistMeta-iconButton",
      onClick: this.handleOpen
    }, void 0, _ref)), this.state.renaming && _jsx(PromptDialog, {
      title: t('dialogs.renamePlaylist.nameInputTitle'),
      submitLabel: t('dialogs.renamePlaylist.action'),
      icon: _ref2,
      value: this.props.initialName,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return RenamePlaylistButton;
}(React.Component);

RenamePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
  initialName: PropTypes.string
} : {};
export default enhance(RenamePlaylistButton);
//# sourceMappingURL=RenamePlaylistButton.js.map
