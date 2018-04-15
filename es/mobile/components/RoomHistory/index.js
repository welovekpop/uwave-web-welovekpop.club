import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import OverlayHeader from '../../../components/Overlay/Header';
import OverlayContent from '../../../components/Overlay/Content';
import HistoryList from './HistoryList';
var enhance = translate();

var RoomHistory = function RoomHistory(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog,
      props = _objectWithoutProperties(_ref, ["t", "className", "onCloseOverlay", "onOpenAddMediaMenu", "onOpenPreviewMediaDialog"]);

  return _jsx("div", {
    className: cx('RoomHistory', className)
  }, void 0, _jsx(OverlayHeader, {
    direction: "top",
    className: "AppRow AppRow--top",
    title: t('history.title'),
    onCloseOverlay: onCloseOverlay
  }), _jsx(OverlayContent, {
    className: "RoomHistory-body"
  }, void 0, React.createElement(HistoryList, _extends({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog
  }, props))));
};

RoomHistory.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  onCloseOverlay: PropTypes.func.isRequired,
  onOpenAddMediaMenu: PropTypes.func.isRequired,
  onOpenPreviewMediaDialog: PropTypes.func.isRequired
} : {};
export default enhance(RoomHistory);
//# sourceMappingURL=index.js.map
