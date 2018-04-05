'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _List = require('material-ui/List');

var _userCardable = require('../../utils/userCardable');

var _userCardable2 = _interopRequireDefault(_userCardable);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../Username');

var _Username2 = _interopRequireDefault(_Username);

var _Votes = require('./Votes');

var _Votes2 = _interopRequireDefault(_Votes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _userCardable2.default)(), (0, _withProps2.default)(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}));

var RoomUserRow = function RoomUserRow(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onOpenCard = _ref.onOpenCard;
  return (0, _jsx3.default)(_List.ListItem, {
    button: true,
    className: (0, _classnames2.default)('UserRow', 'UserRow--cardable', className),
    onClick: onOpenCard
  }, void 0, (0, _jsx3.default)(_List.ListItemAvatar, {}, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'UserRow-avatar',
    user: user
  })), (0, _jsx3.default)(_List.ListItemText, {}, void 0, (0, _jsx3.default)(_Username2.default, {
    className: 'UserRow-username',
    user: user
  })), _react2.default.createElement(_Votes2.default, (0, _extends3.default)({ className: 'UserRow-votes' }, user.votes)));
};

RoomUserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired,
  onOpenCard: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(RoomUserRow);
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
