import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SearchBar from '../components/PlaylistManager/Header/SearchBar';
import { search, setSource } from '../actions/SearchActionCreators';
import { searchSourceTypeSelector } from '../selectors/searchSelectors';
var mapStateToProps = createStructuredSelector({
  source: searchSourceTypeSelector
});
var mapDispatchToProps = {
  onSubmit: search,
  onSourceChange: setSource
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
//# sourceMappingURL=MediaSearchBar.js.map
