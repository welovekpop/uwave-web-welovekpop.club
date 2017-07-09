import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import OverlayHeader from '../Overlay/Header';

var About = function About(_ref) {
  var onCloseOverlay = _ref.onCloseOverlay,
      AboutPanel = _ref.render;
  return _jsx('div', {
    className: 'About'
  }, void 0, _jsx(OverlayHeader, {
    title: 'About',
    onCloseOverlay: onCloseOverlay,
    direction: 'top'
  }), _jsx('div', {
    className: 'AppRow AppRow--middle AboutPanel'
  }, void 0, _jsx(AboutPanel, {})));
};

About.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
} : {};

export default About;
//# sourceMappingURL=index.js.map
