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

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

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
  return (0, _jsx3.default)('div', {
    className: 'Overlays'
  }, void 0, (0, _jsx3.default)(_CSSTransitionGroup2.default, {
    transitionName: 'Overlay',
    transitionEnterTimeout: 180,
    transitionLeaveTimeout: 180
  }, void 0, view));
};

Overlays.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  active: _propTypes2.default.string
} : {};

exports.default = Overlays;
//# sourceMappingURL=Overlays.js.map
//# sourceMappingURL=Overlays.js.map
