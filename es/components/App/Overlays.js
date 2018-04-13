import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import find from 'array-find';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

var Overlays = function Overlays(_ref) {
  var children = _ref.children,
      active = _ref.active;
  var view;

  if (Array.isArray(children)) {
    view = find(children, function (child) {
      return child.key === active;
    });
  } else if (children.key === active) {
    view = children;
  }

  if (view) {
    // Pass on the `view.key` so that overlays are mounted and unmounted correctly
    // when switching from one to the other.
    view = _jsx(CSSTransition, {
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: "Overlay",
      timeout: 180
    }, view.key, view);
  }

  return _jsx(TransitionGroup, {
    className: "Overlays"
  }, void 0, view);
};

Overlays.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  active: PropTypes.string
} : {};
export default Overlays;
//# sourceMappingURL=Overlays.js.map
