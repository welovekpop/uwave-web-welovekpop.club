"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("recompose/compose"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _userSelectors = require("../../selectors/userSelectors");

var _playlistSelectors = require("../../selectors/playlistSelectors");

var _OverlayActionCreators = require("../../actions/OverlayActionCreators");

var _drawerSelectors = require("../selectors/drawerSelectors");

var _DrawerActionCreators = require("../actions/DrawerActionCreators");

var _OverlayActionCreators2 = require("../actions/OverlayActionCreators");

var _DrawerMenu = _interopRequireDefault(require("../components/DrawerMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  user: _userSelectors.currentUserSelector,
  playlists: _playlistSelectors.playlistsSelector,
  open: _drawerSelectors.drawerIsOpenSelector,
  hasAboutPage: function hasAboutPage(state, props) {
    var uw = props.uwave;
    return Boolean(uw && uw.getAboutPageComponent());
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onShowAbout: _OverlayActionCreators.toggleAbout,
    onShowServerList: _OverlayActionCreators2.toggleServerList,
    onShowSettings: _OverlayActionCreators.toggleSettings,
    onShowPlaylist: _OverlayActionCreators2.openPlaylist,
    onDrawerClose: function onDrawerClose() {
      return (0, _DrawerActionCreators.setDrawer)(false);
    }
  }, dispatch);
};

var enhance = (0, _compose.default)((0, _getContext.default)({
  uwave: _propTypes.default.object
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps));

var _default = enhance(_DrawerMenu.default);

exports.default = _default;
//# sourceMappingURL=DrawerMenu.js.map
