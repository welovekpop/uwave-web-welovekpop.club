import mapProps from 'recompose/mapProps';
import componentFromProp from 'recompose/componentFromProp';
import Main from '../Main';
import UsersList from '../../containers/UsersList';
import BansList from '../../containers/BansList';

var pages = {
  main: Main,
  users: UsersList,
  bans: BansList
};

var enhance = mapProps(function (props) {
  return {
    component: pages[props.page]
  };
});

var CurrentPage = enhance(componentFromProp('component'));

export default CurrentPage;
//# sourceMappingURL=CurrentPage.js.map
