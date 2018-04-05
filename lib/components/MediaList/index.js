'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _BaseMediaList = require('./BaseMediaList');

var _BaseMediaList2 = _interopRequireDefault(_BaseMediaList);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaList = (0, _withProps2.default)({
  listComponent: 'div',
  rowComponent: _Row2.default
})(_BaseMediaList2.default);

exports.default = MediaList;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
