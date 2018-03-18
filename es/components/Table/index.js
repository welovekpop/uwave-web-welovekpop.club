import _extends from 'babel-runtime/helpers/extends';
import withProps from 'recompose/withProps';
import { Table as MuiTable, TableBody, TableHeader, TableHeaderColumn as MuiTableHeaderColumn, TableRow, TableRowColumn as TableCell } from 'material-ui/Table';

export var Table = withProps(function (props) {
  return {
    style: _extends({
      background: 'transparent'
    }, props.style)
  };
})(MuiTable);

export var TableHeaderColumn = withProps(function (props) {
  return {
    style: _extends({
      fontWeight: 'bold'
    }, props.style)
  };
})(MuiTableHeaderColumn);

export { TableBody, TableHeader, TableRow, TableCell };
//# sourceMappingURL=index.js.map
