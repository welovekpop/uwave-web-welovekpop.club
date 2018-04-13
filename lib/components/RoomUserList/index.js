"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("material-ui/List"));

var _reactList = _interopRequireDefault(require("react-list"));

var _Row = _interopRequireDefault(require("./Row"));

var _GuestsRow = _interopRequireDefault(require("./GuestsRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomUserList = function RoomUserList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      guests = _ref.guests;
  var showGuests = guests > 0; // The "and X guests" row is implemented somewhat hackily as an extra user
  // row. To render properly at the end of the list, it needs to be rendered as
  // an element of the list--so we tell react-list that we have an extra row
  // when th guests row is shown.

  var length = users.length + (showGuests ? 1 : 0);
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('UserList', 'UserList--online', className)
  }, void 0, (0, _jsx2.default)(_reactList.default, {
    itemsRenderer: function itemsRenderer(children, _ref2) {
      return _react.default.createElement(_List.default, {
        ref: function ref(list) {
          _ref2(list && _reactDom.default.findDOMNode(list)); // eslint-disable-line react/no-find-dom-node

        }
      }, children);
    },
    itemRenderer: function itemRenderer(index, key) {
      var rowClass = (0, _classnames.default)('UserList-row', index % 2 === 0 && 'UserList-row--alternate'); // The very last row is the guests row

      if (index === users.length) {
        return (0, _jsx2.default)(_GuestsRow.default, {
          className: rowClass,
          guests: guests
        }, key);
      }

      return (0, _jsx2.default)(_Row.default, {
        className: rowClass,
        user: users[index]
      }, key);
    },
    length: length,
    type: "uniform"
  }));
};

RoomUserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  users: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  guests: _propTypes.default.number.isRequired
} : {};
var _default = RoomUserList; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
