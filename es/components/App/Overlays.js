import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import find from 'array-find';
import TransitionGroup from 'react-transition-group/CSSTransitionGroup';

var Overlays = function Overlays(_ref) {
  var children = _ref.children,
      active = _ref.active;

  var view = void 0;
  if (Array.isArray(children)) {
    view = find(children, function (child) {
      return child.key === active;
    });
  } else if (children.key === active) {
    view = children;
  }
  return _jsx('div', {
    className: 'Overlays'
  }, void 0, _jsx(TransitionGroup, {
    transitionName: 'Overlay',
    transitionEnterTimeout: 180,
    transitionLeaveTimeout: 180
  }, void 0, view));
};

Overlays.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  active: PropTypes.string
} : {};

export default Overlays;
//# sourceMappingURL=Overlays.js.map
