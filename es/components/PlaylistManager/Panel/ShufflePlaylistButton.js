import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { translate } from 'react-i18next';
import IconButton from 'material-ui/IconButton';
import ShuffleIcon from 'material-ui/svg-icons/av/shuffle';
import Loader from '../../Loader';

var enhance = compose(withState('isLoading', 'setLoading', false), withHandlers({
  onClick: function onClick(props) {
    return function () {
      props.setLoading(true);
      props.onShuffle().then(function () {
        props.setLoading(false);
      }, function () {
        props.setLoading(false);
      });
    };
  }
}), translate());

var _ref2 = _jsx(Loader, {
  size: 'tiny'
});

var _ref3 = _jsx(ShuffleIcon, {
  color: '#555',
  hoverColor: '#fff'
});

var ShuffleButton = function ShuffleButton(_ref) {
  var t = _ref.t,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick;
  return _jsx(IconButton, {
    onClick: onClick,
    tooltip: t('playlists.shuffle'),
    tooltipPosition: 'top-center'
  }, void 0, isLoading ? _ref2 : _ref3);
};

ShuffleButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired // eslint-disable-line react/no-unused-prop-types
} : {};

export default enhance(ShuffleButton);
//# sourceMappingURL=ShufflePlaylistButton.js.map
