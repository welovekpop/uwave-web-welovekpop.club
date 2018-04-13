import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { currentUserSelector } from '../../selectors/userSelectors';
import { playlistsSelector } from '../../selectors/playlistSelectors';
import { toggleSettings, toggleAbout } from '../../actions/OverlayActionCreators';
import { drawerIsOpenSelector } from '../selectors/drawerSelectors';
import { setDrawer } from '../actions/DrawerActionCreators';
import { toggleServerList, openPlaylist } from '../actions/OverlayActionCreators';
import DrawerMenu from '../components/DrawerMenu';
var mapStateToProps = createStructuredSelector({
  user: currentUserSelector,
  playlists: playlistsSelector,
  open: drawerIsOpenSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    var uw = props.uwave;
    return Boolean(uw && uw.getAboutPageComponent());
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onShowAbout: toggleAbout,
    onShowServerList: toggleServerList,
    onShowSettings: toggleSettings,
    onShowPlaylist: openPlaylist,
    onDrawerClose: function onDrawerClose() {
      return setDrawer(false);
    }
  }, dispatch);
};

var enhance = compose(getContext({
  uwave: PropTypes.object
}), connect(mapStateToProps, mapDispatchToProps));
export default enhance(DrawerMenu);
//# sourceMappingURL=DrawerMenu.js.map
