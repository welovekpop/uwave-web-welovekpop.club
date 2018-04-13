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

var _ModeEdit = _interopRequireDefault(require("@material-ui/icons/ModeEdit"));

var _PromptDialog = _interopRequireDefault(require("../../Dialogs/PromptDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {
  nativeColor: "#777"
});

var RenamePlaylistButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RenamePlaylistButton, _React$Component);

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
      return _this.props.onRename(name).then(_this.closeDialog.bind((0, _assertThisInitialized2.default)(_this)));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = RenamePlaylistButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      renaming: false
    });
  };

  _proto.render = function render() {
    var t = this.props.t;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_Tooltip.default, {
      title: t('playlists.rename'),
      placement: "top"
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      className: "PlaylistMeta-iconButton",
      onClick: this.handleOpen
    }, void 0, _ref)), this.state.renaming && (0, _jsx2.default)(_PromptDialog.default, {
      title: t('dialogs.renamePlaylist.nameInputTitle'),
      submitLabel: t('dialogs.renamePlaylist.action'),
      icon: _ref2,
      value: this.props.initialName,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return RenamePlaylistButton;
}(_react.default.Component);

RenamePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onRename: _propTypes.default.func.isRequired,
  initialName: _propTypes.default.string
} : {};

var _default = enhance(RenamePlaylistButton); //# sourceMappingURL=RenamePlaylistButton.js.map


exports.default = _default;
//# sourceMappingURL=RenamePlaylistButton.js.map
