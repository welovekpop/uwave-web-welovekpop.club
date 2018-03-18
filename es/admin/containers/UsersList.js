import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import UsersList from '../components/UsersList';
import { loadUsers } from '../actions/users';
import { pageSelector, usersSelector } from '../selectors/userSelectors';

var mapStateToProps = createStructuredSelector({
  currentPage: pageSelector,
  users: usersSelector
});

var mapDispatchToProps = {
  onLoadUsers: loadUsers
};

export default compose(connect(mapStateToProps, mapDispatchToProps), lifecycle({
  componentDidMount: function componentDidMount() {
    this.props.onLoadUsers();
  }
}))(UsersList);
//# sourceMappingURL=UsersList.js.map
