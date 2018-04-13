import _jsx from "@babel/runtime/helpers/jsx";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tooltip from "material-ui/es/Tooltip";
import IconButton from "material-ui/es/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmDialog from '../../Dialogs/ConfirmDialog';
import FormGroup from '../../Form/Group';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(DeleteIcon, {});

var DeletePlaylistButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DeletePlaylistButton, _React$Component);

  function DeletePlaylistButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      deleting: false
    }, _this.handleOpen = function () {
      if (_this.props.active) {
        _this.props.onNotDeletable();
      } else {
        _this.setState({
          deleting: true
        });
      }
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function (name) {
      return _this.props.onDelete(name).then(_this.closeDialog.bind(_assertThisInitialized(_this)));
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = DeletePlaylistButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      deleting: false
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        active = _props.active;
    return _jsx(React.Fragment, {}, void 0, _jsx(Tooltip, {
      title: active ? t('playlists.deleteActive') : t('playlists.delete'),
      placement: "top"
    }, void 0, _jsx(IconButton, {
      disabled: active,
      className: "PlaylistMeta-iconButton",
      onClick: this.handleOpen
    }, void 0, _ref)), this.state.deleting && _jsx(ConfirmDialog, {
      title: t('dialogs.deletePlaylist.title'),
      confirmLabel: t('dialogs.deletePlaylist.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, _jsx(FormGroup, {}, void 0, t('dialogs.deletePlaylist.confirm'))));
  };

  return DeletePlaylistButton;
}(React.Component);

DeletePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onNotDeletable: PropTypes.func.isRequired,
  active: PropTypes.bool
} : {};
export default enhance(DeletePlaylistButton);
//# sourceMappingURL=DeletePlaylistButton.js.map
