import _extends from 'babel-runtime/helpers/extends';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { userListSelector, guestCountSelector } from '../selectors/userSelectors';
import { currentVotesSelector } from '../selectors/voteSelectors';
import RoomUserList from '../components/RoomUserList';

var userListWithVotesSelector = createSelector(userListSelector, currentVotesSelector, function (users, votes) {
  return users.map(function (user) {
    return _extends({}, user, {
      votes: {
        upvote: votes.upvotes.indexOf(user._id) !== -1,
        downvote: votes.downvotes.indexOf(user._id) !== -1,
        favorite: votes.favorites.indexOf(user._id) !== -1
      }
    });
  });
});

var mapStateToProps = createStructuredSelector({
  users: userListWithVotesSelector,
  guests: guestCountSelector
});

export default connect(mapStateToProps)(RoomUserList);
//# sourceMappingURL=RoomUserList.js.map
