import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import Chat from '../Chat';
import RoomUserList from '../../containers/RoomUserList';
import WaitList from '../../containers/WaitList';

import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';
import PanelTemplate from './PanelTemplate';

var contentContainerStyle = {
  // This ensures that the `position:absolute`s on divs _inside_ container
  // elements align correctly.
  position: 'static'
};

var subHeaderStyle = {
  fontSize: '125%'
};

var getUsersLabel = function getUsersLabel(t, listenerCount) {
  return [t('users.title'), _jsx('span', {
    style: subHeaderStyle
  }, 'sub', listenerCount)];
};

var getWaitlistLabel = function getWaitlistLabel(t, size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + ' / ' + size : size;

    return [t('waitlist.title'), _jsx('span', {
      style: subHeaderStyle
    }, 'sub', posText)];
  }
  return t('waitlist.title');
};

var _ref2 = _jsx(Chat, {});

var _ref3 = _jsx(RoomUserList, {});

var _ref4 = _jsx(WaitList, {});

var SidePanels = function SidePanels(_ref) {
  var t = _ref.t,
      selected = _ref.selected,
      listenerCount = _ref.listenerCount,
      waitlistSize = _ref.waitlistSize,
      waitlistPosition = _ref.waitlistPosition,
      onChange = _ref.onChange;
  return _jsx(Tabs, {
    value: selected,
    onChange: onChange,
    contentContainerStyle: contentContainerStyle,
    tabTemplate: PanelTemplate
  }, void 0, _jsx(Tab, {
    className: 'SidePanel-tab',
    label: t('chat.title'),
    value: 'chat'
  }, void 0, _ref2), _jsx(Tab, {
    className: 'SidePanel-tab',
    label: getUsersLabel(t, listenerCount),
    value: 'room'
  }, void 0, _ref3), _jsx(Tab, {
    className: 'SidePanel-tab',
    label: getWaitlistLabel(t, waitlistSize, waitlistPosition),
    value: 'waitlist'
  }, void 0, _ref4));
};

SidePanels.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  listenerCount: PropTypes.number.isRequired,
  waitlistSize: PropTypes.number.isRequired,
  waitlistPosition: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
} : {};

export default compose(translate(), pure)(SidePanels);
//# sourceMappingURL=index.js.map
