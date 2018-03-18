import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import parse from 'u-wave-parse-chat-markup';
import compile from '../../../components/Chat/Markup/compile';

import './index.css';

var enhance = compose(withState('newMotd', 'setMotd', function (props) {
  return props.motd;
}), withProps(function (props) {
  return {
    parsedMotd: compile(parse(props.newMotd), props.compileOptions)
  };
}), withHandlers({
  onChange: function onChange(props) {
    return function (event) {
      props.setMotd(event.target.value);
    };
  },
  onSubmit: function onSubmit(props) {
    return function () {
      props.onSetMotd(props.newMotd);
    };
  }
}), muiThemeable());

function autoFocus(el) {
  if (el) el.focus();
}

var _ref2 = _jsx(EditIcon, {
  color: '#fff'
});

var Motd = function Motd(_ref) {
  var muiTheme = _ref.muiTheme,
      canChangeMotd = _ref.canChangeMotd,
      newMotd = _ref.newMotd,
      parsedMotd = _ref.parsedMotd,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  return _jsx(Card, {
    className: 'AdminMotd'
  }, void 0, _jsx(CardHeader, {
    title: 'Message of the Day',
    showExpandableButton: canChangeMotd,
    closeIcon: _ref2
  }), _jsx(CardText, {}, void 0, parsedMotd), _jsx(CardText, {
    expandable: true,
    style: { paddingTop: 0 }
  }, void 0, React.createElement('textarea', {
    className: 'AdminMotd-field',
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), _jsx(CardActions, {
    expandable: true
  }, void 0, _jsx(FlatButton, {
    onClick: onSubmit,
    label: 'Save',
    backgroundColor: muiTheme.palette.primary1Color,
    hoverColor: muiTheme.palette.primary2Color,
    rippleColor: muiTheme.palette.primary3Color
  })));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  canChangeMotd: PropTypes.bool,
  newMotd: PropTypes.string.isRequired,
  parsedMotd: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
} : {};

Motd.defaultProps = {
  canChangeMotd: false
};

export default enhance(Motd);
//# sourceMappingURL=index.js.map
