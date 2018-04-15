import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MuiList from "material-ui/es/List";
import List from 'react-list';
import RoomUserRow from './Row';
import GuestsRow from './GuestsRow';

var RoomUserList = function RoomUserList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      guests = _ref.guests;
  var showGuests = guests > 0; // The "and X guests" row is implemented somewhat hackily as an extra user
  // row. To render properly at the end of the list, it needs to be rendered as
  // an element of the list--so we tell react-list that we have an extra row
  // when th guests row is shown.

  var length = users.length + (showGuests ? 1 : 0);
  return _jsx("div", {
    className: cx('UserList', 'UserList--online', className)
  }, void 0, _jsx(List, {
    itemsRenderer: function itemsRenderer(children, _ref2) {
      return React.createElement(MuiList, {
        ref: function ref(list) {
          _ref2(list && ReactDOM.findDOMNode(list)); // eslint-disable-line react/no-find-dom-node

        }
      }, children);
    },
    itemRenderer: function itemRenderer(index, key) {
      var rowClass = cx('UserList-row', index % 2 === 0 && 'UserList-row--alternate'); // The very last row is the guests row

      if (index === users.length) {
        return _jsx(GuestsRow, {
          className: rowClass,
          guests: guests
        }, key);
      }

      return _jsx(RoomUserRow, {
        className: rowClass,
        user: users[index]
      }, key);
    },
    length: length,
    type: "uniform"
  }));
};

RoomUserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  guests: PropTypes.number.isRequired
} : {};
export default RoomUserList;
//# sourceMappingURL=index.js.map
