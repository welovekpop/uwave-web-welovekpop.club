import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import { translate } from 'react-i18next';
import List, { ListItem, ListItemText } from '../List';
import OverlayHeader from '../Overlay/Header';
import OverlayContent from '../Overlay/Content';
import ServerList from '../ServerList';
var enhance = compose(translate(), withState('active', 'setActive', function (_ref) {
  var hasAboutPage = _ref.hasAboutPage;
  return hasAboutPage ? 'about' : 'servers';
}));

var _ref3 =
/*#__PURE__*/
_jsx(ServerList, {});

var About = function About(_ref2) {
  var t = _ref2.t,
      onCloseOverlay = _ref2.onCloseOverlay,
      active = _ref2.active,
      setActive = _ref2.setActive,
      hasAboutPage = _ref2.hasAboutPage,
      AboutPanel = _ref2.render;
  return _jsx("div", {
    className: "About"
  }, void 0, _jsx(OverlayHeader, {
    title: t('about.about'),
    onCloseOverlay: onCloseOverlay,
    direction: "top"
  }), _jsx(OverlayContent, {
    className: "AboutPanel"
  }, void 0, _jsx(List, {
    className: "AboutPanel-menu"
  }, void 0, hasAboutPage && _jsx(ListItem, {
    className: "AboutPanel-menuItem",
    selected: active === 'about',
    onClick: function onClick() {
      return setActive('about');
    }
  }, void 0, _jsx(ListItemText, {
    primary: t('about.about')
  })), _jsx(ListItem, {
    className: "AboutPanel-menuItem",
    selected: active === 'servers',
    onClick: function onClick() {
      return setActive('servers');
    }
  }, void 0, _jsx(ListItemText, {
    primary: t('about.servers')
  }))), _jsx("div", {
    className: "AboutPanel-content"
  }, void 0, active === 'about' && _jsx(AboutPanel, {}), active === 'servers' && _ref3)));
};

About.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  hasAboutPage: PropTypes.bool.isRequired,
  active: PropTypes.oneOf(['about', 'servers']).isRequired,
  setActive: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
} : {};
export default enhance(About);
//# sourceMappingURL=index.js.map
