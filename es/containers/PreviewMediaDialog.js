import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closePreviewMediaDialog } from '../actions/DialogActionCreators';
import { previewMediaDialogSelector as mapStateToProps } from '../selectors/dialogSelectors';
import PreviewMediaDialog from '../components/Dialogs/PreviewMediaDialog';

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onCloseDialog: closePreviewMediaDialog
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewMediaDialog);
//# sourceMappingURL=PreviewMediaDialog.js.map
