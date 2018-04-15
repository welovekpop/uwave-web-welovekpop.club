import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IDLE, LOADING, LOADED } from '../../constants/LoadingStates';
import { addMediaMenu as openAddMediaMenu } from '../../actions/PlaylistActionCreators';
import { PLAYLIST, CHANNEL } from './constants';
import { importPlaylist } from './actions';
import LoadingPanel from './LoadingPanel';
import ChannelPanel from './ChannelPanel';
import PlaylistPanel from './PlaylistPanel';

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onImportPlaylist: importPlaylist,
    onOpenAddMediaMenu: openAddMediaMenu
  }, dispatch);
};

var YouTubeImportPanel = function YouTubeImportPanel(_ref) {
  var type = _ref.type,
      importingState = _ref.importingState,
      props = _objectWithoutProperties(_ref, ["type", "importingState"]);

  if (importingState === LOADED) {
    if (type === PLAYLIST) {
      return React.createElement(PlaylistPanel, props);
    }

    return React.createElement(ChannelPanel, props);
  }

  return React.createElement(LoadingPanel, props);
};

YouTubeImportPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.oneOf([PLAYLIST, CHANNEL]).isRequired,
  importingState: PropTypes.oneOf([IDLE, LOADING, LOADED])
} : {};
export default connect(mapStateToProps, mapDispatchToProps)(YouTubeImportPanel);
//# sourceMappingURL=ImportPanel.js.map
