'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _LoadingStates = require('../../constants/LoadingStates');

var _PlaylistActionCreators = require('../../actions/PlaylistActionCreators');

var _constants = require('./constants');

var _actions = require('./actions');

var _LoadingPanel = require('./LoadingPanel');

var _LoadingPanel2 = _interopRequireDefault(_LoadingPanel);

var _ChannelPanel = require('./ChannelPanel');

var _ChannelPanel2 = _interopRequireDefault(_ChannelPanel);

var _PlaylistPanel = require('./PlaylistPanel');

var _PlaylistPanel2 = _interopRequireDefault(_PlaylistPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps() {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onImportPlaylist: _actions.importPlaylist,
    onOpenAddMediaMenu: _PlaylistActionCreators.addMediaMenu
  }, dispatch);
};

var YouTubeImportPanel = function YouTubeImportPanel(_ref) {
  var type = _ref.type,
      importingState = _ref.importingState,
      props = (0, _objectWithoutProperties3.default)(_ref, ['type', 'importingState']);

  if (importingState === _LoadingStates.LOADED) {
    if (type === _constants.PLAYLIST) {
      return _react2.default.createElement(_PlaylistPanel2.default, props);
    }
    return _react2.default.createElement(_ChannelPanel2.default, props);
  }
  return _react2.default.createElement(_LoadingPanel2.default, props);
};

YouTubeImportPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes2.default.oneOf([_constants.PLAYLIST, _constants.CHANNEL]).isRequired,
  importingState: _propTypes2.default.oneOf([_LoadingStates.IDLE, _LoadingStates.LOADING, _LoadingStates.LOADED])
} : {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(YouTubeImportPanel);
//# sourceMappingURL=ImportPanel.js.map
//# sourceMappingURL=ImportPanel.js.map
