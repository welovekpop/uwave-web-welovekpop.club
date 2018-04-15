"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireWildcard(require("material-ui/Dialog"));

var _Player = _interopRequireDefault(require("../../Video/Player"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  }, void 0, (0, _jsx2.default)(_Dialog.DialogTitle, {
    id: TITLE,
    className: "Dialog-title"
  }, void 0, open ? getTitle(media) : 'Preview Media'), (0, _jsx2.default)(_Dialog.DialogContent, {
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
var _default = PreviewMediaDialog; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
