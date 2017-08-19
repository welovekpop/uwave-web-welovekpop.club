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

var _SearchBar = require('../../SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _SourcePicker = require('./SourcePicker');

var _SourcePicker2 = _interopRequireDefault(_SourcePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBar = function SearchBar(_ref) {
  var className = _ref.className,
      source = _ref.source,
      onSubmit = _ref.onSubmit,
      onSourceChange = _ref.onSourceChange;
  return (0, _jsx3.default)(_SearchBar2.default, {
    className: className,
    onSubmit: onSubmit
  }, void 0, (0, _jsx3.default)(_SourcePicker2.default, {
    className: 'SearchBar-source',
    selected: source,
    onChange: onSourceChange
  }));
};

SearchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  source: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onSourceChange: _propTypes2.default.func.isRequired
} : {};

exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map
//# sourceMappingURL=SearchBar.js.map
