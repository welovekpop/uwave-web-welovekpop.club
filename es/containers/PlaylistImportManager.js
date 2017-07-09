import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { showImportSourcePanel, hideImportSourcePanel } from '../actions/ImportActionCreators';
import { selectedSourceTypeSelector } from '../selectors/importSelectors';
import PlaylistImport from '../components/PlaylistManager/Import';

var mapStateToProps = createStructuredSelector({
  selectedSourceType: selectedSourceTypeSelector,
  sourceStates: function sourceStates(state) {
    return state.sources;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onShowImportPanel: showImportSourcePanel,
    onHideImportPanel: hideImportSourcePanel
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistImport);
//# sourceMappingURL=PlaylistImportManager.js.map
