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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteButton = function DeleteButton(_ref) {
  var onDelete = _ref.onDelete;
  return (0, _jsx3.default)('button', {
    className: 'ChatMessage-delete',
    onClick: onDelete
  }, void 0, 'Delete');
};

DeleteButton.propTypes = process.env.NODE_ENV !== "production" ? {
  onDelete: _propTypes2.default.func.isRequired
} : {};

exports.default = DeleteButton;
//# sourceMappingURL=DeleteButton.js.map
//# sourceMappingURL=DeleteButton.js.map
