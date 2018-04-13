import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import OverlayHeader from '../../Overlay/Header';
import SearchBar from '../../../containers/MediaSearchBar';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(SearchBar, {
  className: "PlaylistHeader-search"
});

var PlaylistManagerHeader = function PlaylistManagerHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay;
  return _jsx(OverlayHeader, {
    className: cx('PlaylistHeader', className),
    title: t('playlists.title'),
    onCloseOverlay: onCloseOverlay
  }, void 0, _ref2);
};

PlaylistManagerHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  t: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired
} : {};
export default enhance(PlaylistManagerHeader);
//# sourceMappingURL=index.js.map
