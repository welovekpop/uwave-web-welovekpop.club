import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IDLE, LOADING, LOADED } from '../../constants/LoadingStates';

import {
  addMediaMenu as openAddMediaMenu
} from '../../actions/PlaylistActionCreators';
import { PLAYLIST, CHANNEL } from './constants';
import { importPlaylist } from './actions';
import LoadingPanel from './LoadingPanel';
import ChannelPanel from './ChannelPanel';
import PlaylistPanel from './PlaylistPanel';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
  onImportPlaylist: importPlaylist,
  onOpenAddMediaMenu: openAddMediaMenu
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class YouTubeImportPanel extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf([ PLAYLIST, CHANNEL ]).isRequired,
    importingState: React.PropTypes.oneOf([ IDLE, LOADING, LOADED ]),

    onClosePanel: React.PropTypes.func.isRequired,
    onImportPlaylist: React.PropTypes.func.isRequired
  };

  render() {
    const {
      type,
      importingState,
      ...props
    } = this.props;

    if (importingState === LOADED) {
      if (type === PLAYLIST) {
        return <PlaylistPanel {...props} />;
      }
      return <ChannelPanel {...props} />;
    }
    return <LoadingPanel {...props} />;
  }
}