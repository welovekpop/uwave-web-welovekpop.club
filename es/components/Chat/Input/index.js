import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import sortBy from 'lodash/sortBy';
import uniqBy from 'lodash/uniqBy';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import AutoComplete, { Completion } from 'react-abstract-autocomplete';
import SuggestionsList from './SuggestionsList';
import EmojiSuggestion from './EmojiSuggestion';
import GroupSuggestion from './GroupSuggestion';
import UserSuggestion from './UserSuggestion';

var renderSuggestions = function renderSuggestions(children) {
  return _jsx(SuggestionsList, {}, void 0, children);
}; // User suggestions:


var getUserCompletions = function getUserCompletions(value, _ref) {
  var trigger = _ref.trigger,
      completions = _ref.completions;
  var compare = value.substr(trigger.length).toLowerCase();
  return completions.filter(function (user) {
    return user.username.substr(0, compare.length).toLowerCase() === compare;
  });
};

var getUserText = function getUserText(user, _ref2) {
  var trigger = _ref2.trigger;
  return "" + trigger + user.username + " ";
};

var renderUser = function renderUser(props) {
  return React.createElement(UserSuggestion, props);
}; // Group suggestions:


var renderGroup = function renderGroup(props) {
  return React.createElement(GroupSuggestion, props);
}; // Emoji suggestions:


var getEmojiCompletions = function getEmojiCompletions(value, _ref3) {
  var trigger = _ref3.trigger,
      completions = _ref3.completions;
  var compare = value.substr(trigger.length).toLowerCase();
  var results = completions.filter(function (emoji) {
    return emoji.shortcode.substr(0, compare.length).toLowerCase() === compare;
  });
  return sortBy(uniqBy(results, function (emoji) {
    return emoji.image;
  }), function (emoji) {
    return emoji.shortcode.length;
  });
};

var getEmojiText = function getEmojiText(value) {
  return ":" + value.shortcode + ": ";
};

var renderEmoji = function renderEmoji(props) {
  return React.createElement(EmojiSuggestion, props);
};

var enhance = translate();

var ChatInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ChatInput, _React$Component);

  function ChatInput() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      focused: false,
      value: ''
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleKeyDown = function (e) {
      e.stopPropagation();

      if (e.key === 'Enter') {
        var value = e.target.value.trim();

        if (value.length > 0) {
          _this.props.onSend(value);
        }

        _this.clear();
      }

      if (e.key === 'PageUp') {
        e.preventDefault();

        _this.props.onScroll(-1);
      }

      if (e.key === 'PageDown') {
        e.preventDefault();

        _this.props.onScroll(1);
      }

      if (e.key === 'End' && e.ctrlKey) {
        e.preventDefault();

        _this.props.onScroll('end');
      }

      if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();

        _this.props.onScroll('start');
      }
    }, _this.handleUpdate = function (newValue) {
      _this.setState({
        value: newValue
      });
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ChatInput.prototype;

  _proto.clear = function clear() {
    this.setState({
      value: ''
    });
  };

  _proto.render = function render() {
    var _state = this.state,
        focused = _state.focused,
        value = _state.value;
    var _props = this.props,
        t = _props.t,
        mentionableUsers = _props.mentionableUsers,
        mentionableGroups = _props.mentionableGroups,
        availableEmoji = _props.availableEmoji;
    var focusClass = focused ? 'is-focused' : '';
    return _jsx("div", {
      className: cx('ChatInput', focusClass)
    }, void 0, _jsx(AutoComplete, {
      inputProps: {
        type: 'text',
        className: cx('ChatInput-input', focusClass),
        placeholder: focused ? '' : t('chat.placeholder'),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown
      },
      onUpdate: this.handleUpdate,
      value: value,
      renderSuggestions: renderSuggestions,
      limit: 6
    }, void 0, _jsx(Completion, {
      trigger: "@",
      minLength: 2,
      completions: mentionableUsers,
      getCompletions: getUserCompletions,
      getText: getUserText,
      renderSuggestion: renderUser
    }), _jsx(Completion, {
      trigger: "@",
      minLength: 2,
      completions: mentionableGroups,
      renderSuggestion: renderGroup
    }), _jsx(Completion, {
      trigger: ":",
      completions: availableEmoji,
      getCompletions: getEmojiCompletions,
      getText: getEmojiText,
      renderSuggestion: renderEmoji
    })));
  };

  return ChatInput;
}(React.Component);

ChatInput.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  mentionableUsers: PropTypes.array.isRequired,
  mentionableGroups: PropTypes.array.isRequired,
  availableEmoji: PropTypes.array.isRequired
} : {};
export default enhance(ChatInput);
//# sourceMappingURL=index.js.map
