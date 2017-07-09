import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _jsx from 'babel-runtime/helpers/jsx';

var _dec, _class;

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
};

// User suggestions:
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
  return '' + trigger + user.username + ' ';
};
var renderUser = function renderUser(props) {
  return React.createElement(UserSuggestion, props);
};

// Group suggestions:
var renderGroup = function renderGroup(props) {
  return React.createElement(GroupSuggestion, props);
};

// Emoji suggestions:
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
  return ':' + value.shortcode + ': ';
};
var renderEmoji = function renderEmoji(props) {
  return React.createElement(EmojiSuggestion, props);
};

var Input = (_dec = translate(), _dec(_class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      focused: false,
      value: ''
    }, _this.handleFocus = function () {
      _this.setState({ focused: true });
    }, _this.handleBlur = function () {
      _this.setState({ focused: false });
    }, _this.handleKeyDown = function (e) {
      e.stopPropagation();
      if (e.key === 'Enter') {
        var value = e.target.value.trim();
        if (value.length > 0) {
          _this.props.onSend(value);
        }
        _this.clear();
      }
    }, _this.handleUpdate = function (newValue) {
      _this.setState({ value: newValue });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Input.prototype.clear = function clear() {
    this.setState({ value: '' });
  };

  Input.prototype.render = function render() {
    var _state = this.state,
        focused = _state.focused,
        value = _state.value;
    var _props = this.props,
        t = _props.t,
        mentionableUsers = _props.mentionableUsers,
        mentionableGroups = _props.mentionableGroups,
        availableEmoji = _props.availableEmoji;

    var focusClass = focused ? 'is-focused' : '';
    return _jsx('div', {
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
      trigger: '@',
      minLength: 2,
      completions: mentionableUsers,
      getCompletions: getUserCompletions,
      getText: getUserText,
      renderSuggestion: renderUser
    }), _jsx(Completion, {
      trigger: '@',
      minLength: 2,
      completions: mentionableGroups,
      renderSuggestion: renderGroup
    }), _jsx(Completion, {
      trigger: ':',
      completions: availableEmoji,
      getCompletions: getEmojiCompletions,
      getText: getEmojiText,
      renderSuggestion: renderEmoji
    })));
  };

  return Input;
}(React.Component)) || _class);
export { Input as default };
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  mentionableUsers: PropTypes.array.isRequired,
  mentionableGroups: PropTypes.array.isRequired,
  availableEmoji: PropTypes.array.isRequired
} : {};
//# sourceMappingURL=index.js.map
