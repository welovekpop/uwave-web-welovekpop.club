import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/es/Modal';
import UserCard from './UserCard';

var UserCardWrapper = function (_React$Component) {
  _inherits(UserCardWrapper, _React$Component);

  function UserCardWrapper() {
    var _temp, _this, _ret;

    _classCallCheck(this, UserCardWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      positionDiffX: 0,
      positionDiffY: 0
    }, _this.refContainer = function (container) {
      _this.container = container;
      if (_this.shouldFit && container) {
        _this.fitInsideWindow();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UserCardWrapper.prototype.componentDidMount = function componentDidMount() {
    this.shouldFit = true;
  };

  UserCardWrapper.prototype.componentDidUpdate = function componentDidUpdate() {
    this.shouldFit = true;
  };

  UserCardWrapper.prototype.fitInsideWindow = function fitInsideWindow() {
    if (!this.container) {
      return;
    }

    var card = this.container.firstChild;
    var rect = card.getBoundingClientRect();
    var offsetBottom = window.innerHeight - rect.bottom;
    if (offsetBottom < 0) {
      this.setState({
        positionDiffY: offsetBottom - 1
      });
    }
  };

  UserCardWrapper.prototype.render = function render() {
    var _props = this.props,
        onClose = _props.onClose,
        position = _props.position,
        props = _objectWithoutProperties(_props, ['onClose', 'position']);

    var _state = this.state,
        positionDiffX = _state.positionDiffX,
        positionDiffY = _state.positionDiffY;


    return _jsx(Modal, {
      open: true,
      BackdropProps: { invisible: true },
      onClose: onClose
    }, void 0, React.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          left: position.x + positionDiffX,
          top: position.y + positionDiffY
        },
        ref: this.refContainer
      },
      _jsx('div', {
        className: 'UserCardWrapper'
      }, void 0, React.createElement(UserCard, props))
    ));
  };

  return UserCardWrapper;
}(React.Component);

UserCardWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  onClose: PropTypes.func.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
} : {};


export default UserCardWrapper;
//# sourceMappingURL=index.js.map
