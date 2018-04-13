import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dismiss } from '../actions/ErrorActionCreators';
import { firstErrorSelector } from '../selectors/errorSelectors';
import ErrorArea from '../components/ErrorArea';

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: firstErrorSelector(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onDismiss: dismiss
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorArea);
//# sourceMappingURL=ErrorArea.js.map
