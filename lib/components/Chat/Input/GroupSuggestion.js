'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _People = require('material-ui-icons/People');

var _People2 = _interopRequireDefault(_People);

var _Suggestion = require('./Suggestion');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_List.ListItemIcon, {}, void 0, (0, _jsx3.default)(_People2.default, {}));

var GroupSuggestion = function GroupSuggestion(_ref) {
  var group = _ref.value,
      props = (0, _objectWithoutProperties3.default)(_ref, ['value']);

  return _react2.default.createElement(_Suggestion2.default, props, _ref2, (0, _jsx3.default)(_List.ListItemText, {
    primary: group
  }));
};

GroupSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes2.default.string.isRequired
} : {};

exports.default = GroupSuggestion;
//# sourceMappingURL=GroupSuggestion.js.map
//# sourceMappingURL=GroupSuggestion.js.map
