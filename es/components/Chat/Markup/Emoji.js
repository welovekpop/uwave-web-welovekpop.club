import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import Tooltip from '../../Tooltip';

var tooltipStyle = {
  textIndent: 'initial'
};

var enhance = compose(withState('showTooltip', 'setShowTooltip', false), withProps(function (props) {
  return {
    onShowTooltip: function onShowTooltip() {
      props.setShowTooltip(true);
    },
    onHideTooltip: function onHideTooltip() {
      props.setShowTooltip(false);
    }
  };
}));

var shortcode = function shortcode(name) {
  return ':' + name + ':';
};
var url = function url(filename) {
  return '/assets/emoji/' + filename;
};

var Emoji = function Emoji(_ref) {
  var name = _ref.name,
      image = _ref.image,
      showTooltip = _ref.showTooltip,
      onShowTooltip = _ref.onShowTooltip,
      onHideTooltip = _ref.onHideTooltip;
  return _jsx('span', {
    onMouseEnter: onShowTooltip,
    onMouseLeave: onHideTooltip,
    className: 'Emoji',
    'data-emoji': name
  }, void 0, _jsx(Tooltip, {
    label: shortcode(name),
    verticalPosition: 'top',
    horizontalPosition: 'center',
    show: showTooltip,
    style: tooltipStyle
  }), _jsx('img', {
    className: 'Emoji-img',
    src: url(image),
    alt: shortcode(name)
  }));
};

Emoji.propTypes = process.env.NODE_ENV !== "production" ? {
  showTooltip: PropTypes.bool.isRequired,
  onShowTooltip: PropTypes.func.isRequired,
  onHideTooltip: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
} : {};

export default enhance(Emoji);
//# sourceMappingURL=Emoji.js.map
