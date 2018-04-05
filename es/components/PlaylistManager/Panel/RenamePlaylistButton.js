import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tooltip from 'material-ui/es/Tooltip';
import IconButton from 'material-ui/es/IconButton';
import EditIcon from 'material-ui-icons/ModeEdit';
import PromptDialog from '../../Dialogs/PromptDialog';

var enhance = translate();

var _ref = _jsx(EditIcon, {});

var _ref2 = _jsx(EditIcon, {
  nativeColor: '#777'
});

var RenamePlaylistButton = function (_React$Component) {
  _inherits(RenamePlaylistButton, _React$Component);

  function RenamePlaylistButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, RenamePlaylistButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      renaming: false
    }, _this.handleOpen = function () {
      _this.setState({ renaming: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      return _this.props.onRename(name).then(_this.closeDialog.bind(_this));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  RenamePlaylistButton.prototype.closeDialog = function closeDialog() {
    this.setState({ renaming: false });
  };

  RenamePlaylistButton.prototype.render = function render() {
    var t = this.props.t;

    return _jsx(React.Fragment, {}, void 0, _jsx(Tooltip, {
      title: t('playlists.rename'),
      placement: 'top'
    }, void 0, _jsx(IconButton, {
      className: 'PlaylistMeta-iconButton',
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
