'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _userCardable = require('../../../utils/userCardable');

var _userCardable2 = _interopRequireDefault(_userCardable);

var _Avatar = require('../../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../../Username');

var _Username2 = _interopRequireDefault(_Username);

var _MessageTimestamp = require('../MessageTimestamp');

var _MessageTimestamp2 = _interopRequireDefault(_MessageTimestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default, (0, _userCardable2.default)(), (0, _withHandlers2.default)({
  onClick: function onClick(props) {
    return function (event) {
      event.preventDefault();
      props.openUserCard(props.user);
    };
  }
}));

var UserNotificationMessage = function UserNotificationMessage(_ref) {
  var className = _ref.className,
      user = _ref.user,
      timestamp = _ref.timestamp,
      onClick = _ref.onClick,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'user', 'timestamp', 'onClick']);

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('ChatMessage', 'ChatMessage--userNotification', className)
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'ChatMessage-avatar',
    user: user
  }), (0, _jsx3.default)('div', {
    className: 'ChatMessage-content'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessage-hover'
  }, void 0, (0, _jsx3.default)(_MessageTimestamp2.default, {
    date: new Date(timestamp)
  })), _react2.default.createElement(_reactI18next.Interpolate, (0, _extends3.default)({
    username: (0, _jsx3.default)('button', {
      className: 'ChatMessage-username ChatMessage-cardable',
      onClick: onClick
    }, void 0, (0, _jsx3.default)(_Username2.default, {
      user: user
    }))
  }, props))));
};

UserNotificationMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string.isRequired,
  user: _propTypes2.default.object.isRequired,
  timestamp: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(UserNotificationMessage);
//# sourceMappingURL=UserNotificationMessage.js.map
//# sourceMappingURL=UserNotificationMessage.js.map
