"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrayFind = _interopRequireDefault(require("array-find"));

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use the css transitionend event to mark the finish of a transition.
// Using this instead of a timeout prop so that we don't have to define
// the timeout in multiple places, and it also fixes a small visual
// glitch in Firefox where a scrollbar would appear for a split second
// when the enter transition was almost complete.
function addTransitionEndListener(node, done) {
  node.addEventListener('transitionend', done, false);
}

var Overlays = function Overlays(_ref) {
  var children = _ref.children,
      active = _ref.active;
  var view;

  if (Array.isArray(children)) {
    view = (0, _arrayFind.default)(children, function (child) {
      return child.key === active;
    });
  } else if (children.key === active) {
    view = children;
  }

  if (view) {
    // Pass on the `view.key` so that overlays are mounted and unmounted correctly
    // when switching from one to the other.
    view = (0, _jsx2.default)(_CSSTransition.default, {
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: "Overlay",
      addEndListener: addTransitionEndListener
    }, view.key, view);
  }

  return (0, _jsx2.default)(_TransitionGroup.default, {
    className: "Overlays"
  }, void 0, view);
};

Overlays.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  active: _propTypes.default.string
} : {};
var _default = Overlays;
exports.default = _default;
//# sourceMappingURL=Overlays.js.map
