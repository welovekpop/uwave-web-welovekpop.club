'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _injectMediaSources = require('../../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

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
    return _react2.default.createElement(Panel, (0, _extends3.default)({
      onClosePanel: onHideImportPanel
    }, state));
  }

  var forms = [];
  var sources = getAllMediaSources();
  Object.keys(sources).forEach(function (sourceType) {
    var ImportForm = sources[sourceType].ImportForm;
    if (ImportForm) {
      forms.push((0, _jsx3.default)(ImportForm, {
        onShowImportPanel: function onShowImportPanel() {
          return _onShowImportPanel(sourceType);
        },
        onHideImportPanel: onHideImportPanel
      }, sourceType));
    }
  });

  return (0, _jsx3.default)('div', {
    className: 'PlaylistImport'
  }, void 0, forms);
};

PlaylistImport.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedSourceType: _propTypes2.default.string,
  sourceStates: _propTypes2.default.object,

  getMediaSource: _propTypes2.default.func.isRequired,
  getAllMediaSources: _propTypes2.default.func.isRequired,
  onShowImportPanel: _propTypes2.default.func.isRequired,
  onHideImportPanel: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _injectMediaSources2.default)()(PlaylistImport);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
