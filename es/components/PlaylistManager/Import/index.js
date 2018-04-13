import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import injectMediaSources from '../../../utils/injectMediaSources';

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
    return React.createElement(Panel, _extends({
      onClosePanel: onHideImportPanel
    }, state));
  }

  var forms = [];
  var sources = getAllMediaSources();
  Object.keys(sources).forEach(function (sourceType) {
    var ImportForm = sources[sourceType].ImportForm;

    if (ImportForm) {
      forms.push(_jsx(ImportForm, {
        onShowImportPanel: function onShowImportPanel() {
          return _onShowImportPanel(sourceType);
        },
        onHideImportPanel: onHideImportPanel
      }, sourceType));
    }
  });
  return _jsx("div", {
    className: "PlaylistImport"
  }, void 0, forms);
};

PlaylistImport.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedSourceType: PropTypes.string,
  sourceStates: PropTypes.object,
  getMediaSource: PropTypes.func.isRequired,
  getAllMediaSources: PropTypes.func.isRequired,
  onShowImportPanel: PropTypes.func.isRequired,
  onHideImportPanel: PropTypes.func.isRequired
} : {};
export default injectMediaSources()(PlaylistImport);
//# sourceMappingURL=index.js.map
