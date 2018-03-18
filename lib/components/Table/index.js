'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = exports.TableRow = exports.TableHeader = exports.TableBody = exports.TableHeaderColumn = exports.Table = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _Table = require('material-ui/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = exports.Table = (0, _withProps2.default)(function (props) {
  return {
    style: (0, _extends3.default)({
      background: 'transparent'
    }, props.style)
  };
})(_Table.Table);

var TableHeaderColumn = exports.TableHeaderColumn = (0, _withProps2.default)(function (props) {
  return {
    style: (0, _extends3.default)({
      fontWeight: 'bold'
    }, props.style)
  };
})(_Table.TableHeaderColumn);

exports.TableBody = _Table.TableBody;
exports.TableHeader = _Table.TableHeader;
exports.TableRow = _Table.TableRow;
exports.TableCell = _Table.TableRowColumn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
