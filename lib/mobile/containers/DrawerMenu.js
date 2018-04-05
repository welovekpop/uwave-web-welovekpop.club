'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reselect = require('reselect');

var _reactRedux = require('react-redux');

var _userSelectors = require('../../selectors/userSelectors');

var _playlistSelectors = require('../../selectors/playlistSelectors');

var _OverlayActionCreators = require('../../actions/OverlayActionCreators');

var _drawerSelectors = require('../selectors/drawerSelectors');

var _DrawerActionCreators = require('../actions/DrawerActionCreators');

var _OverlayActionCreators2 = require('../actions/OverlayActionCreators');

var _DrawerMenu = require('../components/DrawerMenu');

var _DrawerMenu2 = _interopRequireDefault(_DrawerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  user: _userSelectors.currentUserSelector,
  playlists: _playlistSelectors.playlistsSelector,
  open: _drawerSelectors.drawerIsOpenSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onShowAbout: _OverlayActionCreators.toggleAbout,
    onShowSettings: _OverlayActionCreators.toggleSettings,
    onShowPlaylist: _OverlayActionCreators2.openPlaylist,
    onDrawerClose: function onDrawerClose() {
      return (0, _DrawerActionCreators.setDrawer)(false);
    }
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DrawerMenu2.default);
//# sourceMappingURL=DrawerMenu.js.map
//# sourceMappingURL=DrawerMenu.js.map
