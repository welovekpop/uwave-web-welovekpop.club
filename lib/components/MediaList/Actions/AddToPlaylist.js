'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleAdd = function handleAdd(onAdd) {
  return function (event) {
    var pos = event.target.getBoundingClientRect();
    onAdd({
      x: pos.left,
      y: pos.top
    });
  };
};

var _ref2 = (0, _jsx3.default)(_add2.default, {
  color: '#fff'
});

var AddToPlaylist = function AddToPlaylist(_ref) {
  var onAdd = _ref.onAdd,
      props = (0, _objectWithoutProperties3.default)(_ref, ['onAdd']);

  return _react2.default.createElement(_Action2.default, (0, _extends3.default)({}, props, {
    onAction: handleAdd(onAdd)
  }), _ref2);
};

AddToPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  onAdd: _propTypes2.default.func.isRequired
} : {};

exports.default = AddToPlaylist;
//# sourceMappingURL=AddToPlaylist.js.map
//# sourceMappingURL=AddToPlaylist.js.map
