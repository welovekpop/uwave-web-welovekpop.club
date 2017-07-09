import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { openPreviewMediaDialog } from '../actions/DialogActionCreators';
import { addMediaMenu } from '../actions/PlaylistActionCreators';

import { searchQuerySelector, searchResultsSelector, searchLoadingStateSelector } from '../selectors/searchSelectors';
import SearchResults from '../components/PlaylistManager/Panel/SearchResults';

var mapStateToProps = createStructuredSelector({
  query: searchQuerySelector,
  results: searchResultsSelector,
  loadingState: searchLoadingStateSelector
});

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }
  return [media];
};

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return addMediaMenu(selectionOrOne(media, selection), position);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: openPreviewMediaDialog
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
//# sourceMappingURL=SearchResultsPanel.js.map
