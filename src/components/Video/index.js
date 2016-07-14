import cx from 'classnames';
import isEqual from 'is-equal-shallow';
import React, { Component, PropTypes } from 'react';

import injectMediaSources from '../../utils/injectMediaSources';

@injectMediaSources()
export default class Video extends Component {
  static propTypes = {
    getAllMediaSources: PropTypes.func.isRequired,
    enabled: PropTypes.bool,
    size: PropTypes.string,
    volume: PropTypes.number,
    isMuted: PropTypes.bool,
    historyID: PropTypes.string,
    media: PropTypes.object,
    seek: PropTypes.number
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  }

  render() {
    const {
      getAllMediaSources,
      enabled, size,
      volume, isMuted,
      media, seek
    } = this.props;

    if (!media) {
      return <div className="Video" />;
    }

    const props = {
      enabled,
      media, seek,
      mode: size,
      volume: isMuted ? 0 : volume
    };

    const sources = getAllMediaSources();
    const players = Object.keys(sources).map(sourceType => {
      if (sources[sourceType].Player) {
        const { Player } = sources[sourceType];
        return (
          <Player
            key={sourceType}
            {...props}
            active={media.sourceType === sourceType}
          />
        );
      }
      return null;
    }).filter(Boolean);

    return (
      <div className={cx('Video', `Video--${media.sourceType}`, `Video--${size}`)}>
        {players}
      </div>
    );
  }
}
