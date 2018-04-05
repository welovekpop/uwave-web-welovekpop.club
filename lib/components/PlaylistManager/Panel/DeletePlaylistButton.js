'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Delete = require('material-ui-icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _ConfirmDialog = require('../../Dialogs/ConfirmDialog');

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_Delete2.default, {});

var DeletePlaylistButton = function (_React$Component) {
  (0, _inherits3.default)(DeletePlaylistButton, _React$Component);

  function DeletePlaylistButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DeletePlaylistButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DeletePlaylistButton.prototype.closeDialog = function closeDialog() {
    this.setState({ deleting: false });
  };

  DeletePlaylistButton.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        active = _props.active;

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(_Tooltip2.default, {
      title: active ? t('playlists.deleteActive') : t('playlists.delete'),
      placement: 'top'
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      disabled: active,
      className: 'PlaylistMeta-iconButton',
      onClick: this.handleOpen
    }, void 0, _ref)), this.state.deleting && (0, _jsx3.default)(_ConfirmDialog2.default, {
      title: t('dialogs.deletePlaylist.title'),
      confirmLabel: t('dialogs.deletePlaylist.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, (0, _jsx3.default)(_Group2.default, {}, void 0, t('dialogs.deletePlaylist.confirm'))));
  };

  return DeletePlaylistButton;
}(_react2.default.Component);

DeletePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func.isRequired,
  onNotDeletable: _propTypes2.default.func.isRequired,
  active: _propTypes2.default.bool
} : {};

exports.default = enhance(DeletePlaylistButton);
//# sourceMappingURL=DeletePlaylistButton.js.map
//# sourceMappingURL=DeletePlaylistButton.js.map
