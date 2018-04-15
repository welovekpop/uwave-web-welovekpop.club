import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

var EmptyPanel = function EmptyPanel(_ref) {
  var t = _ref.t,
      className = _ref.className;
  return _jsx("div", {
    className: cx('PlaylistPanel', 'PlaylistPanel--empty', className)
  }, void 0, t('playlists.noPlaylists'));
};

EmptyPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string
} : {};
export default translate()(EmptyPanel);
//# sourceMappingURL=Empty.js.map
