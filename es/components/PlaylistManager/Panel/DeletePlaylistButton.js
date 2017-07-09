import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import ConfirmDialog from '../../Dialogs/ConfirmDialog';
import FormGroup from '../../Form/Group';

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

    var hoverColor = active ? '#555' : '#fff';
    return _jsx(IconButton, {
      onClick: this.handleOpen,
      tooltip: t('playlists.delete'),
      tooltipPosition: 'top-center'
    }, void 0, _jsx(DeleteIcon, {
      color: '#555',
      hoverColor: hoverColor
    }), this.state.deleting && _jsx(ConfirmDialog, {
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


export default translate()(DeletePlaylistButton);
//# sourceMappingURL=DeletePlaylistButton.js.map
