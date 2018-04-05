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

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _Tabs = require('material-ui/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Chat = require('../Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _RoomUserList = require('../../containers/RoomUserList');

var _RoomUserList2 = _interopRequireDefault(_RoomUserList);

var _WaitList = require('../../containers/WaitList');

var _WaitList2 = _interopRequireDefault(_WaitList);

var _PanelContainer = require('./PanelContainer');

var _PanelContainer2 = _interopRequireDefault(_PanelContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _withState2.default)('selected', 'setTab', 0), _pure2.default);

var subHeaderStyle = {
  fontSize: '125%'
};

var tabClasses = {
  root: 'SidePanel-tab',
  label: 'SidePanel-tabLabel'
};

var getUsersLabel = function getUsersLabel(t, listenerCount) {
  return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, t('users.title'), (0, _jsx3.default)('span', {
    style: subHeaderStyle
  }, 'sub', listenerCount));
};

var getWaitlistLabel = function getWaitlistLabel(t, size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + ' / ' + size : size;

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, t('waitlist.title'), (0, _jsx3.default)('span', {
      style: subHeaderStyle
    }, 'sub', posText));
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
      setTab = _ref.setTab;
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Tabs2.default, {
    value: selected,
    onChange: function onChange(event, value) {
      return setTab(value);
    },
    fullWidth: true,
    classes: {
      root: 'SidePanel-tabs',
      indicator: 'SidePanel-indicator'
    }
  }, void 0, (0, _jsx3.default)(_Tabs.Tab, {
    classes: tabClasses,
    label: t('chat.title')
  }), (0, _jsx3.default)(_Tabs.Tab, {
    classes: tabClasses,
    label: getUsersLabel(t, listenerCount)
  }), (0, _jsx3.default)(_Tabs.Tab, {
    classes: tabClasses,
    label: getWaitlistLabel(t, waitlistSize, waitlistPosition)
  })), (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_PanelContainer2.default, {
    selected: selected === 0
  }, void 0, _ref2), (0, _jsx3.default)(_PanelContainer2.default, {
    selected: selected === 1
  }, void 0, _ref3), (0, _jsx3.default)(_PanelContainer2.default, {
    selected: selected === 2
  }, void 0, _ref4)));
};

SidePanels.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  listenerCount: _propTypes2.default.number.isRequired,
  waitlistSize: _propTypes2.default.number.isRequired,
  waitlistPosition: _propTypes2.default.number.isRequired,
  selected: _propTypes2.default.number.isRequired,
  setTab: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SidePanels);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
