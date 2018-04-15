"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _DDItemTypes = require("../../constants/DDItemTypes");

var _isDraggingNearTopOfRow = _interopRequireDefault(require("../../utils/isDraggingNearTopOfRow"));

var _ModRowBase = _interopRequireDefault(require("./ModRowBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userTarget = {
  hover: function hover(props, monitor, component) {
    component.setState({
      insertAbove: (0, _isDraggingNearTopOfRow.default)(monitor, component)
    });
  },
  drop: function drop(props, monitor, component) {
    var insertAfter = !(0, _isDraggingNearTopOfRow.default)(monitor, component);
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
(0, _jsx2.default)("div", {
  className: "WaitlistRow-drop-indicator"
});

var ModRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ModRow, _React$Component);

  function ModRow() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      insertAbove: false
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ModRow.prototype;

  _proto.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = (0, _objectWithoutProperties2.default)(_props, ["connectDropTarget", "isOver"]);
    var insertAbove = this.state.insertAbove;
    var dropIndicator = _ref;
    return connectDropTarget((0, _jsx2.default)("div", {}, void 0, isOver && insertAbove && dropIndicator, _react.default.createElement(_ModRowBase.default, props), isOver && !insertAbove && dropIndicator));
  };

  return ModRow;
}(_react.default.Component);

ModRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: _propTypes.default.func.isRequired,
  isOver: _propTypes.default.bool.isRequired
} : {};

var _default = (0, _reactDnd.DropTarget)(_DDItemTypes.WAITLIST_USER, userTarget, collect)(ModRow); //# sourceMappingURL=ModRow.js.map


exports.default = _default;
//# sourceMappingURL=ModRow.js.map
