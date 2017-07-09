import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

import PreviewPlayer from '../../Video/Player';

var useClassNameWidthStyle = {
  width: null
};
var inheritWidthStyle = {
  width: 'inherit'
};

var PreviewMediaDialog = function PreviewMediaDialog(_ref) {
  var open = _ref.open,
      media = _ref.media,
      volume = _ref.volume,
      onCloseDialog = _ref.onCloseDialog;
  return _jsx(Dialog, {
    className: 'AppColumn AppColumn--left',
    style: useClassNameWidthStyle,
    overlayStyle: inheritWidthStyle,
    contentClassName: 'Dialog PreviewMediaDialog',
    bodyClassName: 'Dialog-body',
    titleClassName: 'Dialog-title',
    title: open ? media.artist + ' \u2013 ' + media.title : 'Preview Media',
    open: open,
    onRequestClose: onCloseDialog,
    autoScrollBodyContent: true
  }, void 0, open && _jsx('div', {
    className: 'PreviewMediaDialog-content'
  }, void 0, _jsx(PreviewPlayer, {
    mode: 'preview',
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
