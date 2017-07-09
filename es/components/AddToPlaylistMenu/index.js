import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import CreatePlaylistIcon from 'material-ui/svg-icons/content/add';
import PromptDialog from '../Dialogs/PromptDialog';
import PlaylistsMenu from './PlaylistsMenu';

var enhance = translate();

var _ref = _jsx(CreatePlaylistIcon, {
  color: '#777'
});

var AddToPlaylistMenu = function (_React$Component) {
  _inherits(AddToPlaylistMenu, _React$Component);

  function AddToPlaylistMenu() {
    var _temp, _this, _ret;

    _classCallCheck(this, AddToPlaylistMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      creating: false
    }, _this.handleOpen = function () {
      _this.setState({ creating: true });
    }, _this.handleClose = function () {
      _this.setState({ creating: false });
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(function (playlist) {
        return _this.props.onSelect(playlist);
      }).then(function () {
        return _this.props.onClose();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AddToPlaylistMenu.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        props = _objectWithoutProperties(_props, ['t']);

    return _jsx('div', {}, void 0, !this.state.creating && React.createElement(PlaylistsMenu, _extends({}, props, {
      onCreatePlaylist: this.handleOpen
    })), this.state.creating && _jsx(PromptDialog, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return AddToPlaylistMenu;
}(React.Component);

AddToPlaylistMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCreatePlaylist: PropTypes.func.isRequired
} : {};


export default enhance(AddToPlaylistMenu);
//# sourceMappingURL=index.js.map
