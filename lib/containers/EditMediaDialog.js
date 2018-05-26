"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _dialogSelectors = require("../selectors/dialogSelectors");

var _EditMediaDialog = _interopRequireDefault(require("../components/Dialogs/EditMediaDialog"));

var _DialogCloseAnimation = _interopRequireDefault(require("../components/DialogCloseAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onUpdateMedia: _PlaylistActionCreators.updateMedia,
    onCloseDialog: _DialogActionCreators.closeEditMediaDialog
  }, dispatch);
};

var DIALOG_ANIMATION_DURATION = 450; // ms

var enhance = (0, _reactRedux.connect)(_dialogSelectors.editMediaDialogSelector, mapDispatchToProps);

var EditMediaDialogContainer = function EditMediaDialogContainer(_ref) {
  var onUpdateMedia = _ref.onUpdateMedia,
      playlistID = _ref.playlistID,
      media = _ref.media,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onUpdateMedia", "playlistID", "media"]);
  return (0, _jsx2.default)(_DialogCloseAnimation.default, {
    delay: DIALOG_ANIMATION_DURATION
  }, void 0, media && _react.default.createElement(_EditMediaDialog.default, (0, _extends2.default)({}, props, {
    media: media,
    onEditedMedia: function onEditedMedia(update) {
      return onUpdateMedia(playlistID, media._id, update);
    }
  })));
};

EditMediaDialogContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  playlistID: _propTypes.default.string,
  media: _propTypes.default.object,
  onUpdateMedia: _propTypes.default.func.isRequired
} : {};

var _default = enhance(EditMediaDialogContainer);

exports.default = _default;
//# sourceMappingURL=EditMediaDialog.js.map
