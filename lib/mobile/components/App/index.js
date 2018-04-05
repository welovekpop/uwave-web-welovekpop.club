'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _toClass = require('recompose/toClass');

var _toClass2 = _interopRequireDefault(_toClass);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _ErrorArea = require('../../../containers/ErrorArea');

var _ErrorArea2 = _interopRequireDefault(_ErrorArea);

var _PlaylistManager = require('../../containers/PlaylistManager');

var _PlaylistManager2 = _interopRequireDefault(_PlaylistManager);

var _RoomHistory = require('../../containers/RoomHistory');

var _RoomHistory2 = _interopRequireDefault(_RoomHistory);

var _SettingsManager = require('../../../containers/SettingsManager');

var _SettingsManager2 = _interopRequireDefault(_SettingsManager);

var _Dialogs = require('../../../components/Dialogs');

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _AddToPlaylistMenu = require('../../../containers/AddToPlaylistMenu');

var _AddToPlaylistMenu2 = _interopRequireDefault(_AddToPlaylistMenu);

var _DragLayer = require('../../../containers/DragLayer');

var _DragLayer2 = _interopRequireDefault(_DragLayer);

var _MainView = require('../../containers/MainView');

var _MainView2 = _interopRequireDefault(_MainView);

var _Overlays = require('./Overlays');

var _Overlays2 = _interopRequireDefault(_Overlays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _toClass2.default, (0, _withState2.default)('dismissedWarning', 'onDismiss', false));

var _ref2 = (0, _jsx3.default)(_MainView2.default, {});

var _ref3 = (0, _jsx3.default)(_ErrorArea2.default, {});

var _ref4 = (0, _jsx3.default)(_Dialogs2.default, {});

var _ref5 = (0, _jsx3.default)(_AddToPlaylistMenu2.default, {});

var _ref6 = (0, _jsx3.default)(_DragLayer2.default, {});

var MobileApp = function MobileApp(_ref) {
  var settings = _ref.settings,
      activeOverlay = _ref.activeOverlay,
      onCloseOverlay = _ref.onCloseOverlay,
      dismissedWarning = _ref.dismissedWarning,
      onDismiss = _ref.onDismiss;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('App', 'MobileApp', 'is-mobile', settings.videoEnabled && 'MobileApp--videoEnabled')
  }, void 0, _ref2, (0, _jsx3.default)(_Snackbar2.default, {
    open: !dismissedWarning,
    onClose: function onClose() {
      return onDismiss(true);
    },
    message: 'Note: The mobile version is in beta and may crash regularly.'
  }), _ref3, (0, _jsx3.default)(_Overlays2.default, {
    transitionName: 'Overlay',
    active: activeOverlay
  }, void 0, (0, _jsx3.default)(_PlaylistManager2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'playlistManager'), (0, _jsx3.default)(_RoomHistory2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'roomHistory'), (0, _jsx3.default)(_SettingsManager2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'settings')), _ref4, _ref5, _ref6);
};

MobileApp.propTypes = process.env.NODE_ENV !== "production" ? {
  settings: _propTypes2.default.shape({
    videoEnabled: _propTypes2.default.bool.isRequired
  }).isRequired,
  activeOverlay: _propTypes2.default.string,
  onCloseOverlay: _propTypes2.default.func.isRequired,
  // Mobile Beta warning
  dismissedWarning: _propTypes2.default.bool.isRequired,
  onDismiss: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(MobileApp);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
