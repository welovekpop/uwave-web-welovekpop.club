"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _ConfirmDialog = _interopRequireDefault(require("../../Dialogs/ConfirmDialog"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Delete.default, {});

var DeletePlaylistButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DeletePlaylistButton, _React$Component);

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
      return _this.props.onDelete(name).then(_this.closeDialog.bind((0, _assertThisInitialized2.default)(_this)));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
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
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Tooltip.default, {
      title: active ? t('playlists.deleteActive') : t('playlists.delete'),
      placement: "top"
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      disabled: active,
      className: "PlaylistMeta-iconButton",
      onClick: this.handleOpen
    }, void 0, _ref)), this.state.deleting && (0, _jsx2.default)(_ConfirmDialog.default, {
      title: t('dialogs.deletePlaylist.title'),
      confirmLabel: t('dialogs.deletePlaylist.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, (0, _jsx2.default)(_Group.default, {}, void 0, t('dialogs.deletePlaylist.confirm'))));
  };

  return DeletePlaylistButton;
}(_react.default.Component);

DeletePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onDelete: _propTypes.default.func.isRequired,
  onNotDeletable: _propTypes.default.func.isRequired,
  active: _propTypes.default.bool
} : {};

var _default = enhance(DeletePlaylistButton); //# sourceMappingURL=DeletePlaylistButton.js.map


exports.default = _default;
//# sourceMappingURL=DeletePlaylistButton.js.map
