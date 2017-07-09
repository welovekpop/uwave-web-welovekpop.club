import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import ImportIcon from 'material-ui/svg-icons/action/input';

import Loader from '../../Loader';

var _ref2 = _jsx('div', {
  className: 'PlaylistMenuRow-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var _ref3 = _jsx('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, _jsx(ImportIcon, {
  color: '#fff'
}));

var PlaylistImportRow = function PlaylistImportRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      importing = _ref.importing,
      onClick = _ref.onClick;

  var icon = void 0;
  if (importing) {
    icon = _ref2;
  } else {
    icon = _ref3;
  }
  return _jsx('button', {
    role: 'menuitem',
    className: cx('PlaylistMenuRow', 'PlaylistMenuRow--import', className),
    onClick: onClick
  }, void 0, _jsx('div', {
    className: 'PlaylistMenuRow-content'
  }, void 0, _jsx('div', {
    className: 'PlaylistMenuRow-title'
  }, void 0, icon, t('playlists.import.title'))));
};

PlaylistImportRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  importing: PropTypes.bool,
  onClick: PropTypes.func.isRequired
} : {};

export default translate()(PlaylistImportRow);
//# sourceMappingURL=PlaylistImportRow.js.map
