import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { loadBans, unbanUserAndReload } from '../actions/bans';
import BansList from '../components/BansList';

var mapStateToProps = function mapStateToProps(state) {
  return {
    bans: state.admin.bans.bans
  };
};

var mapDispatchToProps = {
  onLoadBans: loadBans,
  onUnbanUser: unbanUserAndReload
};

export default compose(connect(mapStateToProps, mapDispatchToProps), lifecycle({
  componentDidMount: function componentDidMount() {
    this.props.onLoadBans();
  }
}))(BansList);
//# sourceMappingURL=BansList.js.map
