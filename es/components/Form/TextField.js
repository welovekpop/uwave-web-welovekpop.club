import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField() {
    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.refInput = function (input) {
      _this.input = input;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TextField.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        icon = _props.icon,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['type', 'icon', 'className']);

    return _jsx('div', {
      className: cx('TextField', className)
    }, void 0, React.createElement('input', _extends({
      ref: this.refInput,
      className: 'TextField-input',
      type: type
    }, props)), _jsx('div', {
      className: 'TextField-icon'
    }, void 0, icon));
  };

  _createClass(TextField, [{
    key: 'value',
    get: function get() {
      return this.input.value;
    }
  }]);

  return TextField;
}(React.Component);

TextField.defaultProps = {
  type: 'text'
};
export default TextField;
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element
} : {};
//# sourceMappingURL=TextField.js.map
