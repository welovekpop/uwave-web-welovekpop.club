import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { moveWaitlistUser, removeWaitlistUser } from '../actions/ModerationActionCreators';
import { waitlistUsersSelector } from '../selectors/waitlistSelectors';
import { isModeratorSelector } from '../selectors/userSelectors';
import WaitList from '../components/WaitList';

var mapStateToProps = createStructuredSelector({
  users: waitlistUsersSelector,
  canMoveUsers: isModeratorSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onMoveUser: moveWaitlistUser,
    onRemoveUser: removeWaitlistUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitList);
//# sourceMappingURL=WaitList.js.map
