import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from "@material-ui/core/es/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent";
import PreviewPlayer from '../../Video/Player';
var TITLE = 'preview-media-title';

function getTitle(media) {
  return media.artist + " \u2013 " + media.title;
}

var PreviewMediaDialog = function PreviewMediaDialog(_ref) {
  var open = _ref.open,
      media = _ref.media,
      volume = _ref.volume,
      onCloseDialog = _ref.onCloseDialog;
  return _jsx(Dialog, {
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
  }, void 0, _jsx(DialogTitle, {
    id: TITLE,
    className: "Dialog-title"
  }, void 0, open ? getTitle(media) : 'Preview Media'), _jsx(DialogContent, {
    className: "Dialog-body PreviewMediaDialog-content"
  }, void 0, open && _jsx(PreviewPlayer, {
    mode: "preview",
    media: media,
    volume: volume
  })));
};

PreviewMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  open: PropTypes.bool,
  media: PropTypes.object,
  volume: PropTypes.number,
  onCloseDialog: PropTypes.func.isRequired
} : {};
export default PreviewMediaDialog;
//# sourceMappingURL=index.js.map
