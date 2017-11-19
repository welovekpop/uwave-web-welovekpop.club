'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _DDItemTypes = require('../../constants/DDItemTypes');

var _isDraggingNearTopOfRow = require('../../utils/isDraggingNearTopOfRow');

var _isDraggingNearTopOfRow2 = _interopRequireDefault(_isDraggingNearTopOfRow);

var _ModRowBase = require('./ModRowBase');

var _ModRowBase2 = _interopRequireDefault(_ModRowBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userTarget = {
  hover: function hover(props, monitor, component) {
    component.setState({
      insertAbove: (0, _isDraggingNearTopOfRow2.default)(monitor, component)
    });
  },
  drop: function drop(props, monitor, component) {
    var insertAfter = !(0, _isDraggingNearTopOfRow2.default)(monitor, component);
    var position = component.props.position;

    return { position: insertAfter ? position + 1 : position };
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

var _ref = (0, _jsx3.default)('div', {
  className: 'WaitlistRow-drop-indicator'
});

var ModRow = function (_React$Component) {
  (0, _inherits3.default)(ModRow, _React$Component);

  function ModRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      insertAbove: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ModRow.prototype.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        isOver = _props.isOver,
        props = (0, _objectWithoutProperties3.default)(_props, ['connectDropTarget', 'isOver']);

    var insertAbove = this.state.insertAbove;

    var dropIndicator = _ref;

    return connectDropTarget((0, _jsx3.default)('div', {}, void 0, isOver && insertAbove && dropIndicator, _react2.default.createElement(_ModRowBase2.default, props), isOver && !insertAbove && dropIndicator));
  };

  return ModRow;
}(_react2.default.Component);

ModRow.propTypes = process.env.NODE_ENV !== "production" ? {
  connectDropTarget: _propTypes2.default.func.isRequired,
  isOver: _propTypes2.default.bool.isRequired
} : {};

exports.default = (0, _reactDnd.DropTarget)(_DDItemTypes.WAITLIST_USER, userTarget, collect)(ModRow);
//# sourceMappingURL=ModRow.js.map
//# sourceMappingURL=ModRow.js.map
