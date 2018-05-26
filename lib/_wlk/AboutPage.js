"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _Facebook = _interopRequireDefault(require("./icons/Facebook"));

var _YouTube = _interopRequireDefault(require("./icons/YouTube"));

var _Instagram = _interopRequireDefault(require("./icons/Instagram"));

var _Github = _interopRequireDefault(require("./icons/Github"));

var _Twitter = _interopRequireDefault(require("./icons/Twitter"));

var _Slack = _interopRequireDefault(require("./icons/Slack"));

var _SocialMediaLink = _interopRequireDefault(require("./SocialMediaLink"));

require("./AboutPage.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "wlk-AboutPage"
}, void 0, (0, _jsx2.default)("h1", {
  className: "wlk-AboutPage-title"
}, void 0, "WE \u2665 KPOP"), (0, _jsx2.default)("p", {}, void 0, "WLK is a community dedicated to sharing the best South Korean music. Listen to what other people play live from YouTube and SoundCloud, share your opinion by talking to others and contribute to each day's unique playlist by hand-picking tracks yourself."), (0, _jsx2.default)("p", {}, void 0, "WLK can also be found on:"), (0, _jsx2.default)("ul", {}, void 0, (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "YouTube",
  href: "https://youtube.com/c/welovekpopclub"
}, void 0, (0, _jsx2.default)(_YouTube.default, {})), (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "Facebook",
  href: "https://facebook.com/wlk.yt"
}, void 0, (0, _jsx2.default)(_Facebook.default, {})), (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "Instagram",
  href: "https://instagram.com/wlk_official"
}, void 0, (0, _jsx2.default)(_Instagram.default, {})), (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "Twitter",
  href: "https://twitter.com/wlk_official"
}, void 0, (0, _jsx2.default)(_Twitter.default, {})), (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "Github",
  href: "https://github.com/welovekpop"
}, void 0, (0, _jsx2.default)(_Github.default, {})), (0, _jsx2.default)(_SocialMediaLink.default, {
  label: "Slack",
  href: "https://slack.wlk.yt"
}, void 0, (0, _jsx2.default)(_Slack.default, {}))), (0, _jsx2.default)("hr", {
  className: "wlk-AboutPage-separator"
}), (0, _jsx2.default)("h2", {}, void 0, "Rules"), (0, _jsx2.default)("div", {
  className: "wlk-Rules"
}, void 0, (0, _jsx2.default)("div", {
  className: "wlk-Rules-left"
}, void 0, (0, _jsx2.default)("ol", {
  start: "1",
  className: "wlk-Rules-list"
}, void 0, (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Play only Korean related songs."), (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Songs that are over 7:00 minutes long might be skipped."), (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Songs that are heavily downvoted might be skipped."), (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Songs that are in the history (previous 25 songs) will be skipped."), (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Try to play the best quality versions of songs."))), (0, _jsx2.default)("div", {
  className: "wlk-Rules-right"
}, void 0, (0, _jsx2.default)("ol", {
  start: "6",
  className: "wlk-Rules-list"
}, void 0, (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Chat in English!"), (0, _jsx2.default)("li", {
  className: "wlk-Rules-item"
}, void 0, "Don't spam the chat.")))));

var _default = function _default() {
  return _ref;
};

exports.default = _default;
//# sourceMappingURL=AboutPage.js.map
