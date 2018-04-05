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

var PanelContainer = function PanelContainer(_ref) {
  var selected = _ref.selected,
      children = _ref.children;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('SidePanel-panel', selected && 'is-selected')
  }, void 0, children);
};

PanelContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  selected: _propTypes2.default.bool.isRequired
} : {};

exports.default = PanelContainer;
//# sourceMappingURL=PanelContainer.js.map
//# sourceMappingURL=PanelContainer.js.map
