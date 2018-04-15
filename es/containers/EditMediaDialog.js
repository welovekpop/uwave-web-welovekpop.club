import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateMedia } from '../actions/PlaylistActionCreators';
import { closeEditMediaDialog } from '../actions/DialogActionCreators';
import { editMediaDialogSelector } from '../selectors/dialogSelectors';
import EditMediaDialog from '../components/Dialogs/EditMediaDialog';
import DialogCloseAnimation from '../components/DialogCloseAnimation';

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUpdateMedia: updateMedia,
    onCloseDialog: closeEditMediaDialog
  }, dispatch);
};

var DIALOG_ANIMATION_DURATION = 450; // ms

var enhance = connect(editMediaDialogSelector, mapDispatchToProps);

var EditMediaDialogContainer = function EditMediaDialogContainer(_ref) {
  var onUpdateMedia = _ref.onUpdateMedia,
      playlistID = _ref.playlistID,
      media = _ref.media,
      props = _objectWithoutProperties(_ref, ["onUpdateMedia", "playlistID", "media"]);

  return _jsx(DialogCloseAnimation, {
    delay: DIALOG_ANIMATION_DURATION
  }, void 0, media && React.createElement(EditMediaDialog, _extends({}, props, {
    media: media,
    onEditedMedia: function onEditedMedia(update) {
      return onUpdateMedia(playlistID, media._id, update);
    }
  })));
};

EditMediaDialogContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  playlistID: PropTypes.string,
  media: PropTypes.object,
  onUpdateMedia: PropTypes.func.isRequired
} : {};
export default enhance(EditMediaDialogContainer);
//# sourceMappingURL=EditMediaDialog.js.map
