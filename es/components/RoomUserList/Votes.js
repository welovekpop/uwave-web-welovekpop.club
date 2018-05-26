import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import DownvoteIcon from "@material-ui/icons/es/ThumbDown";
import FavoriteIcon from "@material-ui/icons/es/Favorite";
import UpvoteIcon from "@material-ui/icons/es/ThumbUp";

var _ref2 =
/*#__PURE__*/
_jsx(FavoriteIcon, {
  className: "UserRow-voteIcon UserRow-voteIcon--favorite"
});

var _ref3 =
/*#__PURE__*/
_jsx(UpvoteIcon, {
  className: "UserRow-voteIcon UserRow-voteIcon--upvote"
});

var _ref4 =
/*#__PURE__*/
_jsx(DownvoteIcon, {
  className: "UserRow-voteIcon UserRow-voteIcon--downvote"
});

var Votes = function Votes(_ref) {
  var upvote = _ref.upvote,
      downvote = _ref.downvote,
      favorite = _ref.favorite,
      props = _objectWithoutProperties(_ref, ["upvote", "downvote", "favorite"]);

  return React.createElement("div", props, favorite && _ref2, upvote && _ref3, downvote && _ref4);
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvote: PropTypes.bool,
  downvote: PropTypes.bool,
  favorite: PropTypes.bool
} : {};
export default Votes;
//# sourceMappingURL=Votes.js.map
