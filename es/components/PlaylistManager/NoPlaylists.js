import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
var enhance = translate();

var NoPlaylists = function NoPlaylists(_ref) {
  var t = _ref.t,
      className = _ref.className;
  return _jsx("div", {
    className: cx('PlaylistPanel', 'PlaylistPanel--empty', className)
  }, void 0, t('playlists.noPlaylists'));
};

NoPlaylists.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string
} : {};
export default enhance(NoPlaylists);
//# sourceMappingURL=NoPlaylists.js.map
