'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp2;

var TextField = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(TextField, _React$Component);

  function TextField() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.refInput = function (input) {
      _this.input = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TextField.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        icon = _props.icon,
        className = _props.className,
        props = (0, _objectWithoutProperties3.default)(_props, ['type', 'icon', 'className']);

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('TextField', className)
    }, void 0, _react2.default.createElement('input', (0, _extends3.default)({
      ref: this.refInput,
      className: 'TextField-input',
      type: type
    }, props)), (0, _jsx3.default)('div', {
      className: 'TextField-icon'
    }, void 0, icon));
  };

  (0, _createClass3.default)(TextField, [{
    key: 'value',
    get: function get() {
      return this.input.value;
    }
  }]);

  return TextField;
}(_react2.default.Component), _class.defaultProps = {
  type: 'text'
}, _temp2);
exports.default = TextField;

TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  type: _propTypes2.default.string,
  icon: _propTypes2.default.element
} : {};
//# sourceMappingURL=TextField.js.map
//# sourceMappingURL=TextField.js.map
