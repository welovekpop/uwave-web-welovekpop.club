'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _people = require('material-ui/svg-icons/social/people');

var _people2 = _interopRequireDefault(_people);

var _Suggestion = require('./Suggestion');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_people2.default, {});

var GroupSuggestion = function GroupSuggestion(props) {
  return _react2.default.createElement(_Suggestion2.default, (0, _extends3.default)({}, props, {
    leftIcon: _ref
  }));
};

GroupSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes2.default.string.isRequired
} : {};

exports.default = GroupSuggestion;
//# sourceMappingURL=GroupSuggestion.js.map
//# sourceMappingURL=GroupSuggestion.js.map
