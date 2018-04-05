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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuggestionsList = function SuggestionsList(_ref) {
  var children = _ref.children;
  return (0, _jsx3.default)('div', {
    className: 'ChatInput-suggestions'
  }, void 0, (0, _jsx3.default)(_Paper2.default, {}, void 0, (0, _jsx3.default)(_List2.default, {}, void 0, children)));
};

SuggestionsList.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = SuggestionsList;
//# sourceMappingURL=SuggestionsList.js.map
//# sourceMappingURL=SuggestionsList.js.map
