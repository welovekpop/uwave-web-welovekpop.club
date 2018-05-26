"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Player = _interopRequireDefault(require("../../Video/Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'preview-media-title';

function getTitle(media) {
  return media.artist + " \u2013 " + media.title;
}

var PreviewMediaDialog = function PreviewMediaDialog(_ref) {
  var open = _ref.open,
      media = _ref.media,
      volume = _ref.volume,
      onCloseDialog = _ref.onCloseDialog;
  return (0, _jsx2.default)(_Dialog.default, {
    classes: {
      root: 'AppColumn AppColumn--left',
      paper: 'Dialog PreviewMediaDialog'
    },
    BackdropProps: {
      className: 'AppColumn AppColumn--full'
    },
    open: open,
    onClose: onCloseDialog,
    disableEnforceFocus: true,
    maxWidth: false,
    "aria-labelledby": TITLE
  }, void 0, (0, _jsx2.default)(_DialogTitle.default, {
    id: TITLE,
    className: "Dialog-title"
  }, void 0, open ? getTitle(media) : 'Preview Media'), (0, _jsx2.default)(_DialogContent.default, {
    className: "Dialog-body PreviewMediaDialog-content"
  }, void 0, open && (0, _jsx2.default)(_Player.default, {
    mode: "preview",
    media: media,
    volume: volume
  })));
};

PreviewMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.default.bool,
  media: _propTypes.default.object,
  volume: _propTypes.default.number,
  onCloseDialog: _propTypes.default.func.isRequired
} : {};
var _default = PreviewMediaDialog;
exports.default = _default;
//# sourceMappingURL=index.js.map
