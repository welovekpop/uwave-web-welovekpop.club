'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _PlaylistActionCreators = require('../actions/PlaylistActionCreators');

var _DialogActionCreators = require('../actions/DialogActionCreators');

var _dialogSelectors = require('../selectors/dialogSelectors');

var _EditMediaDialog = require('../components/Dialogs/EditMediaDialog');

var _EditMediaDialog2 = _interopRequireDefault(_EditMediaDialog);

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
      props = (0, _objectWithoutProperties3.default)(_ref, ['onUpdateMedia', 'playlistID', 'media']);

  return (0, _jsx3.default)(_CSSTransitionGroup2.default, {
    transitionName: 'Dialog',
    transitionEnterTimeout: DIALOG_ANIMATION_DURATION,
    transitionLeaveTimeout: DIALOG_ANIMATION_DURATION
  }, void 0, media && _react2.default.createElement(_EditMediaDialog2.default, (0, _extends3.default)({}, props, {
    media: media,
    onEditedMedia: function onEditedMedia(update) {
      return onUpdateMedia(playlistID, media._id, update);
    }
  })));
};

EditMediaDialogContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  playlistID: _propTypes2.default.string,
  media: _propTypes2.default.object,
  onUpdateMedia: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(EditMediaDialogContainer);
//# sourceMappingURL=EditMediaDialog.js.map
//# sourceMappingURL=EditMediaDialog.js.map
