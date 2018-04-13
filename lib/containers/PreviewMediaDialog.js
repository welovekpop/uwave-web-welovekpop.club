"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _dialogSelectors = require("../selectors/dialogSelectors");

var _PreviewMediaDialog = _interopRequireDefault(require("../components/Dialogs/PreviewMediaDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onCloseDialog: _DialogActionCreators.closePreviewMediaDialog
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(_dialogSelectors.previewMediaDialogSelector, mapDispatchToProps)(_PreviewMediaDialog.default); //# sourceMappingURL=PreviewMediaDialog.js.map


exports.default = _default;
//# sourceMappingURL=PreviewMediaDialog.js.map
