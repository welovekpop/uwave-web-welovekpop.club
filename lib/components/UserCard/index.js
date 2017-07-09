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

var _RenderToLayer = require('material-ui/internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _UserCard = require('./UserCard');

var _UserCard2 = _interopRequireDefault(_UserCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCardWrapper = function (_React$Component) {
  (0, _inherits3.default)(UserCardWrapper, _React$Component);

  function UserCardWrapper() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserCardWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      positionDiffX: 0,
      positionDiffY: 0
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  UserCardWrapper.prototype.componentDidMount = function componentDidMount() {
    this.fitInsideWindow();
  };

  UserCardWrapper.prototype.componentDidUpdate = function componentDidUpdate() {
    this.fitInsideWindow();
  };

  UserCardWrapper.prototype.fitInsideWindow = function fitInsideWindow() {
    var card = this.container.firstChild;
    var rect = card.getBoundingClientRect();
    var offsetBottom = window.innerHeight - rect.bottom;
    if (offsetBottom < 0) {
      this.setState({
        positionDiffY: offsetBottom
      });
    }
  };

  UserCardWrapper.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        onClose = _props.onClose,
        position = _props.position,
        props = (0, _objectWithoutProperties3.default)(_props, ['onClose', 'position']);

    var _state = this.state,
        positionDiffX = _state.positionDiffX,
        positionDiffY = _state.positionDiffY;

    return (0, _jsx3.default)(_RenderToLayer2.default, {
      open: true,
      componentClickAway: onClose,
      render: function render() {
        return _react2.default.createElement('div', {
          style: {
            position: 'absolute',
            left: position.x + positionDiffX,
            top: position.y + positionDiffY
          },
          ref: _this2.refContainer
        }, _react2.default.createElement(_UserCard2.default, props));
      }
    });
  };

  return UserCardWrapper;
}(_react2.default.Component);

UserCardWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  onClose: _propTypes2.default.func.isRequired,
  position: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }).isRequired
} : {};

exports.default = UserCardWrapper;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
