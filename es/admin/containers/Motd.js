import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Motd from '../components/Motd';
import { setMotd } from '../../actions/ChatActionCreators';
import { rawMotdSelector, markupCompilerOptionsSelector } from '../../selectors/chatSelectors';
import { canChangeMotdSelector } from '../selectors/authSelectors';

var mapStateToProps = createStructuredSelector({
  motd: rawMotdSelector,
  compileOptions: markupCompilerOptionsSelector,
  canChangeMotd: canChangeMotdSelector
});

var mapDispatchToProps = {
  onSetMotd: setMotd
};

export default connect(mapStateToProps, mapDispatchToProps)(Motd);
//# sourceMappingURL=Motd.js.map
