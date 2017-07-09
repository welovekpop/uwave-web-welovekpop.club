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

var _injectMediaSources = require('../../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportSourceBlock = function ImportSourceBlock(_ref) {
  var getMediaSource = _ref.getMediaSource,
      sourceType = _ref.sourceType,
      title = _ref.title,
      children = _ref.children;
  return (0, _jsx3.default)('div', {
    className: 'ImportSourceBlock PlaylistImport-source'
  }, void 0, (0, _jsx3.default)('img', {
    className: 'ImportSourceBlock-image',
    alt: title,
    title: title,
    src: getMediaSource(sourceType).logo
  }), children);
};

ImportSourceBlock.propTypes = process.env.NODE_ENV !== "production" ? {
  getMediaSource: _propTypes2.default.func.isRequired,
  sourceType: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = (0, _injectMediaSources2.default)()(ImportSourceBlock);
//# sourceMappingURL=ImportSourceBlock.js.map
//# sourceMappingURL=ImportSourceBlock.js.map
