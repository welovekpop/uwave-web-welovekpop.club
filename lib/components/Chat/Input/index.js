'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

var _uniqBy = require('lodash/uniqBy');

var _uniqBy2 = _interopRequireDefault(_uniqBy);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _reactAbstractAutocomplete = require('react-abstract-autocomplete');

var _reactAbstractAutocomplete2 = _interopRequireDefault(_reactAbstractAutocomplete);

var _SuggestionsList = require('./SuggestionsList');

var _SuggestionsList2 = _interopRequireDefault(_SuggestionsList);

var _EmojiSuggestion = require('./EmojiSuggestion');

var _EmojiSuggestion2 = _interopRequireDefault(_EmojiSuggestion);

var _GroupSuggestion = require('./GroupSuggestion');

var _GroupSuggestion2 = _interopRequireDefault(_GroupSuggestion);

var _UserSuggestion = require('./UserSuggestion');

var _UserSuggestion2 = _interopRequireDefault(_UserSuggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSuggestions = function renderSuggestions(children) {
  return (0, _jsx3.default)(_SuggestionsList2.default, {}, void 0, children);
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
  return _react2.default.createElement(_UserSuggestion2.default, props);
};

// Group suggestions:
var renderGroup = function renderGroup(props) {
  return _react2.default.createElement(_GroupSuggestion2.default, props);
};

// Emoji suggestions:
var getEmojiCompletions = function getEmojiCompletions(value, _ref3) {
  var trigger = _ref3.trigger,
      completions = _ref3.completions;

  var compare = value.substr(trigger.length).toLowerCase();
  var results = completions.filter(function (emoji) {
    return emoji.shortcode.substr(0, compare.length).toLowerCase() === compare;
  });
  return (0, _sortBy2.default)((0, _uniqBy2.default)(results, function (emoji) {
    return emoji.image;
  }), function (emoji) {
    return emoji.shortcode.length;
  });
};
var getEmojiText = function getEmojiText(value) {
  return ':' + value.shortcode + ': ';
};
var renderEmoji = function renderEmoji(props) {
  return _react2.default.createElement(_EmojiSuggestion2.default, props);
};

var enhance = (0, _reactI18next.translate)();

var ChatInput = function (_React$Component) {
  (0, _inherits3.default)(ChatInput, _React$Component);

  function ChatInput() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChatInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ChatInput.prototype.clear = function clear() {
    this.setState({ value: '' });
  };

  ChatInput.prototype.render = function render() {
    var _state = this.state,
        focused = _state.focused,
        value = _state.value;
    var _props = this.props,
        t = _props.t,
        mentionableUsers = _props.mentionableUsers,
        mentionableGroups = _props.mentionableGroups,
        availableEmoji = _props.availableEmoji;

    var focusClass = focused ? 'is-focused' : '';
    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('ChatInput', focusClass)
    }, void 0, (0, _jsx3.default)(_reactAbstractAutocomplete2.default, {
      inputProps: {
        type: 'text',
        className: (0, _classnames2.default)('ChatInput-input', focusClass),
        placeholder: focused ? '' : t('chat.placeholder'),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown
      },
      onUpdate: this.handleUpdate,
      value: value,
      renderSuggestions: renderSuggestions,
      limit: 6
    }, void 0, (0, _jsx3.default)(_reactAbstractAutocomplete.Completion, {
      trigger: '@',
      minLength: 2,
      completions: mentionableUsers,
      getCompletions: getUserCompletions,
      getText: getUserText,
      renderSuggestion: renderUser
    }), (0, _jsx3.default)(_reactAbstractAutocomplete.Completion, {
      trigger: '@',
      minLength: 2,
      completions: mentionableGroups,
      renderSuggestion: renderGroup
    }), (0, _jsx3.default)(_reactAbstractAutocomplete.Completion, {
      trigger: ':',
      completions: availableEmoji,
      getCompletions: getEmojiCompletions,
      getText: getEmojiText,
      renderSuggestion: renderEmoji
    })));
  };

  return ChatInput;
}(_react2.default.Component);

ChatInput.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onSend: _propTypes2.default.func.isRequired,
  mentionableUsers: _propTypes2.default.array.isRequired,
  mentionableGroups: _propTypes2.default.array.isRequired,
  availableEmoji: _propTypes2.default.array.isRequired
} : {};

exports.default = enhance(ChatInput);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
