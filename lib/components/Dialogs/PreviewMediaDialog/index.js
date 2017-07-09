'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Player = require('../../Video/Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _jsx3.default)(_Dialog2.default, {
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
  }, void 0, open && (0, _jsx3.default)('div', {
    className: 'PreviewMediaDialog-content'
  }, void 0, (0, _jsx3.default)(_Player2.default, {
    mode: 'preview',
    media: media,
    volume: volume
  })));
};

PreviewMediaDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes2.default.bool,
  media: _propTypes2.default.object,
  volume: _propTypes2.default.number,

  onCloseDialog: _propTypes2.default.func.isRequired
} : {};

exports.default = PreviewMediaDialog;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
