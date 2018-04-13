import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import PreviewPlayer from './PreviewPlayer';

var PlayerWrapper = function PlayerWrapper(props) {
  if (props.mode === 'preview') {
    return React.createElement(PreviewPlayer, props);
  }

  return React.createElement(Player, props);
};

PlayerWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  mode: PropTypes.string.isRequired
} : {};
export default PlayerWrapper;
//# sourceMappingURL=PlayerWrapper.js.map
