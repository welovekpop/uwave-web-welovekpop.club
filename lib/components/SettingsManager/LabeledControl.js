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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabeledControl = function LabeledControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('label', {
    htmlFor: id
  }, void 0, label), children);
};

LabeledControl.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = LabeledControl;
//# sourceMappingURL=LabeledControl.js.map
//# sourceMappingURL=LabeledControl.js.map
