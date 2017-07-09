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

var _TabTemplate = require('../Tabs/TabTemplate');

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelTemplate = function PanelTemplate(_ref) {
  var selected = _ref.selected,
      children = _ref.children;
  return (0, _jsx3.default)(_TabTemplate2.default, {
    selected: selected,
    className: 'SidePanel-panel'
  }, void 0, children);
};

PanelTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  selected: _propTypes2.default.bool.isRequired
} : {};

exports.default = PanelTemplate;
//# sourceMappingURL=PanelTemplate.js.map
//# sourceMappingURL=PanelTemplate.js.map
