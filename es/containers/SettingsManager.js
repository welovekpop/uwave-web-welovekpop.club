import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { set as setSetting, setLanguage } from '../actions/SettingsActionCreators';
import { doChangeUsername } from '../actions/UserActionCreators';
import { logout } from '../actions/LoginActionCreators';
import { currentUserSelector } from '../selectors/userSelectors';
import { settingsSelector } from '../selectors/settingSelectors';
import createLazyOverlay from '../components/LazyOverlay';
var mapStateToProps = createStructuredSelector({
  settings: settingsSelector,
  user: currentUserSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSettingChange: setSetting,
    onChangeUsername: doChangeUsername,
    onChangeLanguage: setLanguage,
    onLogout: logout
  }, dispatch);
};

var enhance = connect(mapStateToProps, mapDispatchToProps);
var SettingsManager = createLazyOverlay({
  loader: function loader() {
    return import('../components/SettingsManager'
    /* webpackChunkName: "settings" */
    );
  },
  title: function title(t) {
    return t('settings.title');
  }
});
export default enhance(SettingsManager);
//# sourceMappingURL=SettingsManager.js.map
