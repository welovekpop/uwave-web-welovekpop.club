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

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return (0, _jsx3.default)(_List2.default, {
    className: 'SkipReasonsList'
  }, void 0, reasons.map(function (reason) {
    return (0, _jsx3.default)(_List.ListItem, {
      button: true,
      onClick: function onClick() {
        return onSelect(reason.name);
      }
    }, reason.name, (0, _jsx3.default)(_List.ListItemText, {
      className: 'SkipReasonsList-label',
      primary: reason.label
    }));
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
