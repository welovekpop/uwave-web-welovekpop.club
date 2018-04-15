import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { WAITLIST_USER } from '../../constants/DDItemTypes';
import isDraggingNearTopOfRow from '../../utils/isDraggingNearTopOfRow';
import ModRowBase from './ModRowBase';
var userTarget = {
  hover: function hover(props, monitor, component) {
    component.setState({
      insertAbove: isDraggingNearTopOfRow(monitor, component)
    });
  },
  drop: function drop(props, monitor, component) {
    var insertAfter = !isDraggingNearTopOfRow(monitor, component);
    var position = component.props.position;
    return {
      position: insertAfter ? position + 1 : position
    };
  }
};

var collect = function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};
/**
 * A Waitlist user row with drag/drop reordering support. This draws a drop
 * indicator around the main row.
 */


var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "WaitlistRow-drop-indicator"
});

var ModRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModRow, _React$Component);

  function ModRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      insertAbove: false
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ModRow.prototype;

  _proto.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = _objectWithoutProperties(_props, ["connectDropTarget", "isOver"]);

    var insertAbove = this.state.insertAbove;
    var dropIndicator = _ref;
    return connectDropTarget(_jsx("div", {}, void 0, isOver && insertAbove && dropIndicator, React.createElement(ModRowBase, props), isOver && !insertAbove && dropIndicator));
  };

  return ModRow;
}(React.Component);

ModRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
} : {};
export default DropTarget(WAITLIST_USER, userTarget, collect)(ModRow);
//# sourceMappingURL=ModRow.js.map
