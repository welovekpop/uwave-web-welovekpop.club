"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _injectMediaSources = _interopRequireDefault(require("../../../utils/injectMediaSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistImport = function PlaylistImport(_ref) {
  var getMediaSource = _ref.getMediaSource,
      getAllMediaSources = _ref.getAllMediaSources,
      selectedSourceType = _ref.selectedSourceType,
      sourceStates = _ref.sourceStates,
      _onShowImportPanel = _ref.onShowImportPanel,
      onHideImportPanel = _ref.onHideImportPanel;

  if (selectedSourceType) {
    var Panel = getMediaSource(selectedSourceType).ImportPanel;
    var state = sourceStates[selectedSourceType];
    return _react.default.createElement(Panel, (0, _extends2.default)({
      onClosePanel: onHideImportPanel
    }, state));
  }

  var forms = [];
  var sources = getAllMediaSources();
  Object.keys(sources).forEach(function (sourceType) {
    var ImportForm = sources[sourceType].ImportForm;

    if (ImportForm) {
      forms.push((0, _jsx2.default)(ImportForm, {
        onShowImportPanel: function onShowImportPanel() {
          return _onShowImportPanel(sourceType);
        },
        onHideImportPanel: onHideImportPanel
      }, sourceType));
    }
  });
  return (0, _jsx2.default)("div", {
    className: "PlaylistImport"
  }, void 0, forms);
};

PlaylistImport.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedSourceType: _propTypes.default.string,
  sourceStates: _propTypes.default.object,
  getMediaSource: _propTypes.default.func.isRequired,
  getAllMediaSources: _propTypes.default.func.isRequired,
  onShowImportPanel: _propTypes.default.func.isRequired,
  onHideImportPanel: _propTypes.default.func.isRequired
} : {};

var _default = (0, _injectMediaSources.default)()(PlaylistImport);

exports.default = _default;
//# sourceMappingURL=index.js.map
