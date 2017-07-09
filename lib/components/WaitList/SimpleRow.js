'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _userCardable = require('../../utils/userCardable');

var _userCardable2 = _interopRequireDefault(_userCardable);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../Username');

var _Username2 = _interopRequireDefault(_Username);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleRow = function SimpleRow(_ref) {
  var className = _ref.className,
      position = _ref.position,
      user = _ref.user,
      onOpenCard = _ref.onOpenCard;
  return (0, _jsx3.default)('button', {
    className: (0, _classnames2.default)('UserRow', 'WaitlistRow', 'UserRow--cardable', className),
    onClick: onOpenCard
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Position2.default, {
    position: position + 1
  }), (0, _jsx3.default)(_Avatar2.default, {
    className: 'UserRow-avatar',
    user: user
  }), (0, _jsx3.default)(_Username2.default, {
    className: 'UserRow-username',
    user: user
  })));
};

SimpleRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  position: _propTypes2.default.number.isRequired,
  user: _propTypes2.default.object.isRequired,
  onOpenCard: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _userCardable2.default)(), (0, _withProps2.default)(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}))(SimpleRow);
//# sourceMappingURL=SimpleRow.js.map
//# sourceMappingURL=SimpleRow.js.map
