import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DownvoteIcon from 'material-ui/svg-icons/action/thumb-down';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import UpvoteIcon from 'material-ui/svg-icons/action/thumb-up';

var _ref2 = _jsx(UpvoteIcon, {
  className: 'UserRow-voteIcon',
  color: '#4BB64B'
});

var _ref3 = _jsx(DownvoteIcon, {
  className: 'UserRow-voteIcon',
  color: '#B64B4B'
});

var Votes = function Votes(_ref) {
  var muiTheme = _ref.muiTheme,
      upvote = _ref.upvote,
      downvote = _ref.downvote,
      favorite = _ref.favorite,
      props = _objectWithoutProperties(_ref, ['muiTheme', 'upvote', 'downvote', 'favorite']);

  return React.createElement(
    'div',
    props,
    favorite && _jsx(FavoriteIcon, {
      className: 'UserRow-voteIcon',
      color: muiTheme.palette.primary1Color
    }),
    upvote && _ref2,
    downvote && _ref3
  );
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  upvote: PropTypes.bool,
  downvote: PropTypes.bool,
  favorite: PropTypes.bool
} : {};

export default muiThemeable()(Votes);
//# sourceMappingURL=Votes.js.map
