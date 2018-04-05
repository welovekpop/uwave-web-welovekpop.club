import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tooltip from 'material-ui/es/Tooltip';
import IconButton from 'material-ui/es/IconButton';
import CloseIcon from 'material-ui-icons/Close';

var enhance = translate();

var _ref2 = _jsx(CloseIcon, {});

var ImportPanelHeader = function ImportPanelHeader(_ref) {
  var t = _ref.t,
      className = _ref.className,
      children = _ref.children,
      onClosePanel = _ref.onClosePanel;
  return _jsx('div', {
    className: cx('ImportPanelHeader', className)
  }, void 0, _jsx('div', {
    className: 'ImportPanelHeader-content'
  }, void 0, children), _jsx(Tooltip, {
    title: t('close'),
    placement: 'top'
  }, void 0, _jsx(IconButton, {
    onClick: onClosePanel
  }, void 0, _ref2)));
};

ImportPanelHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
  onClosePanel: PropTypes.func.isRequired
} : {};

export default enhance(ImportPanelHeader);
//# sourceMappingURL=ImportPanelHeader.js.map
