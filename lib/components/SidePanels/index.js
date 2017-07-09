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

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Chat = require('../Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _RoomUserList = require('../../containers/RoomUserList');

var _RoomUserList2 = _interopRequireDefault(_RoomUserList);

var _WaitList = require('../../containers/WaitList');

var _WaitList2 = _interopRequireDefault(_WaitList);

var _Tabs = require('../Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('../Tabs/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _PanelTemplate = require('./PanelTemplate');

var _PanelTemplate2 = _interopRequireDefault(_PanelTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentContainerStyle = {
  // This ensures that the `position:absolute`s on divs _inside_ container
  // elements align correctly.
  position: 'static'
};

var subHeaderStyle = {
  fontSize: '125%'
};

var getUsersLabel = function getUsersLabel(t, listenerCount) {
  return [t('users.title'), (0, _jsx3.default)('span', {
    style: subHeaderStyle
  }, 'sub', listenerCount)];
};

var getWaitlistLabel = function getWaitlistLabel(t, size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + ' / ' + size : size;

    return [t('waitlist.title'), (0, _jsx3.default)('span', {
      style: subHeaderStyle
    }, 'sub', posText)];
  }
  return t('waitlist.title');
};

var _ref2 = (0, _jsx3.default)(_Chat2.default, {});

var _ref3 = (0, _jsx3.default)(_RoomUserList2.default, {});

var _ref4 = (0, _jsx3.default)(_WaitList2.default, {});

var SidePanels = function SidePanels(_ref) {
  var t = _ref.t,
      selected = _ref.selected,
      listenerCount = _ref.listenerCount,
      waitlistSize = _ref.waitlistSize,
      waitlistPosition = _ref.waitlistPosition,
      onChange = _ref.onChange;
  return (0, _jsx3.default)(_Tabs2.default, {
    value: selected,
    onChange: onChange,
    contentContainerStyle: contentContainerStyle,
    tabTemplate: _PanelTemplate2.default
  }, void 0, (0, _jsx3.default)(_Tab2.default, {
    className: 'SidePanel-tab',
    label: t('chat.title'),
    value: 'chat'
  }, void 0, _ref2), (0, _jsx3.default)(_Tab2.default, {
    className: 'SidePanel-tab',
    label: getUsersLabel(t, listenerCount),
    value: 'room'
  }, void 0, _ref3), (0, _jsx3.default)(_Tab2.default, {
    className: 'SidePanel-tab',
    label: getWaitlistLabel(t, waitlistSize, waitlistPosition),
    value: 'waitlist'
  }, void 0, _ref4));
};

SidePanels.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.string.isRequired,
  listenerCount: _propTypes2.default.number.isRequired,
  waitlistSize: _propTypes2.default.number.isRequired,
  waitlistPosition: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default)(SidePanels);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
