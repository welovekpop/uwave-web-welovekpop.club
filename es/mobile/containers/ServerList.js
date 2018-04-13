import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Overlay from '../../components/Overlay';
import OverlayContent from '../../components/Overlay/Content';
import OverlayHeader from '../../components/Overlay/Header';
import ServerList from '../../components/ServerList';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(OverlayContent, {
  className: "AboutPanel"
}, void 0, _jsx(ServerList, {}));

var ServerListContainer = function ServerListContainer(_ref) {
  var t = _ref.t,
      onCloseOverlay = _ref.onCloseOverlay;
  return _jsx(Overlay, {}, void 0, _jsx(OverlayHeader, {
    title: t('about.servers'),
    onCloseOverlay: onCloseOverlay
  }), _ref2);
};

ServerListContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired
} : {};
export default enhance(ServerListContainer);
//# sourceMappingURL=ServerList.js.map
