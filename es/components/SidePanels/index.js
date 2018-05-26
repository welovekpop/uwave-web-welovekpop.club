import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withState from 'recompose/withState';
import Tabs from "@material-ui/core/es/Tabs";
import Tab from "@material-ui/core/es/Tab";
import Chat from '../Chat';
import RoomUserList from '../../containers/RoomUserList';
import WaitList from '../../containers/WaitList';
import PanelContainer from './PanelContainer';
var enhance = compose(translate(), withState('selected', 'setTab', 0), pure);
var subHeaderStyle = {
  fontSize: '125%'
};
var tabClasses = {
  root: 'SidePanel-tab',
  label: 'SidePanel-tabLabel'
};

var getUsersLabel = function getUsersLabel(t, listenerCount) {
  return _jsx(React.Fragment, {}, void 0, t('users.title'), _jsx("span", {
    style: subHeaderStyle
  }, "sub", listenerCount));
};

var getWaitlistLabel = function getWaitlistLabel(t, size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + " / " + size : size;
    return _jsx(React.Fragment, {}, void 0, t('waitlist.title'), _jsx("span", {
      style: subHeaderStyle
    }, "sub", posText));
  }

  return t('waitlist.title');
};

var _ref2 =
/*#__PURE__*/
_jsx(Chat, {});

var _ref3 =
/*#__PURE__*/
_jsx(RoomUserList, {});

var _ref4 =
/*#__PURE__*/
_jsx(WaitList, {});

var SidePanels = function SidePanels(_ref) {
  var t = _ref.t,
      selected = _ref.selected,
      listenerCount = _ref.listenerCount,
      waitlistSize = _ref.waitlistSize,
      waitlistPosition = _ref.waitlistPosition,
      setTab = _ref.setTab;
  return _jsx("div", {}, void 0, _jsx(Tabs, {
    value: selected,
    onChange: function onChange(event, value) {
      return setTab(value);
    },
    fullWidth: true,
    classes: {
      root: 'SidePanel-tabs',
      indicator: 'SidePanel-indicator'
    }
  }, void 0, _jsx(Tab, {
    classes: tabClasses,
    label: t('chat.title')
  }), _jsx(Tab, {
    classes: tabClasses,
    label: getUsersLabel(t, listenerCount)
  }), _jsx(Tab, {
    classes: tabClasses,
    label: getWaitlistLabel(t, waitlistSize, waitlistPosition)
  })), _jsx("div", {}, void 0, _jsx(PanelContainer, {
    selected: selected === 0
  }, void 0, _ref2), _jsx(PanelContainer, {
    selected: selected === 1
  }, void 0, _ref3), _jsx(PanelContainer, {
    selected: selected === 2
  }, void 0, _ref4)));
};

SidePanels.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  listenerCount: PropTypes.number.isRequired,
  waitlistSize: PropTypes.number.isRequired,
  waitlistPosition: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired
} : {};
export default enhance(SidePanels);
//# sourceMappingURL=index.js.map
