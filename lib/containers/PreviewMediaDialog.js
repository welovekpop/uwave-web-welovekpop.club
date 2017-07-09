'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _DialogActionCreators = require('../actions/DialogActionCreators');

var _dialogSelectors = require('../selectors/dialogSelectors');

var _PreviewMediaDialog = require('../components/Dialogs/PreviewMediaDialog');

var _PreviewMediaDialog2 = _interopRequireDefault(_PreviewMediaDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onCloseDialog: _DialogActionCreators.closePreviewMediaDialog
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(_dialogSelectors.previewMediaDialogSelector, mapDispatchToProps)(_PreviewMediaDialog2.default);
//# sourceMappingURL=PreviewMediaDialog.js.map
//# sourceMappingURL=PreviewMediaDialog.js.map
