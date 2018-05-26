"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _PanelSelectActionCreators = require("../../actions/PanelSelectActionCreators");

var _OverlayActionCreators = require("../../actions/OverlayActionCreators");

var _SettingsActionCreators = require("../../actions/SettingsActionCreators");

var _boothSelectors = require("../../selectors/boothSelectors");

var _waitlistSelectors = require("../../selectors/waitlistSelectors");

var _playlistSelectors = require("../../selectors/playlistSelectors");

var _settingSelectors = require("../../selectors/settingSelectors");

var _DrawerActionCreators = require("../actions/DrawerActionCreators");

var _MainView = _interopRequireDefault(require("../components/MainView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selected: function selected(state) {
    return state.selectedPanel;
  },
  videoEnabled: _settingSelectors.videoEnabledSelector,
  media: _boothSelectors.mediaSelector,
  startTime: _boothSelectors.startTimeSelector,
  waitlistPosition: _waitlistSelectors.positionSelector,
  waitlistSize: _waitlistSelectors.sizeSelector,
  playlists: _playlistSelectors.playlistsSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onTabChange: _PanelSelectActionCreators.selectPanel,
    onOpenRoomHistory: _OverlayActionCreators.toggleRoomHistory,
    onOpenDrawer: _DrawerActionCreators.openDrawer,
    onOpenWaitlist: _DrawerActionCreators.openUsersDrawer,
    onEnableVideo: function onEnableVideo() {
      return (0, _SettingsActionCreators.set)('videoEnabled', true);
    }
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MainView.default);

exports.default = _default;
//# sourceMappingURL=MainView.js.map
