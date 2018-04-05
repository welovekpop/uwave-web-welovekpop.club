import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tooltip from 'material-ui/es/Tooltip';
import IconButton from 'material-ui/es/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

import ConfirmDialog from '../../Dialogs/ConfirmDialog';
import FormGroup from '../../Form/Group';

var enhance = translate();

var _ref = _jsx(DeleteIcon, {});

var DeletePlaylistButton = function (_React$Component) {
  _inherits(DeletePlaylistButton, _React$Component);

  function DeletePlaylistButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, DeletePlaylistButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      deleting: false
    }, _this.handleOpen = function () {
      if (_this.props.active) {
        _this.props.onNotDeletable();
      } else {
        _this.setState({ deleting: true });
      }
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function (name) {
      return _this.props.onDelete(name).then(_this.closeDialog.bind(_this));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DeletePlaylistButton.prototype.closeDialog = function closeDialog() {
    this.setState({ deleting: false });
  };

  DeletePlaylistButton.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        active = _props.active;

    return _jsx(React.Fragment, {}, void 0, _jsx(Tooltip, {
      title: active ? t('playlists.deleteActive') : t('playlists.delete'),
      placement: 'top'
    }, void 0, _jsx(IconButton, {
      disabled: active,
      className: 'PlaylistMeta-iconButton',
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
