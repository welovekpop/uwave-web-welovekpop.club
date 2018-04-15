import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import UsersList from '../components/UsersList';
import { loadUsers, setUsersFilter } from '../actions/users';
import { pageSelector, pageSizeSelector, totalUsersSelector, usersSelector } from '../selectors/userSelectors';
var mapStateToProps = createStructuredSelector({
  currentPage: pageSelector,
  pageSize: pageSizeSelector,
  totalUsers: totalUsersSelector,
  users: usersSelector
});
var mapDispatchToProps = {
  onLoadUsers: loadUsers,
  onFilter: setUsersFilter
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withProps(function (props) {
  return {
    onChangePage: function onChangePage(event, page) {
      return props.onLoadUsers({
        offset: page * props.pageSize,
        limit: props.pageSize
      });
    },
    onFilter: function onFilter(filter) {
      props.onFilter(filter);
      props.onLoadUsers({
        offset: 0,
        limit: props.pageSize
      });
    }
  };
}), lifecycle({
  componentDidMount: function componentDidMount() {
    this.props.onChangePage(null, 0);
  }
}));
export default enhance(UsersList);
//# sourceMappingURL=UsersList.js.map
