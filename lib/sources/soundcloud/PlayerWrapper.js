'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

var _PreviewPlayer = require('./PreviewPlayer');

var _PreviewPlayer2 = _interopRequireDefault(_PreviewPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayerWrapper = function PlayerWrapper(props) {
  if (props.mode === 'preview') {
    return _react2.default.createElement(_PreviewPlayer2.default, props);
  }
  return _react2.default.createElement(_Player2.default, props);
};

PlayerWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  mode: _propTypes2.default.string.isRequired
} : {};

exports.default = PlayerWrapper;
//# sourceMappingURL=PlayerWrapper.js.map
//# sourceMappingURL=PlayerWrapper.js.map
