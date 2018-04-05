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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The control is in `children`.
/* eslint-disable jsx-a11y/label-has-for */
var LabeledControl = function LabeledControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children;

  var control = _react2.default.Children.only(children);

  return (0, _jsx3.default)('div', {
    className: 'LabeledControl'
  }, void 0, (0, _jsx3.default)('label', {
    className: 'LabeledControl-label',
    htmlFor: id
  }, void 0, label), _react2.default.cloneElement(control, {
    id: id,
    className: (0, _classnames2.default)(control.className, 'LabeledControl-control')
  }));
};
/* eslint-enable jsx-a11y/label-has-for */

LabeledControl.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = LabeledControl;
//# sourceMappingURL=LabeledControl.js.map
//# sourceMappingURL=LabeledControl.js.map
