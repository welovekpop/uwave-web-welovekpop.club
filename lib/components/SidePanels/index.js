"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Chat = _interopRequireDefault(require("../Chat"));

var _RoomUserList = _interopRequireDefault(require("../../containers/RoomUserList"));

var _WaitList = _interopRequireDefault(require("../../containers/WaitList"));

var _PanelContainer = _interopRequireDefault(require("./PanelContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _withState.default)('selected', 'setTab', 0), _pure.default);
var subHeaderStyle = {
  fontSize: '125%'
};
var tabClasses = {
  root: 'SidePanel-tab',
  label: 'SidePanel-tabLabel'
};

var getUsersLabel = function getUsersLabel(t, listenerCount) {
  return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, t('users.title'), (0, _jsx2.default)("span", {
    style: subHeaderStyle
  }, "sub", listenerCount));
};

var getWaitlistLabel = function getWaitlistLabel(t, size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + " / " + size : size;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, t('waitlist.title'), (0, _jsx2.default)("span", {
      style: subHeaderStyle
    }, "sub", posText));
  }

  return t('waitlist.title');
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Chat.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_RoomUserList.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_WaitList.default, {});

var SidePanels = function SidePanels(_ref) {
  var t = _ref.t,
      selected = _ref.selected,
      listenerCount = _ref.listenerCount,
      waitlistSize = _ref.waitlistSize,
      waitlistPosition = _ref.waitlistPosition,
      setTab = _ref.setTab;
  return (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)(_Tabs.default, {
    value: selected,
    onChange: function onChange(event, value) {
      return setTab(value);
    },
    fullWidth: true,
    classes: {
      root: 'SidePanel-tabs',
      indicator: 'SidePanel-indicator'
    }
  }, void 0, (0, _jsx2.default)(_Tab.default, {
    classes: tabClasses,
    label: t('chat.title')
  }), (0, _jsx2.default)(_Tab.default, {
    classes: tabClasses,
    label: getUsersLabel(t, listenerCount)
  }), (0, _jsx2.default)(_Tab.default, {
    classes: tabClasses,
    label: getWaitlistLabel(t, waitlistSize, waitlistPosition)
  })), (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)(_PanelContainer.default, {
    selected: selected === 0
  }, void 0, _ref2), (0, _jsx2.default)(_PanelContainer.default, {
    selected: selected === 1
  }, void 0, _ref3), (0, _jsx2.default)(_PanelContainer.default, {
    selected: selected === 2
  }, void 0, _ref4)));
};

SidePanels.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  listenerCount: _propTypes.default.number.isRequired,
  waitlistSize: _propTypes.default.number.isRequired,
  waitlistPosition: _propTypes.default.number.isRequired,
  selected: _propTypes.default.number.isRequired,
  setTab: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SidePanels);

exports.default = _default;
//# sourceMappingURL=index.js.map
