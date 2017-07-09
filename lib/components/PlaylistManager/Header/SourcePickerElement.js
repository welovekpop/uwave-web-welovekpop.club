'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourcePickerElement = function SourcePickerElement(_ref) {
  var className = _ref.className,
      name = _ref.name,
      source = _ref.source,
      active = _ref.active;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('SourcePickerElement', 'SourcePickerElement--' + name, active && 'SourcePickerElement--active', className),
    style: { backgroundImage: 'url(' + source.logo + ')' }
  });
};

SourcePickerElement.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  source: _propTypes2.default.shape({
    logo: _propTypes2.default.string.isRequired
  }).isRequired,
  active: _propTypes2.default.bool
} : {};

exports.default = SourcePickerElement;
//# sourceMappingURL=SourcePickerElement.js.map
//# sourceMappingURL=SourcePickerElement.js.map
