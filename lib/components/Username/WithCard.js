'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _userCardable2.default)(), (0, _withProps2.default)(function (props) {
  return {
    onUsernameClick: function onUsernameClick(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}));

var UsernameWithCard = function UsernameWithCard(_ref) {
  var user = _ref.user,
      onUsernameClick = _ref.onUsernameClick;
  return (0, _jsx3.default)('button', {
    onClick: onUsernameClick
  }, void 0, (0, _jsx3.default)(_2.default, {
    user: user
  }));
};

UsernameWithCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  onUsernameClick: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(UsernameWithCard);
//# sourceMappingURL=WithCard.js.map
//# sourceMappingURL=WithCard.js.map
