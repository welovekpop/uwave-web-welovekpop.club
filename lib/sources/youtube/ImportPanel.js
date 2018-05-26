"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _LoadingStates = require("../../constants/LoadingStates");

var _PlaylistActionCreators = require("../../actions/PlaylistActionCreators");

var _constants = require("./constants");

var _actions = require("./actions");

var _LoadingPanel = _interopRequireDefault(require("./LoadingPanel"));

var _ChannelPanel = _interopRequireDefault(require("./ChannelPanel"));

var _PlaylistPanel = _interopRequireDefault(require("./PlaylistPanel"));

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
      props = (0, _objectWithoutProperties2.default)(_ref, ["type", "importingState"]);

  if (importingState === _LoadingStates.LOADED) {
    if (type === _constants.PLAYLIST) {
      return _react.default.createElement(_PlaylistPanel.default, props);
    }

    return _react.default.createElement(_ChannelPanel.default, props);
  }

  return _react.default.createElement(_LoadingPanel.default, props);
};

YouTubeImportPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes.default.oneOf([_constants.PLAYLIST, _constants.CHANNEL]).isRequired,
  importingState: _propTypes.default.oneOf([_LoadingStates.IDLE, _LoadingStates.LOADING, _LoadingStates.LOADED])
} : {};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(YouTubeImportPanel);

exports.default = _default;
//# sourceMappingURL=ImportPanel.js.map
