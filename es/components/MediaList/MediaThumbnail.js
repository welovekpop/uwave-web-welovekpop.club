import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';

var MediaThumbnail = function MediaThumbnail(_ref) {
  var url = _ref.url;
  return _jsx('div', {
    className: 'MediaListRow-thumb'
  }, void 0, _jsx('img', {
    className: 'MediaListRow-image',
    src: url,
    alt: ''
  }));
};

MediaThumbnail.propTypes = process.env.NODE_ENV !== "production" ? {
  url: PropTypes.string.isRequired
} : {};

export default MediaThumbnail;
//# sourceMappingURL=MediaThumbnail.js.map
