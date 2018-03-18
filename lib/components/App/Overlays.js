'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _CSSTransition = require('react-transition-group/CSSTransition');

var _CSSTransition2 = _interopRequireDefault(_CSSTransition);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlays = function Overlays(_ref) {
  var children = _ref.children,
      active = _ref.active;

  var view = void 0;
  if (Array.isArray(children)) {
    view = (0, _arrayFind2.default)(children, function (child) {
      return child.key === active;
    });
  } else if (children.key === active) {
    view = children;
  }
  if (view) {
    // Pass on the `view.key` so that overlays are mounted and unmounted correctly
    // when switching from one to the other.
    view = (0, _jsx3.default)(_CSSTransition2.default, {
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: 'Overlay',
      timeout: 180
    }, view.key, view);
  }
  return (0, _jsx3.default)(_TransitionGroup2.default, {
    className: 'Overlays'
  }, void 0, view);
};

Overlays.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  active: _propTypes2.default.string
} : {};

exports.default = Overlays;
//# sourceMappingURL=Overlays.js.map
//# sourceMappingURL=Overlays.js.map
