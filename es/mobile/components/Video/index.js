import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Player from '../../../components/Player';
import VoteButtons from './VoteButtons';

var Video =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Video, _React$Component);

  function Video() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      showVoteButtons: false
    }, _this.handleClick = function () {
      _this.setState(function (s) {
        return {
          showVoteButtons: !s.showVoteButtons
        };
      });
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Video.prototype;

  _proto.render = function render() {
    var _props = this.props,
        voteStats = _props.voteStats,
        onUpvote = _props.onUpvote,
        onDownvote = _props.onDownvote,
        onFavorite = _props.onFavorite,
        props = _objectWithoutProperties(_props, ["voteStats", "onUpvote", "onDownvote", "onFavorite"]);

    var showVoteButtons = this.state.showVoteButtons;
    return _jsx("div", {
      className: "Video"
    }, void 0, _jsx("div", {
      className: "Video-player"
    }, void 0, React.createElement(Player, _extends({}, props, {
      size: "large"
    }))), _jsx("button", {
      className: "Video-buttonTrigger",
      onClick: this.handleClick,
      "aria-label": "Show vote buttons"
    }), showVoteButtons && _jsx("div", {
      className: "Video-buttons"
    }, void 0, React.createElement(VoteButtons, _extends({}, voteStats, {
      onUpvote: onUpvote,
      onDownvote: onDownvote,
      onFavorite: onFavorite
    }))));
  };

  return Video;
}(React.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  voteStats: PropTypes.shape({
    isUpvote: PropTypes.bool,
    isFavorite: PropTypes.bool,
    isDownvote: PropTypes.bool
  }),
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired
} : {};
export default Video;
//# sourceMappingURL=index.js.map
