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

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuItemStyle = {
  WebkitAppearance: 'initial'
};

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return (0, _jsx3.default)(_Menu2.default, {
    onItemTouchTap: function onItemTouchTap(event, item) {
      return onSelect(item.props.value);
    }
  }, void 0, reasons.map(function (reason) {
    return (0, _jsx3.default)(_MenuItem2.default, {
      value: reason.name,
      style: menuItemStyle,
      primaryText: reason.label
    }, reason.name);
  }));
};

SkipReasonsList.propTypes = process.env.NODE_ENV !== "production" ? {
  reasons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    label: _propTypes2.default.string
  })).isRequired,
  onSelect: _propTypes2.default.func.isRequired
} : {};

exports.default = SkipReasonsList;
//# sourceMappingURL=SkipReasonsList.js.map
//# sourceMappingURL=SkipReasonsList.js.map
